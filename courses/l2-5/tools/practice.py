"""Copy verified source questions and stems without rewriting their wording."""
from pathlib import Path
import json,re,shutil,hashlib
from datetime import datetime,timezone
import yaml

ROOT=Path(__file__).resolve().parents[1]
REPO=ROOT.parents[1]
KB=REPO/'knowledge_base'
def parse(p):
 text=p.read_text(); metadata=yaml.safe_load(text.split('---',2)[1])
 return metadata,text
def section(text,name):
 match=re.search(r'^## '+re.escape(name)+r'\s*\n(.*?)(?=^## |\Z)',text,re.M|re.S)
 return match.group(1).strip() if match else ''
def snapshot(p):
 out=ROOT/'sources/notes'/p.name;out.parent.mkdir(exist_ok=True,parents=True);shutil.copy2(p,out)
 return 'sources/notes/'+p.name
def local_media(text):
 def replace(m):
  target=m.group(1)
  if target.startswith('knowledge_base/') and target.lower().endswith(('.png','.jpg','.jpeg','.svg')):
   src=REPO/target;out=ROOT/'sources/figures'/src.name;out.parent.mkdir(exist_ok=True,parents=True);shutil.copy2(src,out)
   return f'![原题图示](../sources/figures/{src.name})'
  if '.pdf' in target: return ''
  raise ValueError('Unresolved source embed: '+target)
 return re.sub(r'!\[\[([^\]]+)\]\]',replace,text).strip()
def resolve_question(text):
 q=section(text,'Question');stems=[]
 pattern=r'!?\[\[(STEM-[^\]#]+)(?:#[^\]]+)?\]\]'
 for stem in re.findall(pattern,q):
  if stem not in stems:stems.append(stem)
 q=re.sub(r'^Shared (?:context|printed context):.*$','',q,flags=re.M)
 q=re.sub(pattern,'',q).strip()
 contexts=[]
 for stem in stems:
  p=KB/'04-Questions/Stems'/(stem+'.md');snapshot(p)
  contexts.append(local_media(section(p.read_text(),'Shared printed wording')))
 return '\n\n'.join(contexts+[local_media(q)]),stems

manifest=json.loads((ROOT/'manifest.json').read_text())
assert len(manifest['pages'])==39 and all(x['status']=='written' for x in manifest['pages'])
config=json.loads((ROOT/'course.config.json').read_text());results=[]
for topic in config['topics']:
 for qid in topic['questions']:
  matches=list((KB/'04-Questions').glob(qid+' - *.md'));assert len(matches)==1,qid
  p=matches[0];meta,text=parse(p);assert meta['verification_status']=='verified',qid
  q,stems=resolve_question(text)
  marks=meta.get('marks');companions=[]
  if qid=='Q-2025S-FINAL-P07-N':
   clauses=[]
   for suffix in ['sufficient','minimal']:
    cp=next((KB/'04-Questions').glob('Q-2025S-FINAL-P07-'+suffix+' - *.md'))
    cm,ct=parse(cp);assert cm['verification_status']=='verified';companions.append(snapshot(cp));marks+=cm['marks']
    part=re.sub(r'!?\[\[STEM-[^\]]+\]\]','',section(ct,'Question')).strip();clauses.append(part)
   q+='\n\n'+clauses[0]+' '+clauses[1]
  solution=section(text,'Detailed Solution');assert solution
  source=REPO/meta['source_pdf'];pdfout=ROOT/'sources/papers'/source.name;pdfout.parent.mkdir(exist_ok=True,parents=True)
  if not pdfout.exists():shutil.copy2(source,pdfout)
  results.append({'id':qid,'topic':topic['slug'],'sourceNote':snapshot(p),'sourceNoteSha256':hashlib.sha256(p.read_bytes()).hexdigest(),'stems':stems,'companionNotes':companions,'paper':meta['source_paper'].replace('[[','').replace(']]',''),'pdf':'sources/papers/'+source.name,'page':meta['source_page'],'solutionPages':meta.get('solution_page',[]),'number':meta['question_number'],'marks':marks,'verificationStatus':meta['verification_status'],'answerSource':meta['answer_source'],'questionMarkdown':q,'solutionMarkdown':solution,'mistakesMarkdown':section(text,'Common Mistakes')})
(ROOT/'practice.json').write_text(json.dumps(results,ensure_ascii=False,indent=2)+'\n')
with (ROOT/'events.jsonl').open('a') as f:f.write(json.dumps({'time':datetime.now(timezone.utc).isoformat(),'event':'practice_selected','questionCount':len(results)})+'\n')
print(f'Copied {len(results)} verified questions with original stems, solutions and local PDFs.')
