"""Real renderer recovery checks in a disposable copy; course artifacts stay intact."""
from pathlib import Path
import contextlib
import copy
import importlib.util
import io
import json
import shutil
import tempfile
import sys

chapter_id=sys.argv[1]
assert chapter_id in ('l1-10','l1-11')
tools = Path(__file__).resolve().parent
spec = importlib.util.spec_from_file_location('l19', tools/'probability-serial.py')
adapter = importlib.util.module_from_spec(spec)
spec.loader.exec_module(adapter)
serial = adapter.shared
site = serial.SITE
original = site/'chapters'/chapter_id

def blocked(call, message):
    try:
        call()
    except SystemExit as error:
        assert message in str(error), str(error)
    else:
        raise AssertionError('Expected guard: '+message)

with tempfile.TemporaryDirectory(prefix='l1-9-recovery-') as tmp:
    sandbox = Path(tmp).resolve()
    chapter = sandbox/'chapters'/chapter_id
    for folder in ('sources','responses','slides','pages','page-text'):
        (chapter/folder).mkdir(parents=True)
    (sandbox/'tools').mkdir()
    for file in ('render.mjs','chapter-render.mjs'):
        shutil.copy2(tools/file,sandbox/'tools'/file)
    (sandbox/'tools/node_modules').symlink_to(tools/'node_modules',target_is_directory=True)
    shutil.copy2(original/'chapter.meta.json',chapter/'chapter.meta.json')
    shutil.copy2(original/('sources/'+chapter_id.replace('l1-','L1.')+'.pdf'),chapter/('sources/'+chapter_id.replace('l1-','L1.')+'.pdf'))
    manifest = copy.deepcopy(serial.read_json(original/'manifest.json'))
    manifest['pages'] = manifest['pages'][:2]
    for p in manifest['pages']:
        for key in ('image','response','html','text'):
            shutil.copy2(original/p[key],chapter/p[key])
    pending = manifest['pages'][1]
    pending['status']='prepared'
    pending['topic']=None
    pending.pop('writtenAt')
    pending.pop('htmlSha256')
    (chapter/pending['html']).unlink()
    serial.write_json(chapter/'manifest.json',manifest)
    log = serial.events(original)
    cutoff = next(i for i,e in enumerate(log) if e['page']==2 and e['event']=='response_saved')
    (chapter/'events.jsonl').write_text(''.join(json.dumps(e)+'\n' for e in log[:cutoff+1]))
    if chapter_id=='l1-11':
        (sandbox/'chapters/l1-10').symlink_to(site/'chapters/l1-10',target_is_directory=True)
    serial.SITE=sandbox
    response=chapter/pending['response']
    response_bytes=response.read_bytes()
    blocked(lambda:serial.prepare(chapter_id,3),'Finish or resume')
    # Hash protection applies even before the saved response has an HTML page.
    response.write_bytes(response_bytes+b'\nTampered test text')
    blocked(lambda:serial.commit(chapter_id,2),'previously saved response changed')
    response.write_bytes(response_bytes)
    with contextlib.redirect_stdout(io.StringIO()):
        serial.commit(chapter_id,2)
    assert response.read_bytes()==response_bytes
    assert (chapter/pending['html']).is_file()
    assert len([e for e in serial.events(chapter) if e['event']=='response_saved' and e['page']==2])==1
    serial.audit(chapter_id)
    blocked(lambda:serial.commit(chapter_id,2),'already written')
    blocked(lambda:serial.prepare(chapter_id,4),'Next permitted page')
    with contextlib.redirect_stdout(io.StringIO()):
        serial.prepare(chapter_id,3)
    assert serial.read_json(chapter/'manifest.json')['pages'][-1]['page']==3
    response.write_bytes(response_bytes+b'\nTampered committed test')
    blocked(lambda:serial.audit(chapter_id),'Artifact hash mismatch')
    response.write_bytes(response_bytes)
    source=chapter/('sources/'+chapter_id.replace('l1-','L1.')+'.pdf')
    source.write_bytes(source.read_bytes()+b'\nTampered source')
    blocked(lambda:serial.audit(chapter_id),'Source hash mismatch')

serial.SITE=site
serial.audit(chapter_id)
result=dict(status='passed',actualRenderer=True,isolatedTemporaryCopy=True,
    savedResponseResumedUnchanged=True,noDuplicateSave=True,pendingPageBlocksPrefetch=True,
    committedPageAdvancesToNext=True,duplicateCommitBlocked=True,skipPageBlocked=True,
    savedAndCommittedResponseTamperingBlocked=True,sourceTamperingBlocked=True)
(site.parents[1]/('output/probability-l1-10-l1-11-20261016/'+chapter_id+'-recovery-check.json')).write_text(json.dumps(result,indent=2)+'\n')
print(json.dumps(result,indent=2))
