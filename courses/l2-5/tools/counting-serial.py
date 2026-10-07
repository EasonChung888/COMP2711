"""Guarded one-slide PPTX processing for L1.6 and L1.7. No prefetch."""
import argparse, hashlib, json, posixpath, subprocess, re
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
from xml.etree import ElementTree as ET
import importlib.util
spec=importlib.util.spec_from_file_location('chapter_serial',Path(__file__).with_name('chapter-serial.py'))
shared=importlib.util.module_from_spec(spec);spec.loader.exec_module(shared)
shared.ORDER=('l1-6','l1-7')
now,sha256,read_json,write_json=shared.now,shared.sha256,shared.read_json,shared.write_json
ROOT=shared.SITE
P='http://schemas.openxmlformats.org/presentationml/2006/main'
R='http://schemas.openxmlformats.org/officeDocument/2006/relationships'
A='http://schemas.openxmlformats.org/drawingml/2006/main'
def package_xml(tree):
 return ET.tostring(tree,encoding='utf-8',xml_declaration=True).replace(b'ns0:',b'').replace(b'xmlns:ns0=',b'xmlns=')
def prepare(ident,n):
 shared.check_prior_chapters(ident)
 directory,meta,manifest=shared.audit(ident)
 if manifest['pages'] and manifest['pages'][-1]['status']=='prepared':raise SystemExit('Commit current page before reading the next')
 expected=len(manifest['pages'])+1
 if n!=expected or n>meta['pageCount']:raise SystemExit(f'Next permitted page: {ident}/{expected}')
 source=directory/meta['source'];work=directory/'work'/f'{n:03d}';work.mkdir(exist_ok=True)
 out=work/f'page-{n:03d}.pptx';textfile=directory/'page-text'/f'{n:03d}.txt'
 shared.event(directory,'prepare_started',n,prompt='解释一下')

 with ZipFile(source) as z:
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
  textfile.write_text(text, encoding='utf-8')
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

 try:
  subprocess.run(['soffice','--headless','--convert-to','pdf','--outdir',str(work),str(out)],check=True,stdout=subprocess.DEVNULL,stderr=subprocess.PIPE)
  image=directory/'slides'/f'{n:03d}.png'
  subprocess.run(['pdftoppm','-png','-scale-to','1500','-singlefile',str(out.with_suffix('.pdf')),str(image.with_suffix(''))],check=True,stdout=subprocess.DEVNULL,stderr=subprocess.PIPE)
 except Exception as error:
  shared.event(directory,'prepare_failed',n,reason=str(error));raise
 record=dict(sourceId=ident,page=n,prompt='解释一下',image=f'slides/{n:03d}.png',text=f'page-text/{n:03d}.txt',response=f'responses/{n:03d}.md',html=f'pages/{n:03d}.html',status='prepared',preparedAt=now(),topic=None,imageSha256=sha256(image))
 manifest['pages'].append(record);write_json(directory/'manifest.json',manifest)
 shared.event(directory,'page_presented',n,image=record['image'],imageSha256=record['imageSha256'])
 shared.show(ident)
if __name__=='__main__':
 parser=argparse.ArgumentParser();parser.add_argument('action',choices=['prepare','commit','show','audit','rerender']);parser.add_argument('id',choices=shared.ORDER);parser.add_argument('page',type=int,nargs='?');args=parser.parse_args()
 if args.action=='prepare':prepare(args.id,args.page)
 elif args.action=='commit':shared.commit(args.id,args.page)
 elif args.action=='show':shared.show(args.id)
 elif args.action=='rerender':shared.rerender(args.id,args.page)
 else:shared.audit(args.id)
