"""L1.8 PDF adapter: reuse the guarded single-page lifecycle, never prefetch."""
import argparse
import importlib.util
from pathlib import Path

spec = importlib.util.spec_from_file_location('chapter_serial', Path(__file__).with_name('chapter-serial.py'))
shared = importlib.util.module_from_spec(spec)
spec.loader.exec_module(shared)
shared.ORDER = ('l1-8',)

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('action', choices=('prepare', 'show', 'commit', 'audit', 'rerender'))
    parser.add_argument('page', type=int, nargs='?')
    args = parser.parse_args()
    if args.action in ('prepare', 'commit', 'rerender'):
        if args.page is None:
            parser.error('This action requires a page number')
        getattr(shared, args.action)('l1-8', args.page)
    else:
        getattr(shared, args.action)('l1-8')
