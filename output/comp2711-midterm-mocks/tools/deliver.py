#!/usr/bin/env python3
"""Package precisely twenty PDF basenames and copy only scoped deliverables."""
import argparse
import hashlib
import json
import shutil
import zipfile
from pathlib import Path

ZIP_NAME = 'COMP2711_Mock_Midterms_10_Papers_and_Solutions.zip'


def sha(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def package(root):
    expected = {f'COMP2711_Mock_Midterm_{n:02}{suffix}.pdf' for n in range(1, 11) for suffix in ['', '_Solutions']}
    pdfs = sorted((root / 'pdf').iterdir())
    assert {x.name for x in pdfs} == expected and len(pdfs) == 20
    manifest = json.loads((root / 'audit/final-manifest.json').read_text())
    hashes = {x['file']: x['sha256'] for x in manifest['outputs']}
    assert set(hashes) == expected
    destination = root / ZIP_NAME
    with zipfile.ZipFile(destination, 'w', compression=zipfile.ZIP_DEFLATED) as archive:
        for pdf in pdfs:
            assert sha(pdf) == hashes[pdf.name]
            entry = zipfile.ZipInfo(pdf.name, date_time=(2000, 1, 1, 0, 0, 0))
            entry.compress_type = zipfile.ZIP_DEFLATED
            archive.writestr(entry, pdf.read_bytes())
    with zipfile.ZipFile(destination) as archive:
        assert len(archive.namelist()) == 20 and set(archive.namelist()) == expected
        assert archive.testzip() is None
        assert all(hashlib.sha256(archive.read(name)).hexdigest() == hashes[name] for name in expected)
    report = {'zip': destination.name, 'sha256': sha(destination), 'members': sorted(expected), 'member_sha256_match': True}
    (root / 'audit/package-verification.json').write_text(json.dumps(report, indent=2))
    print(f'PASS: ZIP has exactly 20 verified PDF basenames; SHA-256 {report["sha256"]}')


def copy(root, destination):
    workspace = root.parents[1]
    files = []
    for path in sorted(root.rglob('*')):
        if not path.is_file():
            continue
        relative = path.relative_to(root)
        if any(x in relative.parts for x in ['tmp', 'cache', '__pycache__', 'source-renders', 'final-renders', 'visual-contact-sheets']):
            continue
        if relative.name in ['lecture-text.txt', 'source-paper-text.txt', 'delivery-verification.json']:
            continue
        if relative.parts[0] in ['tools', 'content', 'audit', 'source', 'pdf'] or relative.name in [ZIP_NAME, '.gitignore']:
            files.append(path)
    for relative in ['docs/superpowers/plans/2026-10-08-comp2711-midterm-mocks.md', 'docs/superpowers/specs/2026-10-08-comp2711-midterm-mock-exams-design.md']:
        files.append(workspace / relative)
    sdd = workspace / '.superpowers/sdd/2026-10-08-comp2711-midterm-mocks'
    files.extend(sorted(sdd.glob('*.md')))
    copied = []
    for path in files:
        relative = path.relative_to(workspace)
        target = destination / relative
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(path, target)
        assert sha(path) == sha(target)
        copied.append({'file': str(relative), 'sha256': sha(path)})
    final_pdf_dir = destination / root.relative_to(workspace) / 'pdf'
    assert {x.name for x in final_pdf_dir.iterdir()} == {x.name for x in (root / 'pdf').iterdir()}
    report = {'destination': str(destination), 'files': copied, 'all_sha256_match': True,
              'excluded': ['tmp previews', 'caches and compiler binary', 'raster evidence', 'raw source extraction', 'unrelated workspace files']}
    (root / 'audit/delivery-verification.json').write_text(json.dumps(report, indent=2))
    shutil.copy2(root / 'audit/delivery-verification.json', destination / root.relative_to(workspace) / 'audit/delivery-verification.json')
    print(f'PASS: {len(copied)} scoped files copied with matching hashes to {destination}')


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--root', type=Path, required=True)
    parser.add_argument('--copy-to', type=Path)
    args = parser.parse_args()
    root = args.root.resolve()
    package(root)
    if args.copy_to:
        copy(root, args.copy_to.resolve())
