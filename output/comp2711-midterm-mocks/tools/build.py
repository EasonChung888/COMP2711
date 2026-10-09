#!/usr/bin/env python3
"""Strict JSON assembly and Computer Modern LaTeX rendering for the mock set."""
from __future__ import annotations

import argparse
import hashlib
import json
import re
import subprocess
from functools import lru_cache
from pathlib import Path

POINTS = [10, 13, 12, 16, 10, 9, 7, 6, 7, 10]
SOURCE_ROOT = Path('/Users/eason/Documents/ChatGPT/COMP2711')
LECTURES = {1, 2, 3, 4, 11, 12, 13, 14, 15, 16, 17}


@lru_cache(maxsize=16)
def lecture_page_count(lecture):
    from pypdf import PdfReader
    source = SOURCE_ROOT / 'lecture' / lecture
    require(source.is_file(), f'Lecture file absent: {lecture}')
    return len(PdfReader(source).pages)


def require(condition, message):
    if not condition:
        raise ValueError(message)


def source_statuses(source_root=SOURCE_ROOT):
    statuses = {}
    for path in (source_root / 'knowledge_base/04-Questions').glob('*.md'):
        text = path.read_text(encoding='utf-8')
        fields = {key: re.search(r'^' + key + r':\s*"?([^"\n]+)', text, re.M)
                  for key in ['id', 'verification_status', 'syllabus_status', 'exam_type']}
        if all(fields.values()):
            statuses[fields['id'][1].strip()] = {
                key: fields[key][1].strip() for key in fields}
            topics = re.search(r'^topics:\s*(.+)$', text, re.M)
            statuses[fields['id'][1].strip()]['topics'] = topics[1] if topics else ''
    return statuses


def load_data(root):
    """Read subject JSON documents, merging by paper and problem number."""
    root = Path(root)
    files = sorted((root / 'content').glob('*.json'))
    require(files, f'No subject JSON files in {root / "content"}')
    papers, coverage = {}, {}
    for path in files:
        data = json.loads(path.read_text(encoding='utf-8'))
        require(isinstance(data, dict) and isinstance(data.get('papers'), list)
                and isinstance(data.get('coverage'), list), f'{path}: papers and coverage arrays required')
        seen = set()
        for source in data['papers']:
            number = source.get('number')
            require(type(number) is int and number not in seen, f'{path}: duplicate/invalid paper {number}')
            seen.add(number)
            require(isinstance(source.get('problems'), list), f'{path}: problems array required')
            target = papers.setdefault(number, {'number': number, 'problems': []})
            existing = {p['number'] for p in target['problems']}
            for problem in source['problems']:
                require(type(problem.get('number')) is int, f'{path}: invalid problem number')
                require(problem['number'] not in existing, f'Duplicate problem {number}.{problem["number"]}')
                existing.add(problem['number'])
                target['problems'].append(problem)
        for entry in data['coverage']:
            ident = entry.get('id')
            require(isinstance(ident, str) and ident and ident not in coverage, f'Duplicate/invalid coverage ID {ident}')
            coverage[ident] = entry
    for paper in papers.values():
        paper['problems'].sort(key=lambda p: p['number'])
    validate_data(papers, coverage)
    return papers, coverage


