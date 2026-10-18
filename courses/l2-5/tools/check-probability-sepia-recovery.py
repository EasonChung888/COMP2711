from pathlib import Path
import json,shutil,subprocess,tempfile,hashlib
site=Path(__file__).resolve().parents[1]
with tempfile.TemporaryDirectory(prefix='sepia-recovery-') as folder:
 s=Path(folder);d=s/'chapters/l1-9';r=d/'revisions/sepia-20261017';shutil.copytree(site/'chapters/l1-9',d)
 (s/'tools').mkdir()
 for f in ['render.mjs','chapter-render.mjs','probability-sepia.mjs']:shutil.copy2(site/'tools'/f,s/'tools'/f)
 (s/'tools/node_modules').symlink_to(site/'tools/node_modules',target_is_directory=True)
 m=json.loads((r/'manifest.json').read_text());m['pages']=m['pages'][:1];p=m['pages'][0];p['status']='prepared'
 for k in ['responseSha256','reviewSha256','writtenAt','htmlSha256','savedAt']:p.pop(k,None)
 (r/'manifest.json').write_text(json.dumps(m));(r/'events.jsonl').write_text(json.dumps(dict(time=p['presentedAt'],event='page_presented',sourceId='l1-9',page=1))+'\n')
 shutil.copy2(r/'original-manifest.json',d/'manifest.json');shutil.copy2(r/'original-events.jsonl',d/'events.jsonl')
 renderer=s/'tools/chapter-render.mjs';text=renderer.read_text();text=text.replace('fs.renameSync(temporary, htmlPath);',"fs.renameSync(temporary, htmlPath);if(fs.existsSync(path.join(root,'fail-once')))throw Error('simulated interruption after HTML write');")
 renderer.write_text(text);flag=s/'fail-once';flag.touch()
 tool=['node',str(s/'tools/probability-sepia.mjs')]
 def run(action,n):return subprocess.run(tool+[action,'l1-9',str(n)],text=True,capture_output=True)
 assert 'Finish current page' in run('prepare',2).stderr
 first=run('commit',1);assert first.returncode and 'simulated interruption' in first.stderr
 saved=json.loads((r/'manifest.json').read_text())['pages'][0];assert saved['status']=='prepared' and saved['savedAt']
 response=r/p['response'];original=response.read_bytes();response.write_bytes(original+b'\nTamper')
 assert 'Saved response changed' in run('commit',1).stderr;response.write_bytes(original);flag.unlink()
 result=run('commit',1);assert result.returncode==0,result.stderr
 assert response.read_bytes()==original
 events=[json.loads(x) for x in (r/'events.jsonl').read_text().splitlines()]
 assert [x['event'] for x in events]==['page_presented','review_and_response_saved','page_written']
 assert json.loads((r/'manifest.json').read_text())['pages'][0]['status']=='written'
 assert run('commit',1).returncode!=0
result=dict(status='passed',isolatedCopy=True,realRenderer=True,pendingBlocksNextPage=True,interruptionAfterHTMLWrite=True,savedHashPersistsBeforeRendering=True,tamperingBlocked=True,resumeUsesExactSavedResponse=True,noDuplicateSaveEvent=True,duplicateCommitBlocked=True)
(site.parents[1]/'output/probability-sepia-20261017/recovery-check.json').write_text(json.dumps(result,indent=2)+'\n');print(json.dumps(result,indent=2))
