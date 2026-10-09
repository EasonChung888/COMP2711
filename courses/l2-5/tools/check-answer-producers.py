"""Run all four legacy producers/builders in an isolated, source-backed copy."""
import json
from pathlib import Path
import shutil
import subprocess
import tempfile

ROOT=Path(__file__).resolve().parents[1]
REPO=ROOT.parents[1]
NODE=Path.home()/'.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node'
SCRIPTS=['practice.py','chapter-practice.py','counting-practice.py','l1-8-practice.py']
BUILDERS=['build.mjs','chapter-lessons.mjs','counting-lessons.mjs','l1-8-lessons.mjs']

with tempfile.TemporaryDirectory(prefix='comp2711-answer-producers-') as temporary:
    clone=Path(temporary)/'repo'
    clone.mkdir()
    (clone/'knowledge_base').symlink_to(REPO/'knowledge_base',target_is_directory=True)
    site=clone/'courses/l2-5'
    tools=site/'tools'
    tools.mkdir(parents=True)
    for file in (ROOT/'tools').iterdir():
        if file.suffix in ('.py','.mjs','.json'):
            shutil.copy2(file,tools/file.name)
    (tools/'node_modules').symlink_to(ROOT/'tools/node_modules',target_is_directory=True)
    (clone/'scripts/knowledge-base').mkdir(parents=True)
    for name in ('answers.mjs','schema.mjs'):
        shutil.copy2(REPO/'scripts/knowledge-base'/name,clone/'scripts/knowledge-base'/name)
    for original in [ROOT,*sorted((ROOT/'chapters').iterdir())]:
        if not (original/'practice.json').exists():
            continue
        destination=site/original.relative_to(ROOT)
        destination.mkdir(parents=True,exist_ok=True)
        for name in ('course.config.json','manifest.json','chapter.meta.json','events.jsonl'):
            if (original/name).exists():
                shutil.copy2(original/name,destination/name)
        for folder in ('sources','lessons','pages'):
            (destination/folder).mkdir(exist_ok=True)
        for folder in ('responses','slides','errata','notes'):
            if (original/folder).is_dir():
                (destination/folder).symlink_to(original/folder,target_is_directory=True)
    old_review=REPO/'output/counting-courses-20261002/l1-7-question-review.md'
    target=clone/'output/counting-courses-20261002'
    target.mkdir(parents=True)
    shutil.copy2(old_review,target/old_review.name)
    logs=[]
    for script in SCRIPTS:
        result=subprocess.run([shutil.which('python3'),str(tools/script)],cwd=clone,text=True,capture_output=True)
        assert result.returncode==0,(script,result.stdout,result.stderr)
        logs.append({'script':script,'stdout':result.stdout.strip(),'status':'passed'})
    exercises=0
    for generated in [site/'practice.json',*sorted((site/'chapters').glob('*/practice.json'))]:
        original=ROOT/generated.relative_to(site)
        expected=json.loads(original.read_text())
        current=json.loads(generated.read_text())
        assert [q['id'] for q in current]==[q['id'] for q in expected]
        for q,old in zip(current,expected):
            for key in ('questionMarkdown','officialMarkdown','solutionMarkdown','officialSourceSha256','supplementarySourceSha256','answerFormatVersion','pdfSha256'):
                assert q[key]==old[key],(generated,q['id'],key)
            assert not q.get('mistakesMarkdown') and not q.get('verificationNote')
            assert q.get('answerParts')==old.get('answerParts'),(generated,q['id'],'companions')
            exercises+=1
    for script in BUILDERS:
        result=subprocess.run([str(NODE),str(tools/script)],cwd=clone,text=True,capture_output=True)
        assert result.returncode==0,(script,result.stdout,result.stderr)
        logs.append({'script':script,'stdout':result.stdout.strip(),'status':'passed'})
    actual=0
    for html in [*sorted((site/'lessons').glob('*.html')),*sorted((site/'chapters').glob('*/lessons/*.html'))]:
        actual+=html.read_text().count('data-answer-format="two-part"')
        assert '容易出错的地方' not in html.read_text()
    assert actual==exercises==118
    output=REPO/'output/website-practice-answers-20261009/producer-check.json'
    output.write_text(json.dumps({'status':'passed','isolation':'temporary copy','exercises':exercises,'scripts':logs},ensure_ascii=False,indent=2)+'\n')
    print(json.dumps({'status':'passed','exercises':exercises,'producers':len(SCRIPTS),'builders':len(BUILDERS)},indent=2))