def validate_data(papers, coverage):
    require(sorted(papers) == list(range(1, 11)), 'Expected exactly papers 01--10')
    statuses = source_statuses()
    actual = {}
    for number, paper in papers.items():
        problems = paper['problems']
        require([p['number'] for p in problems] == list(range(1, 11)), f'Paper {number}: expected problems 1--10')
        require(all(type(p.get('points')) is int for p in problems), f'Paper {number}: integer problem scores required')
        require([p.get('points') for p in problems] == POINTS, f'Paper {number}: incorrect problem scores')
        require(sum(p['points'] for p in problems) == 100, f'Paper {number}: total must be 100')
        for problem in problems:
            loc = f'{number:02}.{problem["number"]}'
            require(isinstance(problem.get('title'), str) and problem['title'].strip(), f'{loc}: missing title')
            require(isinstance(problem.get('stem'), str), f'{loc}: missing stem string')
            require(isinstance(problem.get('sources'), list) and problem['sources'], f'{loc}: verified sources required')
            for sid in problem['sources']:
                require(sid in statuses, f'{loc}: unknown source ID {sid}')
                require(statuses[sid]['verification_status'] == 'verified'
                        and statuses[sid]['syllabus_status'] == 'in-scope'
                        and statuses[sid]['exam_type'] == 'midterm', f'{loc}: source {sid} is not a verified in-scope midterm')
                require(any(f'Topic - {area} -' in statuses[sid]['topics'] for area in
                            ['Logic', 'Sets and Functions', 'Counting', 'Probability']),
                        f'{loc}: source {sid} lies outside the four mock-exam areas')
            parts = problem.get('parts')
            require(isinstance(parts, list) and parts, f'{loc}: parts required')
            require(all(type(x.get('points')) is int and x['points'] > 0 for x in parts), f'{loc}: positive integer part scores required')
            require(sum(x['points'] for x in parts) == problem['points'], f'{loc}: part scores do not sum')
            labels = [x.get('label') for x in parts]
            require(all(isinstance(x, str) and re.fullmatch('[a-z]*', x) for x in labels)
                    and len(set(labels)) == len(labels) and ('' not in labels or len(labels) == 1), f'{loc}: invalid/duplicate labels')
            for part in parts:
                ref = loc + ('.' + part['label'] if part['label'] else '')
                for key in ['question', 'solution', 'rubric']:
                    require(isinstance(part.get(key), str) and part[key].strip(), f'{ref}: missing {key}')
                require(part['solution'].strip() != part['question'].strip(), f'{ref}: solution repeats question verbatim')
                require(type(part.get('space_cm')) in [int, float] and 0 <= part['space_cm'] <= 22,
                        f'{ref}: space_cm must lie between 0 and 22')
                concepts = part.get('concepts')
                require(isinstance(concepts, list) and concepts and len(set(concepts)) == len(concepts), f'{ref}: concept IDs required')
                for concept in concepts:
                    require(concept in coverage, f'{ref}: undefined concept {concept}')
                    actual.setdefault(concept, set()).add(ref)
    for ident, entry in coverage.items():
        lecture = entry.get('lecture', '')
        match = re.match(r'L(\d\d)-', lecture)
        require(match and int(match[1]) in LECTURES and lecture.endswith('.pdf'), f'{ident}: invalid/out-of-scope lecture')
        pages = entry.get('pages')
        require(isinstance(pages, list) and pages and all(type(x) is int and 1 <= x <= lecture_page_count(lecture) for x in pages), f'{ident}: invalid lecture pages')
        require(isinstance(entry.get('knowledge_point'), str) and entry['knowledge_point'].strip(), f'{ident}: knowledge_point required')
        require(isinstance(entry.get('depth'), str) and entry['depth'].strip(), f'{ident}: depth required')
        refs = entry.get('assessed_at')
        require(isinstance(refs, list) and len(set(refs)) == len(refs), f'{ident}: assessed_at list required/duplicates')
        require(set(refs) == actual.get(ident, set()) and bool(refs), f'{ident}: assessed_at disagrees with actual assessment')
    for number, paper in papers.items():
        areas = set()
        for problem in paper['problems']:
            for part in problem['parts']:
                for concept in part['concepts']:
                    lecture = int(coverage[concept]['lecture'][1:3])
                    areas.add('logic' if lecture <= 3 else 'sets' if lecture == 4 else 'counting' if lecture <= 14 else 'probability')
        require(len(areas) == 4, f'Paper {number}: all four subject areas required')


def load_papers(root):
    return load_data(root)[0]


