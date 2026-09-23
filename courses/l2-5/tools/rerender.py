"""Re-render one already-committed slide, without reading or altering its response."""
from pathlib import Path
from zipfile import ZipFile,ZIP_DEFLATED
import os,re,subprocess,json,hashlib,sys
from datetime import datetime,timezone
root=Path(__file__).resolve().parents[1]
n=int(sys.argv[1]); ident=f'{n:02}'
m=json.loads((root/'manifest.json').read_text());record=next(p for p in m['pages'] if p['page']==n)
assert record['status']=='written'
work=root/'tools/work'/ident
src=work/f'page-{ident}.pptx';out=work/f'render-{ident}.pptx'
with ZipFile(src) as z,ZipFile(out,'w',ZIP_DEFLATED) as w:
 for name in z.namelist():
  b=z.read(name)
  if name=='ppt/presentation.xml':b=re.sub(rb'\sfirstSlideNum="[^"]*"',b'',b)
  if name.startswith('ppt/slides/slide') and name.endswith('.xml'):
   b=re.sub(rb'<a:fld\b[^>]*type="slidenum"[^>]*>(.*?)</a:fld>',rb'<a:r>\1</a:r>',b,flags=re.S)
  w.writestr(name,b)
fonts=root/'tools/work/fonts.conf'
if not fonts.exists():
 fonts.write_text('<fontconfig><dir>/System/Library/Fonts</dir><dir>/Library/Fonts</dir><dir>/Applications/Microsoft PowerPoint.app/Contents/Resources/DFonts</dir><cachedir>/tmp/l25-font-cache</cachedir></fontconfig>')
env=dict(os.environ,FONTCONFIG_FILE=str(fonts))
subprocess.run(['soffice','--headless','--convert-to','pdf','--outdir',str(work),str(out)],check=True,env=env,stdout=subprocess.DEVNULL)
subprocess.run(['pdftoppm','-png','-scale-to','1500','-singlefile',str(out.with_suffix('.pdf')),str(root/'slides'/ident)],check=True)
sha=hashlib.sha256((root/record['image']).read_bytes()).hexdigest()
with (root/'events.jsonl').open('a') as f:f.write(json.dumps({'time':datetime.now(timezone.utc).isoformat(),'event':'image_rerendered','page':n,'imageSha256':sha,'reason':'Use installed Office fonts; preserve original page-number field; no response change'})+'\n')
print(f'Rendered original slide {n}',flush=True)
