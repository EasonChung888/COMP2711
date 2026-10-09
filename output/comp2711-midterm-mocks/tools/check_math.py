#!/usr/bin/env python3
"""Run trusted, independent exact-check suites supplied by authors/reviewers."""
import argparse
import hashlib
import json
import subprocess
import sys
from pathlib import Path


def check_math(root, paths=None):
    root = Path(root).resolve()
    if paths is None:
        paths = sorted(set(root.glob('content/*checks.py')) | set(root.glob('tools/*_checks.py')) | set(root.glob('audit/*checks.py')))
    if not paths:
        raise ValueError('No independent math suites found; save content/*checks.py or tools/*_checks.py, or pass --checks PATH')
    reports = []
    failed = False
    for path in paths:
        path = Path(path).resolve()
        result = subprocess.run([sys.executable, str(path)], cwd=root, capture_output=True, text=True)
        reports.append({'suite': str(path.relative_to(root)) if path.is_relative_to(root) else str(path), 'sha256': hashlib.sha256(path.read_bytes()).hexdigest(), 'returncode': result.returncode, 'stdout': result.stdout, 'stderr': result.stderr})
        failed |= result.returncode != 0
    (root / 'audit').mkdir(exist_ok=True)
    (root / 'audit/math-checks.json').write_text(json.dumps({'passed': not failed, 'suites': reports}, indent=2))
    if failed:
        raise ValueError('An independent math suite failed; see audit/math-checks.json')
    return reports


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--root', required=True, type=Path)
    parser.add_argument('--checks', action='append', type=Path)
    args = parser.parse_args()
    try:
        reports = check_math(args.root, args.checks)
        print(f'Passed {len(reports)} independent math suites.')
    except ValueError as error:
        parser.exit(1, f'ERROR: {error}\n')