def escape(text):
    return ''.join({'\\': r'\textbackslash{}', '&': r'\&', '%': r'\%', '$': r'\$', '#': r'\#', '_': r'\_', '{': r'\{', '}': r'\}', '~': r'\textasciitilde{}', '^': r'\textasciicircum{}'}.get(c, c) for c in text)


def cover(paper):
    number = paper['number']
    return rf'''\thispagestyle{{empty}}
\begin{{center}}
\textbf{{COMP 2711}}\\
\textbf{{Discrete Math Tools for Computer Science}}\\
{{\large\bfseries Mock Midterm Examination {number:02}}}\\[1em]
\textbf{{Practice material -- not an official examination}}\\[0.7em]
Time allowed: 120 minutes \hfill Total: 100 points
\end{{center}}
\vspace{{1.1cm}}
\begin{{center}}\fbox{{\fbox{{\begin{{minipage}}{{0.93\textwidth}}
Name: \hrulefill\quad Student ID: \hrulefill\\[0.6em]
Email: \hrulefill\quad Lecture: \hrulefill
\end{{minipage}}}}}}\end{{center}}
\vspace{{0.6cm}}
\textbf{{Instructions}}
\begin{{itemize}}[leftmargin=1.3em]
\item This closed-book practice exam consists of 10 problems. You may use one A4 single-sided handwritten cheat sheet.
\item Answer all problems in the spaces provided. You may also use the backs of pages and the draft pages. Each problem starts on a new page; some answers require only a few lines.
\item Give a proof, justification, or counterexample when requested. State any additional notation you introduce.
\item Answers may be left in exact form using binomial coefficients, factorials, and $C(n,k)$ or $P(n,k)$. For example, $\binom{{5}}{{3}}+\binom{{4}}{{2}}$ is acceptable. Avoid nonstandard notation such as $nCk$ or $nPk$.
\item The separate solutions document contains derivations and marking notes. Attempt the exam before consulting it.
\end{{itemize}}
\vspace{{1.0cm}}
\begin{{center}}
\Large
\setlength{{\tabcolsep}}{{2pt}}
\begin{{tabular*}}{{\textwidth}}{{@{{\extracolsep{{\fill}}}}|l|*{{11}}{{c|}}}}\hline
Problems & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & Total\\\hline
Points & 10 & 13 & 12 & 16 & 10 & 9 & 7 & 6 & 7 & 10 & 100\\\hline
Score & & & & & & & & & & & \\[0.7em]\hline
\end{{tabular*}}
\end{{center}}
\vspace{{0.8cm}}
'''


def solution_reservation(solution):
    """Reserve the native picture plus label/list spacing before its item."""
    picture = re.search(r'\\begin\{picture\}\([\d.]+,([\d.]+)\)', solution)
    unit = re.search(r'\\setlength\{\\unitlength\}\{([\d.]+)(mm|cm|pt|in)\}', solution)
    if picture and unit:
        height = float(picture[1]) * float(unit[1])
        return rf'\dimexpr {height:g}{unit[2]}+7\baselineskip\relax'
    return r'4\baselineskip'


