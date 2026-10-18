"""One current page across L1.10 then L1.11; no prefetch."""
import argparse,importlib.util
from pathlib import Path
spec=importlib.util.spec_from_file_location('shared',Path(__file__).with_name('chapter-serial.py'))
shared=importlib.util.module_from_spec(spec);spec.loader.exec_module(shared)
shared.ORDER=('l1-10','l1-11')
if __name__=='__main__':
 p=argparse.ArgumentParser();p.add_argument('action',choices=['prepare','show','commit','audit','rerender']);p.add_argument('chapter',choices=shared.ORDER);p.add_argument('page',type=int,nargs='?');a=p.parse_args()
 if a.action in ['prepare','commit','rerender']:
  if a.page is None:p.error('Page required')
  getattr(shared,a.action)(a.chapter,a.page)
 else:getattr(shared,a.action)(a.chapter)
