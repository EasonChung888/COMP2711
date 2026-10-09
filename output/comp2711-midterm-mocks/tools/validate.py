#!/usr/bin/env python3
"""Validate content correspondence, fixed scoring and final PDF geometry/fonts."""
import argparse
import json
import re
from pathlib import Path
from pypdf import PdfReader
import build


def problem_heading_numbers(text):
    """Match generated headings, including wrapped titles but excluding prose."""
    start = re.compile(r'^[ \t]*Problem[ \t]+(\d+)(?=[ \t]*(?::|\[|$))')
    end = re.compile(r'\[\d+\s+points\][ \t]*$')
    numbers, candidate, number = [], '', None
    for line in text.splitlines():
        match = start.match(line)
        if match:
            candidate, number = line, int(match[1])
        elif candidate and line.strip():
            candidate += '\n' + line
        else:
            candidate, number = '', None
        if candidate and end.search(candidate):
            numbers.append(number)
            candidate, number = '', None
    return numbers


def validate_pdf(path, paper, solutions):
    reader = PdfReader(path)
    texts, fonts = [], set()
    locations = {}
    for n, page in enumerate(reader.pages, 1):
        build.require(abs(float(page.mediabox.width) - 612) < 0.01
                      and abs(float(page.mediabox.height) - 792) < 0.01, f'{path.name}: page {n} is not US Letter')
        text = page.extract_text() or ''
        build.require(text.strip(), f'{path.name}: text extraction empty on page {n}')
        build.require('\ufffd' not in text, f'{path.name}: page {n} has a replacement character')
        texts.append(text)
        for number in problem_heading_numbers(text):
            locations.setdefault(number, []).append(n)
        for font in page['/Resources'].get('/Font', {}).values():
            font = font.get_object()
            fonts.add(str(font.get('/BaseFont', '')))
            embedded_fonts = font.get('/DescendantFonts', [font])
            for embedded in embedded_fonts:
                embedded = embedded.get_object()
                descriptor = embedded.get('/FontDescriptor')
                build.require(descriptor is not None, f'{path.name}: unembedded font {font.get("/BaseFont")}')
                descriptor = descriptor.get_object()
                build.require(any(key in descriptor for key in ['/FontFile', '/FontFile2', '/FontFile3']), f'{path.name}: font program absent')
    build.require(any('CMR12' in f.upper() for f in fonts), f'{path.name}: 12pt Computer Modern body absent')
    build.require(all(re.search(r'\+(?:CM|MS|SF)', f.upper()) for f in fonts), f'{path.name}: unexpected non-Computer-Modern/CM-Super/AMS font')
    build.require('mock' in texts[0].lower(), f'{path.name}: mock label absent')
    build.require(sorted(locations) == list(range(1, 11)) and all(len(p) == 1 for p in locations.values()), f'{path.name}: missing/duplicate problem headings')
    if not solutions:
        build.require(len({p[0] for p in locations.values()}) == 10, f'{path.name}: problems must start on separate pages')
        build.require(len(reader.pages) >= 13, f'{path.name}: expected cover, ten problems and draft space')
    # Glyph bounds and page-number centering are checked on the final PDF, not just TeX.
    import pdfplumber
    with pdfplumber.open(path) as pdf:
        for n, page in enumerate(pdf.pages, 1):
            chars = [c for c in page.chars if c['text'].strip()]
            build.require(all(35 <= c['x0'] and c['x1'] <= 575 and 30 <= c['top'] and c['bottom'] <= 780 for c in chars), f'{path.name}: clipped/out-of-region glyph on page {n}')
            if solutions or n > 1:
                footer = [c for c in chars if 710 <= c['top'] <= 714 and 290 <= c['x0'] and c['x1'] <= 322]
                build.require(footer, f'{path.name}: page number absent on page {n}')
                build.require(''.join(c['text'] for c in footer) == str(n), f'{path.name}: incorrect page number on page {n}')
                center = (min(c['x0'] for c in footer) + max(c['x1'] for c in footer)) / 2
                build.require(abs(center - 306) <= 1, f'{path.name}: page number is not centered on page {n}')
                body = [c for c in chars if c not in footer]
                build.require(all(c['bottom'] <= 700 for c in body), f'{path.name}: body collides with raised footer on page {n}')
    return {'file': path.name, 'pages': len(reader.pages), 'fonts': sorted(fonts), 'problem_start_pages': locations}


def validate(root, data_only=False):
    root = Path(root)
    papers, coverage = build.load_data(root)
    result = {'papers': len(papers), 'problems': sum(len(x['problems']) for x in papers.values()), 'coverage_concepts': len(coverage), 'pdfs': []}
    if data_only:
        return result
    expected = {f'COMP2711_Mock_Midterm_{n:02}{suffix}.pdf' for n in range(1, 11) for suffix in ['', '_Solutions']}
    actual = {p.name for p in (root / 'pdf').glob('*.pdf')}
    build.require(actual == expected, f'Expected exactly 20 final PDFs; missing {sorted(expected-actual)}, unexpected {sorted(actual-expected)}')
    build.require({p.name for p in (root / 'pdf').iterdir()} == expected, 'Final pdf directory contains non-PDF artifacts')
    for n, paper in sorted(papers.items()):
        for solutions in [False, True]:
            name = f'COMP2711_Mock_Midterm_{n:02}' + ('_Solutions' if solutions else '')
            result['pdfs'].append(validate_pdf(root / 'pdf' / (name + '.pdf'), paper, solutions))
            log = root / 'audit/build-logs' / (name + '.tex.log')
            build.require(log.is_file(), f'{name}: TeX log absent')
            text = log.read_text(errors='replace')
            build.require(not re.search(r'Overfull \\[hv]box|Missing character:|^!|Emergency stop|Fatal error', text, re.M), f'{name}: TeX error/overfull box/missing glyph in TeX log')
    return result


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--root', required=True, type=Path)
    parser.add_argument('--data-only', action='store_true')
    args = parser.parse_args()
    try:
        result = validate(args.root, args.data_only)
        (args.root / 'audit').mkdir(exist_ok=True)
        (args.root / 'audit/validation.json').write_text(json.dumps(result, indent=2))
        print(f'Validated {result["papers"]} papers, {result["problems"]} problems, {len(result["pdfs"])} PDFs.')
    except (ValueError, json.JSONDecodeError) as error:
        parser.exit(1, f'ERROR: {error}\n')
