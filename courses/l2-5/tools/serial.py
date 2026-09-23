"""Prepare exactly one slide; commit its response before allowing the next."""
import argparse, hashlib, json, posixpath, shutil, subprocess, sys, re
from datetime import datetime, timezone
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
from xml.etree import ElementTree as ET

ROOT=Path(__file__).resolve().parents[1]
P='http://schemas.openxmlformats.org/presentationml/2006/main'
R='http://schemas.openxmlformats.org/officeDocument/2006/relationships'
REL='http://schemas.openxmlformats.org/package/2006/relationships'
A='http://schemas.openxmlformats.org/drawingml/2006/main'
MANIFEST=ROOT/'manifest.json'
def now(): return datetime.now(timezone.utc).isoformat()
def digest(p): return hashlib.sha256(p.read_bytes()).hexdigest()
def package_xml(tree):
 return ET.tostring(tree,encoding='utf-8',xml_declaration=True).replace(b'ns0:',b'').replace(b'xmlns:ns0=',b'xmlns=')
def save(m): MANIFEST.write_text(json.dumps(m,ensure_ascii=False,indent=2)+'\n')
def event(kind,n,**extra):
 with (ROOT/'events.jsonl').open('a') as f: f.write(json.dumps(dict(time=now(),event=kind,page=n,**extra),ensure_ascii=False)+'\n')
def load():
 if MANIFEST.exists(): return json.loads(MANIFEST.read_text())
 return {'source':'sources/L2.5.pptx','sourceSha256':digest(ROOT/'sources/L2.5.pptx'),'pageCount':39,'prompt':'解释一下','pages':[]}
def prepare(n):
 m=load()
 if n!=len([p for p in m['pages'] if p['status']=='written'])+1: raise SystemExit('Prior page must be written first; sequential processing required.')
 if any(p['status']!='written' for p in m['pages']): raise SystemExit('A page is already prepared; finish it before proceeding.')
 if not 1<=n<=39: raise SystemExit('Page out of range')
 work=ROOT/'tools/work'/f'{n:02}'; work.mkdir(parents=True,exist_ok=True)
 out=work/f'page-{n:02}.pptx'
 with ZipFile(ROOT/'sources/L2.5.pptx') as z:
  pres=ET.fromstring(z.read('ppt/presentation.xml')); ids=pres.find(f'{{{P}}}sldIdLst'); chosen=list(ids)[n-1]; rid=chosen.get(f'{{{R}}}id')
  for child in list(ids):
   if child is not chosen: ids.remove(child)
  rels=ET.fromstring(z.read('ppt/_rels/presentation.xml.rels'))
  target=None
  for child in list(rels):
   if child.get('Type','').endswith('/slide'):
    if child.get('Id')!=rid: rels.remove(child)
    else: target=posixpath.normpath('ppt/'+child.get('Target'))
  # Read only the selected source slide's text. Traverse its required package assets.
  page_xml=z.read(target)
  text='\n'.join(t.text or '' for t in ET.fromstring(page_xml).iter(f'{{{A}}}t'))
  (work/'source-text.txt').write_text(text)
  original_pres=z.read('ppt/presentation.xml').decode('utf-8')
  original_ids=re.findall(r'<p:sldId\s[^>]*/>',original_pres)
  single_pres=re.sub(r'<p:sldIdLst>.*?</p:sldIdLst>','<p:sldIdLst>'+original_ids[n-1]+'</p:sldIdLst>',original_pres,flags=re.S)
  single_pres=re.sub(r'\sfirstSlideNum="[^"]*"','',single_pres).replace('<p:presentation ',f'<p:presentation firstSlideNum="{n}" ',1)
  patches={'ppt/presentation.xml':single_pres.encode(),'ppt/_rels/presentation.xml.rels':package_xml(rels)}
  # Freeze the selected slide's original slide-number field, which otherwise
  # becomes 1 when LibreOffice renders a one-slide presentation.
  patches[target]=re.sub(r'<a:fld\b[^>]*type="slidenum"[^>]*>(.*?)</a:fld>',r'<a:r>\1</a:r>',page_xml.decode(),flags=re.S).encode()
  wanted=set(); queue=['_rels/.rels']
  while queue:
   member=queue.pop()
   if member in wanted or member not in z.namelist(): continue
   if member.startswith('ppt/slides/slide') and member.endswith('.xml') and member!=target: continue
   wanted.add(member)
   if member.endswith('.rels'):
    rr=ET.fromstring(patches.get(member,z.read(member)))
    base='' if member=='_rels/.rels' else posixpath.dirname(posixpath.dirname(member))
    for child in list(rr):
     if child.get('TargetMode')=='External': continue
     dest=posixpath.normpath(posixpath.join(base,child.get('Target','')))
     if dest.startswith('ppt/slides/slide') and dest.endswith('.xml') and dest!=target: rr.remove(child); continue
     queue.append(dest)
    patches[member]=package_xml(rr)
   else:
    relname=posixpath.join(posixpath.dirname(member),'_rels',posixpath.basename(member)+'.rels')
    queue.append(relname)
  types=ET.fromstring(z.read('[Content_Types].xml'))
  for child in list(types):
   if child.tag.endswith('Override') and child.get('PartName','').lstrip('/') not in wanted: types.remove(child)
  with ZipFile(out,'w',ZIP_DEFLATED) as dest:
   dest.writestr('[Content_Types].xml',package_xml(types))
   for member in sorted(wanted): dest.writestr(member,patches.get(member,z.read(member)))
 event('prepare_started',n,prompt='解释一下')
 subprocess.run(['soffice','--headless','--convert-to','pdf','--outdir',str(work),str(out)],check=True,stdout=subprocess.DEVNULL,stderr=subprocess.PIPE)
 subprocess.run(['pdftoppm','-png','-scale-to','1500','-singlefile',str(out.with_suffix('.pdf')),str(ROOT/'slides'/f'{n:02}')],check=True,stdout=subprocess.DEVNULL,stderr=subprocess.PIPE)
 record={'page':n,'prompt':'解释一下','image':f'slides/{n:02}.png','response':f'responses/{n:02}.md','html':f'pages/{n:02}.html','status':'prepared','preparedAt':now(),'topic':None}
 m['pages'].append(record);save(m);event('page_presented',n,image=record['image'])
 print(f'第 {n} 页\n提示词：解释一下\n\n{text}\n\n图片：{ROOT / record["image"]}')
def commit(n):
 m=load(); p=m['pages'][-1]
 if p['page']!=n or p['status']!='prepared': raise SystemExit('Only the current prepared page can be committed.')
 response=ROOT/p['response']
 if not response.exists() or len(response.read_text().strip())<40: raise SystemExit('A complete response is required.')
 subprocess.run(['node',str(ROOT/'tools/render.mjs'),'page',str(n)],check=True)
 if not (ROOT/p['html']).exists(): raise SystemExit('HTML was not written')
 p.update(status='written',responseSha256=digest(response),writtenAt=now());save(m)
 event('page_written',n,responseSha256=p['responseSha256'],html=p['html']);print(f'第 {n} 页原文已保存并写入网站。SHA-256 {p["responseSha256"]}')
if __name__=='__main__':
 parser=argparse.ArgumentParser();parser.add_argument('action',choices=['prepare','commit']);parser.add_argument('page',type=int);args=parser.parse_args()
 {'prepare':prepare,'commit':commit}[args.action](args.page)
