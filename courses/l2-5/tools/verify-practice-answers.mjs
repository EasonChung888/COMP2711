import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {root,markdown} from './render.mjs';
import {answerBlock,localizeAnswer,shaText} from './practice-answers.mjs';
import {section,answerStructureErrors,NON_ENGLISH,visibleAnswerText} from '../../../scripts/knowledge-base/answers.mjs';
import {parseFrontmatter} from '../../../scripts/knowledge-base/schema.mjs';

const repo=path.resolve(root,'../..');
const output=path.join(repo,'output/website-practice-answers-20261009');
const baseline=JSON.parse(fs.readFileSync(path.join(output,'baseline.json'),'utf8'));
const sha=file=>createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const kb=path.join(repo,'knowledge_base/04-Questions');
const sources=new Map(fs.readdirSync(kb).filter(n=>n.startsWith('Q-')&&n.endsWith('.md')).map(n=>[n.split(' - ')[0],path.join(kb,n)]));
const inventory=[root,...fs.readdirSync(path.join(root,'chapters')).map(id=>path.join(root,'chapters',id))]
  .filter(dir=>fs.existsSync(path.join(dir,'practice.json')));
const allowed=new Set(),unique=new Set(),lessonPaths=[];
let exercises=0,partsCount=0,lessons=0,math=0,links=0;
function normalize(html){
  return html.replace(/(<article\b[^>]*data-question-id="[^"]+"[^>]*>)([\s\S]*?)(<\/article>)/g,
    (_,start,inside,end)=>start+inside.replace(/<details\b[^>]*class="answer"[^>]*>[\s\S]*?<\/details>/g,'ANSWER')+end)
    .replaceAll('原题保留英文，解析含中文。','原题、官方答案与补充解析保留英文。');
}
for(const dir of inventory){
  const practicePath=path.join(dir,'practice.json');
  const relative=path.relative(repo,practicePath);
  allowed.add(relative);
  const old=JSON.parse(execFileSync('git',['show','HEAD:'+relative],{cwd:repo,encoding:'utf8'}));
  const current=JSON.parse(fs.readFileSync(practicePath,'utf8'));
  assert.deepEqual(current.map(q=>q.id),old.map(q=>q.id));
  const config=JSON.parse(fs.readFileSync(path.join(dir,'course.config.json'),'utf8'));
  for(const q of current){
    const before=old.find(p=>p.id===q.id);
    for(const key of ['id','topic','questionMarkdown','stems','companionNotes','paper','pdf','page','solutionPages','number','marks']){
      assert.deepEqual(q[key],before[key],q.id+' protected '+key);
    }
    assert.ok(!('mistakesMarkdown' in q)&&!('verificationNote' in q),'Obsolete answer blocks '+q.id);
    const parts=q.answerParts||[q];
    assert.deepEqual(parts.map(p=>p.id),[q.id,...(q.companionNotes||[]).map(n=>path.basename(n).split(' - ')[0])]);
    for(const part of parts){
      const canonical=sources.get(part.id);
      assert.ok(canonical);
      const source=fs.readFileSync(canonical,'utf8');
      const meta=parseFrontmatter(source).properties;
      assert.deepEqual(answerStructureErrors(source,meta.answer_source),[],part.id+' source structure');
      const snapshot=path.join(dir,part.sourceNote);
      allowed.add(path.relative(repo,snapshot));
      assert.equal(fs.readFileSync(snapshot,'utf8'),source,'Stale source snapshot '+part.id);
      assert.equal(sha(snapshot),part.sourceNoteSha256);
      assert.equal(part.answerSource,meta.answer_source);
      assert.equal(part.answerFormatVersion,2);
      const official=section(source,'Official Answer'),supplement=section(source,'Supplementary Explanation');
      assert.equal(part.officialSourceSha256,shaText(official));
      assert.equal(part.supplementarySourceSha256,shaText(supplement));
      assert.equal(part.officialMarkdown,localizeAnswer(official));
      assert.equal(part.solutionMarkdown,localizeAnswer(supplement));
      for(const text of [part.officialMarkdown,part.solutionMarkdown]){
        assert.ok(!NON_ENGLISH.test(visibleAnswerText(text)),part.id+' English');
        assert.ok(!text.includes('[['),part.id+' local links');
        const rendered=markdown(text);
        math+=(rendered.match(/class="katex"/g)||[]).length;
      }
      partsCount++;
    }
    exercises++;unique.add(q.id);
  }
  for(const topic of config.topics){
    const file=path.join(dir,'lessons',topic.slug+'.html');
    const rel=path.relative(repo,file);
    const before=execFileSync('git',['show','HEAD:'+rel],{cwd:repo,encoding:'utf8',maxBuffer:20*1024*1024});
    const html=fs.readFileSync(file,'utf8');
    assert.equal(normalize(html),normalize(before),'Lecture/question/navigation changed '+rel);
    allowed.add(rel);lessonPaths.push(path.relative(root,file));
    const articles=[...html.matchAll(/<article\b[^>]*data-question-id="([^"]+)"[^>]*>([\s\S]*?)<\/article>/g)];
    assert.deepEqual(articles.map(m=>m[1]),topic.questions);
    for(const [,id,inside] of articles){
      const q=current.find(q=>q.id===id);
      assert.ok(inside.includes(answerBlock(q)),id+' answer HTML differs from source display');
      const answer=inside.match(/<details\b[^>]*class="answer"[^>]*>([\s\S]*?)<\/details>/)[1];
      const headings=[...answer.matchAll(/<h4>(.*?)<\/h4>/g)].map(m=>m[1]);
      assert.deepEqual(headings,['Official Answer','Supplementary Explanation'],id+' only two answer parts');
      assert.ok(!/容易出错的地方|核验说明|Detailed Solution|Correction \/ Completion|Common Mistakes/.test(answer),id+' deleted block');
    }
    for(const [,target]of html.matchAll(/(?:href|src)="([^"]+)"/g)){
      const cleaned=target.replaceAll('&amp;','&');
      if(/^(data:|https?:)/.test(cleaned))continue;
      const [name,fragment]=cleaned.split('#');
      const actual=name?path.resolve(path.dirname(file),decodeURIComponent(name)):file;
      assert.ok(fs.existsSync(actual),'Missing local link '+actual);
      if(fragment&&actual.endsWith('.html'))assert.ok(fs.readFileSync(actual,'utf8').includes('id="'+fragment+'"'));
      links++;
    }
    lessons++;
  }
}
const protectedChanged=[];
for(const [file,digest] of Object.entries(baseline)){
  if(sha(path.join(repo,file))!==digest&&!allowed.has(file)){
    // Only the four source producers and four course builders are implementation changes.
    const implementation=['practice.py','chapter-practice.py','counting-practice.py','l1-8-practice.py',
      'build.mjs','chapter-lessons.mjs','counting-lessons.mjs','l1-8-lessons.mjs'].map(n=>'courses/l2-5/tools/'+n);
    if(!implementation.includes(file))protectedChanged.push(file);
  }
}
assert.deepEqual(protectedChanged,[],'Unrelated baseline files changed');
assert.equal(exercises,118);assert.equal(partsCount,120);assert.equal(unique.size,117);
const result={status:'passed',exercises,uniquePrimaryIds:unique.size,sourceAnswerPairs:partsCount,
  lessons,mathExpressions:math,localReferences:links,protectedFiles:Object.keys(baseline).length,
  sourceBodiesExact:true,questionsAndLecturesUnchanged:true,knowledgeBaseAndPDFsUnchanged:true,lessonPaths};
fs.writeFileSync(path.join(output,'verification.json'),JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify({...result,lessonPaths:undefined},null,2));