def render_exam(paper, solutions=False):
    """Render one assembled paper; solution prose never receives question/stem text."""
    if solutions:
        chunks = [rf'\begin{{center}}\textbf{{COMP 2711 -- Mock Midterm {paper["number"]:02}}}\\{{\large\bfseries Solutions and marking notes}}\\Practice material -- not an official examination\end{{center}}\vspace{{0.5em}}']
    else:
        chunks = [cover(paper)]
    for problem in paper['problems']:
        if not solutions:
            chunks.append(r'\clearpage')
            chunks.append(r'\vspace*{0.21in}')
        elif problem['number'] > 1:
            chunks.append(r'\vspace{0.65em}')
        title = '' if solutions else ': ' + escape(problem['title'])
        reservation = ''
        if solutions:
            first = solution_reservation(problem['parts'][0]['solution'])
            reservation = rf'[\dimexpr 3\baselineskip+{first}\relax]'
        chunks.append(rf'\problemheading{reservation}{{Problem {problem["number"]}{title} [{problem["points"]} points]}}')
        if not solutions:
            chunks.append(r'\begin{list}{}{\setlength{\leftmargin}{0.25in}\setlength{\rightmargin}{0.25in}}\item[]')
        if not solutions and problem['stem'].strip():
            chunks.append(problem['stem'])
        chunks.append(r'\begin{description}[font=\normalfont,leftmargin=1.2em,labelsep=0.4em]')
        for index, part in enumerate(problem['parts']):
            label = '(' + part['label'] + ')' if part['label'] else ''
            if index > 0:
                chunks.append(rf'\Needspace{{{solution_reservation(part["solution"])}}}' if solutions else rf'\Needspace{{\dimexpr {part["space_cm"]}cm+4\baselineskip\relax}}')
            chunks.append(rf'\item[{label}] \textbf{{[{part["points"]} points]}} ' + (part['solution'] if solutions else part['question']))
            if solutions:
                chunks.append(r'\par\textit{Marking:} ' + part['rubric'])
            elif part['space_cm']:
                chunks.append(rf'\examspace{{{part["space_cm"]}}}')
        chunks.append(r'\end{description}')
        if not solutions:
            chunks.append(r'\end{list}')
    if not solutions:
        for _ in range(2):
            chunks.append(r'\clearpage\textbf{Draft Paper}\par\textit{Mock examination working space.}\vfill')
    template = Path(__file__).with_name('template.tex').read_text(encoding='utf-8')
    return template.replace('@@CONTENT@@', '\n'.join(chunks))


def build(root, tectonic=None):
    root = Path(root).resolve()
    papers, coverage = load_data(root)
    executable = Path(tectonic).resolve() if tectonic else Path(__file__).parent / 'cache/tectonic'
    require(executable.is_file(), f'Tectonic not found: {executable}; pass --tectonic')
    texdir, pdfdir, logs = root / 'source', root / 'pdf', root / 'audit/build-logs'
    for directory in [texdir, pdfdir, logs]:
        directory.mkdir(parents=True, exist_ok=True)
    outputs = []
    for number in sorted(papers):
        for solutions in [False, True]:
            name = f'COMP2711_Mock_Midterm_{number:02}' + ('_Solutions' if solutions else '')
            tex = texdir / (name + '.tex')
            tex.write_text(render_exam(papers[number], solutions), encoding='utf-8')
            command = [str(executable), '-X', 'compile', '--keep-logs', '--outdir', str(pdfdir), str(tex)]
            result = subprocess.run(command, capture_output=True, text=True)
            (logs / (name + '.log')).write_text(result.stdout + '\n' + result.stderr, encoding='utf-8')
            require(result.returncode == 0, f'Compilation failed for {name}; see {logs / (name + ".log")}')
            require((pdfdir / (name + '.pdf')).is_file(), f'Missing compiled output {name}')
            native_log = pdfdir / (name + '.log')
            if native_log.exists():
                native_log.replace(logs / (name + '.tex.log'))
            outputs.append({'file': name + '.pdf', 'sha256': hashlib.sha256((pdfdir / (name + '.pdf')).read_bytes()).hexdigest()})
    (root / 'audit/build-manifest.json').write_text(json.dumps({'outputs': outputs, 'coverage_concepts': len(coverage)}, indent=2))
    return outputs


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--root', type=Path, required=True)
    parser.add_argument('--tectonic', type=Path)
    args = parser.parse_args()
    try:
        outputs = build(args.root, args.tectonic)
        print(f'Built {len(outputs)} PDFs.')
    except (ValueError, json.JSONDecodeError) as error:
        parser.exit(1, f'ERROR: {error}\n')
