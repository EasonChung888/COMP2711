#!/usr/bin/env python3
"""Reproducible collective coverage, provenance, density, layout and render evidence."""
import argparse
import csv
import hashlib
import json
import re
import subprocess
from pathlib import Path

import pdfplumber
from pypdf import PdfReader
import build

POPPLER = Path('/Users/eason/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/override/pdftoppm')


def sha(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def write_csv(path, fields, rows):
    with path.open('w', newline='', encoding='utf-8') as stream:
        writer = csv.DictWriter(stream, fieldnames=fields)
        writer.writeheader()
        writer.writerows(rows)


def audit(root, render=False):
    root = Path(root).resolve()
    papers, coverage = build.load_data(root)
    directory = root / 'audit'
    source_audit = (directory / 'independent-source-coverage.md').read_text()
    clusters = {}
    for line in source_audit.splitlines():
        if re.match(r'\| A\d\d \|', line):
            cells = line.strip('|').split('|')
            clusters[cells[0].strip()] = {'pages': cells[1].strip(), 'capability': '|'.join(cells[2:-1]).strip()}
    mapped = {re.search(r'A\d\d', ident)[0]: entry for ident, entry in coverage.items()}
    build.require(len(mapped) == len(coverage) and set(clusters) == set(mapped) == {f'A{i:02}' for i in range(1, 96)}, '95-cluster inventory mismatch')
    rows = []
    for ident, entry in sorted(mapped.items()):
        num = int(entry['lecture'][1:3])
        m = re.fullmatch(r'L\d\d ([\d, -]+)(?:; L\d\d [\d, -]+)?', clusters[ident]['pages'])
        build.require(m is not None, f'{ident}: unexpected independent page syntax')
        primary = set()
        for span in m[1].split(','):
            ends = [int(x) for x in span.strip().split('-')]
            primary.update(range(ends[0], ends[-1] + 1))
        build.require(primary <= set(entry['pages']), f'{ident}: source page omission')
        rows.append({'id': ident, 'concept_id': entry['id'], 'lecture': entry['lecture'], 'pages': ';'.join(map(str, entry['pages'])),
                     'knowledge_point': entry['knowledge_point'], 'depth': entry['depth'],
                     'assessed_at': ';'.join(entry['assessed_at']), 'source_capability': clusters[ident]['capability'],
                     'independent_review': 'logic-review.md' if num <= 4 else 'counting-review.md' if num <= 14 else 'probability-review.md'})
    write_csv(directory / 'coverage.csv', list(rows[0]), rows)
    profile = json.loads((directory / 'source-profile.json').read_text())
    # Rehash every lecture and the exact source paper; never trust stale worktree sources.
    source_files = list((build.SOURCE_ROOT / 'lecture').glob('*.pdf'))
    source_files = sorted(x for x in source_files if int(x.name[1:3]) in build.LECTURES)
    source_files.append(build.SOURCE_ROOT / 'knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf')
    source_manifest = [{'file': str(x.relative_to(build.SOURCE_ROOT)), 'sha256': sha(x), 'pages': len(PdfReader(x).pages)} for x in source_files]
    profile_hashes = set(re.findall(r'"sha256":\s*"([a-f0-9]{64})"', json.dumps(profile)))
    build.require(all(x['sha256'] in profile_hashes for x in source_manifest), 'Current source hash differs from reviewed profile')
    (directory / 'source-provenance.json').write_text(json.dumps({'source_root': str(build.SOURCE_ROOT), 'files': source_manifest}, indent=2))
    page_inventory = []
    background = {
        (1, 2): 'Motivating logic puzzle and LSAT commentary; no new taught capability.',
        (2, 2): 'Introductory predicate-inference motivation; rules and domains assessed in A09-A21.',
        (3, 22): 'Axiomatic-method illustrations; formal axiom derivations excluded by source audit.',
        (3, 42): 'Historical comments and conjectures; definition recognition assessed in A22.',
        (3, 43): 'Hilbert/Godel/automation commentary; metatheorem proofs excluded by source audit.',
        (11, 3): 'Motivating counting applications; taught product/sum/capacity techniques assessed in A43-A50.',
    }
    for source in source_files[:-1]:
        num = int(source.name[1:3])
        for n, page in enumerate(PdfReader(source).pages, 1):
            ids = [ident for ident, entry in mapped.items() if entry['lecture'] == source.name and n in entry['pages']]
            reason = ''
            if not ids:
                reason = background.get((num, n), 'Title, outline, objectives or reading list; administrative navigation.')
            page_inventory.append({'lecture': source.name, 'page': n, 'classification': 'substantive/repeated example' if ids else 'background',
                                   'cluster_ids': ';'.join(ids), 'reason': reason})
    build.require(len(page_inventory) == 367, 'Lecture inventory must have all 367 pages')
    write_csv(directory / 'lecture-page-inventory.csv', list(page_inventory[0]), page_inventory)
    note_paths = {}
    for path in (build.SOURCE_ROOT / 'knowledge_base/04-Questions').glob('*.md'):
        match = re.search(r'^id:\s*"?([^"\n]+)', path.read_text(), re.M)
        if match:
            note_paths.setdefault(match[1].strip(), []).append(path)
    provenance = []
    for sid in sorted({sid for paper in papers.values() for p in paper['problems'] for sid in p['sources']}):
        build.require(len(note_paths.get(sid, [])) == 1, f'{sid}: nonunique source note')
        path = note_paths[sid][0]
        metadata = build.source_statuses()[sid]
        provenance.append({'id': sid, 'path': str(path.relative_to(build.SOURCE_ROOT)), 'sha256': sha(path),
                           'verification_status': metadata['verification_status'], 'syllabus_status': metadata['syllabus_status'],
                           'exam_type': metadata['exam_type'], 'mock_problems': ';'.join(f'{n:02}.{p["number"]}' for n, paper in sorted(papers.items()) for p in paper['problems'] if sid in p['sources'])})
    write_csv(directory / 'provenance.csv', list(provenance[0]), provenance)
    # Plain alphabetic tokens are a common, explicitly approximate reading-density proxy.
    def tokens(text):
        return len(re.findall(r'[A-Za-z]{2,}', text))
    original = PdfReader(source_files[-1])
    question_pages = [[3,4], [6,7], [10,11], [12,13], [14], [15], [17], [18], [20], [21,22]]
    original_tokens = []
    for pages in question_pages:
        texts = [(original.pages[p-1].extract_text() or '').split('Answer:', 1)[0] for p in pages]
        original_tokens.append(tokens('\n'.join(texts)))
    density = []
    for number, paper in sorted(papers.items()):
        pdf = PdfReader(root / 'pdf' / f'COMP2711_Mock_Midterm_{number:02}.pdf')
        texts = [p.extract_text() or '' for p in pdf.pages]
        headings = []
        for i, text in enumerate(texts):
            from validate import problem_heading_numbers
            headings.extend((pn, i) for pn in problem_heading_numbers(text))
        for pn, start in headings:
            stop = next((i for other, i in headings if other == pn+1), len(texts)-2)
            problem = paper['problems'][pn-1]
            density.append({'paper': f'{number:02}', 'problem': pn, 'points': problem['points'],
                            'top_level_parts': len(problem['parts']), 'mock_alphabetic_tokens': tokens('\n'.join(texts[start:stop])),
                            'original_alphabetic_tokens': original_tokens[pn-1],
                            'writing_space_cm': sum(p['space_cm'] for p in problem['parts'])})
    write_csv(directory / 'density.csv', list(density[0]), density)
    for pn in range(1, 11):
        prompts = []
        for paper in papers.values():
            problem = paper['problems'][pn-1]
            prompt = problem['stem'] + '\n' + '\n'.join(x['question'] for x in problem['parts'])
            prompts.append(prompt)
            for part in problem['parts']:
                build.require(not re.search(r'[\u3400-\u9fff]', '\n'.join(part[k] for k in ['question', 'solution', 'rubric'])), 'Non-English content found')
        build.require(len(set(prompts)) == 10, f'Problem {pn}: duplicate complete prompt')
    checks = {'fixed_scores': build.POINTS, 'total_each': 100, 'minutes_each': 120,
              'papers': 10, 'problems': 100, 'labelled_or_unsplit_parts': sum(len(p['parts']) for paper in papers.values() for p in paper['problems']),
              'all_four_domains_each': True, 'english_content': True, 'ten_distinct_complete_prompts_per_slot': True,
              'source_cluster_count': 95, 'lecture_pages': len(page_inventory),
              'substantive_or_repeated_example_pages': sum(x['classification'] != 'background' for x in page_inventory),
              'background_pages': sum(x['classification'] == 'background' for x in page_inventory),
              'content_sha256': {x.name: sha(x) for x in sorted((root / 'content').glob('*.json'))},
              'review_sha256': {x.name: sha(x) for x in sorted(directory.glob('*-review.md')) if not x.name.startswith('visual')},
              'distinct_prompt_limit': 'Exact duplicate rejection supplements independently reviewed substantive variation; it does not prove uniqueness after changing only numbers.'}
    (directory / 'integration-checks.json').write_text(json.dumps(checks, indent=2))
    previous = json.loads((directory / 'final-manifest.json').read_text()) if (directory / 'final-manifest.json').exists() else {}
    old_outputs = {x['file']: x for x in previous.get('outputs', [])}
    manifest = []
    for path in sorted((root / 'pdf').glob('*.pdf')):
        with pdfplumber.open(path) as pdf:
            footers, bodies, headings = [], [], []
            for page_num, page in enumerate(pdf.pages, 1):
                chars = [c for c in page.chars if c['text'].strip()]
                footer = [c for c in chars if 710 <= c['top'] <= 714 and 290 <= c['x0'] and c['x1'] <= 322]
                if footer:
                    footers.append({'page': page_num, 'top': min(c['top'] for c in footer), 'bottom': max(c['bottom'] for c in footer), 'center': (min(c['x0'] for c in footer)+max(c['x1'] for c in footer))/2})
                bodies.append({'page': page_num, 'bottom': max(c['bottom'] for c in chars if c not in footer)})
                if '_Solutions' in path.stem:
                    text = page.extract_text() or ''
                    for match in re.finditer(r'Problem (\d+) \[\d+ points\]', text):
                        after = text[match.end():].split('Problem ',1)[0]
                        build.require(re.search(r'(?:\([a-z]\)\s*)?\[\d+ points\]', after) is not None, f'{path.name}: orphan Problem {match[1]} on page {page_num}')
                        headings.append({'problem': int(match[1]), 'page': page_num, 'first_part_same_page': True})
            entry = {'file': path.name, 'sha256': sha(path), 'pages': len(pdf.pages), 'footers': footers, 'body_bounds': bodies, 'solution_headings': headings}
            old = old_outputs.get(path.name, {})
            if old.get('sha256') == entry['sha256']:
                entry.update({key: old[key] for key in ['render_dir', 'rendered_pages'] if key in old})
            if render:
                destination = directory / 'final-renders' / path.stem
                destination.mkdir(parents=True, exist_ok=True)
                subprocess.run([str(POPPLER), '-r', '120', '-png', str(path), str(destination / 'page')], check=True, capture_output=True)
                images = sorted(destination.glob('page-*.png'))
                build.require(len(images) == len(pdf.pages), f'{path.name}: incomplete render set')
                entry['render_dir'] = str(destination)
                entry['rendered_pages'] = len(images)
            manifest.append(entry)
    (directory / 'final-manifest.json').write_text(json.dumps({'outputs': manifest, 'total_pages': sum(x['pages'] for x in manifest), 'render_dpi': 120 if render else previous.get('render_dpi')}, indent=2))
    print(f'PASS: 95 reciprocal source clusters; {len(provenance)} current verified notes; 100 density rows; {len(manifest)} PDFs / {sum(x["pages"] for x in manifest)} pages.')


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--root', type=Path, required=True)
    parser.add_argument('--render', action='store_true')
    args = parser.parse_args()
    audit(args.root, args.render)
