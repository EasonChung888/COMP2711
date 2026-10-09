import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {esc, markdown} from './render.mjs';
import {ANSWER_HEADINGS, NON_ENGLISH, section, visibleAnswerText} from '../../../scripts/knowledge-base/answers.mjs';

import {parseFrontmatter} from '../../../scripts/knowledge-base/schema.mjs';

export const ANSWER_FORMAT_VERSION=2;
export const shaText=text=>createHash('sha256').update(text,'utf8').digest('hex');

export function localizeAnswer(source) {
  return source.replace(/!?\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g,(_,target,alias)=>{
    if(!/^knowledge_base\/past_paper\/[^#]+\.pdf#page=[1-9]\d*$/.test(target)){
      throw Error('Unsupported answer reference: '+target);
    }
    const local='../sources/papers/'+target.slice('knowledge_base/past_paper/'.length);
    return '['+(alias||target)+']('+local+')';
  });
}

export function answerFields(text) {
  const bodies=ANSWER_HEADINGS.map(name=>section(text,name));
  for(let i=0;i<bodies.length;i++){
    if(!bodies[i])throw Error('Missing '+ANSWER_HEADINGS[i]);
    if(NON_ENGLISH.test(visibleAnswerText(bodies[i])))throw Error('Non-English '+ANSWER_HEADINGS[i]);
  }
  return {
    answerFormatVersion:ANSWER_FORMAT_VERSION,
    officialMarkdown:localizeAnswer(bodies[0]),
    solutionMarkdown:localizeAnswer(bodies[1]),
    solutionSection:'Supplementary Explanation',
    officialSourceSha256:shaText(bodies[0]),
    supplementarySourceSha256:shaText(bodies[1])
  };
}

export function answerBlock(q) {
  const parts=q.answerParts||[q];
  for(const part of parts){
    if(part.answerFormatVersion!==ANSWER_FORMAT_VERSION||!part.officialMarkdown||!part.solutionMarkdown){
      throw Error('Refresh the two-part answer snapshot before building: '+part.id);
    }
  }
  const body=(key)=>parts.map(part=>
    (parts.length>1?'<p class="small-note" lang="en">'+esc(part.id)+'</p>':'')+
    '<div class="answer-part" data-answer-source-id="'+esc(part.id)+'" lang="en">'+markdown(part[key])+'</div>'
  ).join('');
  const pages=Array.isArray(q.solutionPages)?q.solutionPages:[q.solutionPages];
  // These links are provenance metadata; authored legacy answer blocks are absent.
  const sourceLinks=parts.map(part=>'<a href="../'+esc(part.sourceNote||q.sourceNote)+'">'+esc(part.id)+'</a>').join(' · ');
  const provenance=q.answerSource==='derived'?'印刷原文与知识库独立推导；保留来源标记':'知识库保留的官方原文与补充解析';
  return '<details class="answer" data-answer-format="two-part"><summary>查看答案与解析</summary>'+
    '<h4>Official Answer</h4><div class="official-answer" lang="en">'+body('officialMarkdown')+'</div>'+
    '<h4>Supplementary Explanation</h4><div class="supplementary-explanation" lang="en">'+body('solutionMarkdown')+'</div>'+
    '<p class="small-note">答案来源：'+provenance+' · <a href="../'+esc(q.pdf)+'#page='+(pages[0]||q.page)+'">查看印刷答案页</a> · 知识库原始记录：'+sourceLinks+'</p></details>';
}

// Python snapshot producers use this exact parser/display conversion as well.
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
  if(!['fields','metadata'].includes(process.argv[2]))throw Error('Usage: practice-answers.mjs fields|metadata');
  let input='';
  for await(const chunk of process.stdin)input+=chunk;
  process.stdout.write(JSON.stringify(process.argv[2]==='metadata'?parseFrontmatter(input).properties:answerFields(input)));
}
