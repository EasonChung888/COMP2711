"""Save main-agent-authored diagnosis first, then the new response; no generation."""
import json,sys
from pathlib import Path
from datetime import datetime,timezone
id=sys.argv[1];n=int(sys.argv[2]);assert id in ['l1-12','l1-13','l1-14']
r=Path(__file__).resolve().parents[1]/'chapters'/id/'revisions/sepia-20261017'
m=json.loads((r/'manifest.json').read_text());p=m['pages'][-1];assert p['page']==n and p['status']=='prepared'
x=json.load(sys.stdin)
review={'operation':'recreate','documentType':'中文数学教学笔记 / technical tutorial','loaded':['professional-pass.md','domains/tech-articles.md','discourse-pass.md §1–3','style-pass.md','languages/zh.md','model-fingerprints.md GPT prose'],'model':{'author':'GPT version=unknown','executor':'GPT version=unknown'},'proseLayer':{'author':'prior','executor':'prior'},'venueCorpus':'none — using domain baseline','defects':x['defects'],'facts':x['facts'],'styleScan':x.get('styleScan','已检查中文词句、连接词和句长；仅处理下列有引据问题，不以公式或常规技术术语判定风格。'),'deferred':[],'protected':x.get('protected',[]),'verdict':'recreate as requested','reviewedAt':datetime.now(timezone.utc).isoformat()}
for d in review['defects']:
 if 'evidence' not in d:d['evidence']=d['quote']
 if 'quote' not in d:d['quote']=d['evidence']
for sub in ['reviews','responses']:(r/sub).mkdir(exist_ok=True)
a=r/p['review'];b=r/p['response'];assert not a.exists() and not b.exists(),'Existing saved files must be reused'
a.write_text(json.dumps(review,ensure_ascii=False,indent=2)+'\n')
b.write_text(x['response'].rstrip()+'\n')
print('Main-agent review and response saved:',id,n)
