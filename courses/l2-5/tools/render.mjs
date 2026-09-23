import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {marked} from 'marked';
import katex from 'katex';
export const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
export const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
export function markdown(source){
  const math=[];
  const token=(tex,displayMode)=>{const id=math.length;math.push(katex.renderToString(tex,{displayMode,throwOnError:true,strict:'ignore',output:'htmlAndMathml'}));return `MATHPLACEHOLDER${id}END`;};
  let input=source.replace(/\$\$([\s\S]*?)\$\$/g,(_,s)=>'\n\n'+token(s,true)+'\n\n').replace(/\\\[([\s\S]*?)\\\]/g,(_,s)=>'\n\n'+token(s,true)+'\n\n').replace(/\\\((.*?)\\\)/g,(_,s)=>token(s,false)).replace(/(?<!\\)\$([^\n$]+?)\$/g,(_,s)=>token(s,false));
  // Chinese text immediately following a closing punctuation mark can prevent
  // CommonMark from recognizing **…**. Preserve those authored emphasis spans.
  input=input.replace(/\*\*([^*\n]+)\*\*/g,'<strong>$1</strong>');
  return marked.parse(input).replace(/MATHPLACEHOLDER(\d+)END/g,(_,i)=>math[Number(i)]);
}
export function shell(title,body,depth=1,level='chapter',moduleNav={href:'counting.html',label:'Counting'}){
  const p=depth?'../':'';
  const chapterNav=level==='chapter'?`<a href="${p}l2-5.html#topics">本章目录</a><a href="${p}source-map.html">课件页码索引</a>`:'';
  return `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title==='COMP2711'?'COMP2711':esc(title)+' · COMP2711'}</title><link rel="stylesheet" href="${p}assets/logic.css"><link rel="stylesheet" href="${p}assets/katex/katex.min.css"><link rel="stylesheet" href="${p}assets/site.css"><script defer src="${p}assets/site.js"></script></head><body data-storage-prefix="comp2711:l2-5:"><a class="skip-link" href="#main-content">跳到正文</a><header class="site-header"><div class="shell"><a class="brand" href="${p}index.html">COMP2711</a><nav class="utility-nav" aria-label="课程导航"><a href="${p}index.html#modules">课程模块</a>${level==='site'?'':`<a href="${p}${esc(moduleNav.href)}">${esc(moduleNav.label)}</a>`}${chapterNav}</nav></div></header><main id="main-content" class="shell lesson">${body}</main><footer class="shell site-footer">COMP2711 · 按知识主题学习</footer></body></html>`;
}
export function slideBlock(n){
 const id=String(n).padStart(2,'0');
 const src=fs.readFileSync(path.join(root,'responses',`${id}.md`),'utf8');
 return `<section class="slide-explanation" id="slide-${id}" data-slide="${n}"><div class="slide-label"><span>课件第 ${n} 页</span><a href="../responses/${id}.md">讲解原文</a></div><details class="original-slide"><summary>查看这一页课件</summary><a href="../slides/${id}.png" target="_blank" rel="noopener"><img loading="lazy" src="../slides/${id}.png" alt="L2.5 课件第 ${n} 页，点击查看大图"></a></details><div class="response-body">${markdown(src)}</div></section>`;
}
if(process.argv[2]==='page'){
 const n=Number(process.argv[3]); const id=String(n).padStart(2,'0');
 const body=`<p class="page-breadcrumb"><a href="../l2-5.html">本章目录</a> / 第 ${n} 页</p>${slideBlock(n)}`;
 fs.writeFileSync(path.join(root,'pages',`${id}.html`),shell(`课件第 ${n} 页`,body));
}
