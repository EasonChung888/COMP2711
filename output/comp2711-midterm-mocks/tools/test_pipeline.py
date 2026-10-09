#!/usr/bin/env python3
"""Isolated fixtures: no sample content enters the formal exam documents."""
import copy
import json
from pathlib import Path
import subprocess
import tempfile
import unittest

import build
import check_math
import validate


def fixture():
    lectures = {
        'fixture-logic': 'L01-Logic-Propositional-Logic.pdf',
        'fixture-sets': 'L04-Sets-and-functions-Sets-Functions.pdf',
        'fixture-counting': 'L11-Counting-Counting.pdf',
        'fixture-probability': 'L15-Probability-Probability.pdf',
    }
    coverage = {k: {'id': k, 'lecture': v, 'pages': [2], 'knowledge_point': k,
                    'assessed_at': [], 'depth': 'application'} for k, v in lectures.items()}
    papers = []
    for number in range(1, 11):
        problems = []
        for pn, points in enumerate(build.POINTS, 1):
            concept = 'fixture-logic' if pn < 3 else 'fixture-sets' if pn == 3 else 'fixture-counting' if pn < 8 else 'fixture-probability'
            parts = []
            for label, part_points, space in [('a', points // 2, 3), ('b', points - points // 2, 5)]:
                parts.append({'label': label, 'points': part_points,
                              'question': r'For this fixture, establish the displayed identity. State the relevant argument. \[\sum_{k=0}^{n}\binom{n}{k}=2^n.\]',
                              'solution': r'Each subset of an $n$-element set is counted exactly once by its size. Equivalently, each element is either included or omitted; hence there are $2^n$ subsets. The two counts agree.\[\sum_{k=0}^{n}\binom{n}{k}=2^n.\]',
                              'rubric': f'{part_points} points for a valid counting argument and its conclusion.',
                              'space_cm': space, 'concepts': [concept]})
                coverage[concept]['assessed_at'].append(f'{number:02}.{pn}.{label}')
            problems.append({'number': pn, 'points': points, 'title': 'Fixture only',
                             'stem': r'Use the given notation; $n\in\mathbb{N}$ and $A\subseteq B$.',
                             'parts': parts, 'sources': ['Q-2025F-MID-P01-a']})
        papers.append({'number': number, 'problems': problems})
    return {'papers': papers, 'coverage': list(coverage.values())}


class PipelineTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.root = Path(self.temp.name)
        (self.root / 'content').mkdir()
        self.data = fixture()
        self.write(self.data)

    def tearDown(self):
        self.temp.cleanup()

    def write(self, data, filename='fixture.json'):
        (self.root / 'content' / filename).write_text(json.dumps(data))

    def test_valid_assembly_and_solution_separation(self):
        papers = build.load_papers(self.root)
        self.assertEqual(list(papers), list(range(1, 11)))
        solution = build.render_exam(papers[1], True)
        self.assertNotIn('Use the given notation', solution)
        self.assertNotIn('For this fixture', solution)
        self.assertIn('Marking:', solution)
        self.assertIn('Solutions and marking notes', solution)

    def test_missing_problem_rejected(self):
        self.data['papers'][0]['problems'].pop()
        self.write(self.data)
        with self.assertRaisesRegex(ValueError, 'expected problems'):
            build.load_papers(self.root)

    def test_solution_heading_reserves_first_part_without_later_break(self):
        solution = build.render_exam(build.load_papers(self.root)[1], True)
        heading = solution.index('Problem 1 [10 points]')
        first_item = solution.index(r'\item[(a)]', heading)
        self.assertIn(r'\problemheading[\dimexpr 3\baselineskip+4\baselineskip\relax]', solution)
        self.assertNotIn(r'\Needspace', solution[heading:first_item])

    def test_picture_reservation_includes_measured_height(self):
        source = r'\setlength{\unitlength}{0.72mm}\begin{picture}(150,96)'
        self.assertEqual(build.solution_reservation(source), r'\dimexpr 69.12mm+7\baselineskip\relax')
        self.assertEqual(build.solution_reservation('A short derivation.'), r'4\baselineskip')

    def test_duplicate_problem_rejected(self):
        self.data['papers'][0]['problems'].append(copy.deepcopy(self.data['papers'][0]['problems'][0]))
        self.write(self.data)
        with self.assertRaisesRegex(ValueError, 'Duplicate problem'):
            build.load_papers(self.root)

    def test_wrong_score_rejected(self):
        self.data['papers'][0]['problems'][0]['points'] = 11
        self.write(self.data)
        with self.assertRaisesRegex(ValueError, 'incorrect problem scores'):
            build.load_papers(self.root)

    def test_float_problem_score_rejected(self):
        self.data['papers'][0]['problems'][0]['points'] = 10.0
        self.write(self.data)
        with self.assertRaisesRegex(ValueError, 'integer problem scores required'):
            build.load_papers(self.root)

    def test_heading_detector_ignores_prose_cross_references(self):
        text = ('Problem 1: Propositional Logic [10 points]\n'
                'Use the conclusion of Problem 1 in this argument.\n'
                'Problem 1 is also relevant to the next step.\n'
                'Problem 2 [13 points]\n'
                'The answer refers to Problem 2 [13 points] for context.\n')
        self.assertEqual(validate.problem_heading_numbers(text), [1, 2])

    def test_heading_detector_retains_duplicate_real_headings(self):
        text = 'Problem 1 [10 points]\nProblem 1 [10 points]\n'
        self.assertEqual(validate.problem_heading_numbers(text), [1, 1])

    def test_heading_detector_accepts_wrapped_title_and_ignores_reference(self):
        text = ('Problem 1: Propositional Logic, Inference and\n'
                'Proofs [10 points]\n'
                'Use the conclusion of Problem 1 in this argument.\n'
                'Problem 1 is relevant to a later proof.\n'
                'Problem 2: Predicate Logic [scope review]\n'
                'and nested quantifiers\n'
                '[13 points]\n')
        self.assertEqual(validate.problem_heading_numbers(text), [1, 2])

    def test_heading_detector_does_not_swallow_next_heading(self):
        text = ('Problem 1: An incomplete heading\n'
                'Problem 2 [13 points]\n')
        self.assertEqual(validate.problem_heading_numbers(text), [2])

    def test_missing_solution_rejected(self):
        self.data['papers'][0]['problems'][0]['parts'][0]['solution'] = ''
        self.write(self.data)
        with self.assertRaisesRegex(ValueError, 'missing solution'):
            build.load_papers(self.root)

    def test_missing_rubric_rejected(self):
        del self.data['papers'][0]['problems'][0]['parts'][0]['rubric']
        self.write(self.data)
        with self.assertRaisesRegex(ValueError, 'missing rubric'):
            build.load_papers(self.root)

    def test_bad_coverage_rejected(self):
        self.data['coverage'][0]['assessed_at'].append('10.99.a')
        self.write(self.data)
        with self.assertRaisesRegex(ValueError, 'disagrees'):
            build.load_papers(self.root)

    def test_missing_concept_rejected(self):
        self.data['papers'][0]['problems'][0]['parts'][0]['concepts'] = ['absent']
        self.write(self.data)
        with self.assertRaisesRegex(ValueError, 'undefined concept'):
            build.load_papers(self.root)

    def test_math_failure_propagates(self):
        suite = self.root / 'content/failure_checks.py'
        suite.write_text('assert 1 == 2\n')
        with self.assertRaisesRegex(ValueError, 'suite failed'):
            check_math.check_math(self.root)
        self.assertFalse(json.loads((self.root / 'audit/math-checks.json').read_text())['passed'])

    def test_math_success_recorded(self):
        suite = self.root / 'content/exact_checks.py'
        suite.write_text('from fractions import Fraction\nassert sum([Fraction(1,3)]*3) == 1\nprint("exact fraction check passed")\n')
        self.assertEqual(len(check_math.check_math(self.root)), 1)


def compile_fixture(root):
    root = Path(root).resolve()
    (root / 'content').mkdir(parents=True, exist_ok=True)
    (root / 'pdf').mkdir(exist_ok=True)
    (root / 'content/fixture.json').write_text(json.dumps(fixture()))
    paper = build.load_papers(root)[1]
    reports = []
    for solutions in [False, True]:
        name = 'fixture' + ('_Solutions' if solutions else '')
        tex = root / (name + '.tex')
        tex.write_text(build.render_exam(paper, solutions))
        result = subprocess.run([str(Path(build.__file__).parent / 'cache/tectonic'), '-X', 'compile', '--keep-logs', '--outdir', str(root / 'pdf'), str(tex)], capture_output=True, text=True)
        (root / (name + '-compile.log')).write_text(result.stdout + result.stderr)
        if result.returncode:
            raise ValueError(result.stdout + result.stderr)
        reports.append(validate.validate_pdf(root / 'pdf' / (name + '.pdf'), paper, solutions))
    (root / 'fixture-validation.json').write_text(json.dumps(reports, indent=2))
    print(json.dumps(reports, indent=2))


if __name__ == '__main__':
    import sys
    if len(sys.argv) == 3 and sys.argv[1] == '--compile-fixture':
        compile_fixture(sys.argv[2])
    else:
        unittest.main()
