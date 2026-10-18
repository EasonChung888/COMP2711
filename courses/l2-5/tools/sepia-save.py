"""Persist the primary AI's supplied per-page review and rewrite, then verify publication."""
import json,sys,subprocess
from pathlib import Path
cid,n=sys.argv[1],int(sys.argv[2]);assert cid in ['l1-9','l1-10','l1-11']
d=Path(__file__).resolve().parents[1]/'chapters'/cid/'revisions/sepia-20261017'
m=json.loads((d/'manifest.json').read_text());p=m['pages'][-1];assert p['page']==n and p['status']=='prepared'
x=json.loads(sys.stdin.readline());body=sys.stdin.read();assert x['facts'] and isinstance(x['defects'],list)
x.setdefault('deferred',[]);x.setdefault('protected',[])
(d/p['review']).write_text(json.dumps(x,ensure_ascii=False,indent=2)+'\n');(d/p['response']).write_text(body.rstrip()+'\n')
subprocess.run(['node',str(Path(__file__).with_name('probability-sepia.mjs')),'commit',cid,str(n)],check=True)
