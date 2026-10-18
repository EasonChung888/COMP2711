# Number theory 独立验收

验收结果通过。L1.12–L1.14 共 92 页原文、17 课、39 道原题，静态检查及 `file://` 离线浏览器交互均通过。保护结论限定于本任务范围和未被并行修订的基线文件；整个旧文件基线并非全部未变。

## 实测结果

| 项目 | 结果 |
| --- | --- |
| 逐页材料 | 31 + 27 + 34 = 92 页；来源 PDF、原图、回答和 HTML 的 SHA-256 全部匹配；完整 Markdown 渲染片段同时存在于独立页与所属课页 |
| 课程覆盖 | 17 课；每一原页唯一归属，课内保持原页序；L1.14 的 FLT 位于 DH 前 |
| 真实串行日志 | 368 条 prepare_started → page_presented → response_saved → page_written 事件，顺序及跨章时序通过；所有选题事件均晚于全部 92 页写入，重复运行保留真实事件 |
| 练习来源 | 39 题；题库原记录与快照、PDF、共享题干和官方／补充答案哈希匹配；HTML 保留题干及两部分答案全文，存在的 reviewMarkdown 已显示 |
| 练习与完成位置 | 每课讲解全部在练习之前；完成控件只有末尾“我已学完这课”一处，无逐页／逐题完成控件 |
| 离线依赖与链接 | 2863 处本地链接及锚点通过；脚本、CSS、字体及图片可本地加载；普通来源外链保留 |
| 浏览器布局 | Chromium 独立临时上下文、网络 offline、file://；17/17 课均实测桌面 1440 与窄屏 390，无页面横向溢出 |
| 公式、图片、答案 | 92 张原图均成功解码；所有课页无 KaTeX 错误；全部练习答案与说明可展开；17 课的原图／答案／来源说明另经 272 次真实 summary 点击开合验证；42 次溢出公式区域横向滚动验证通过 |
| 学习状态 | 每课完成勾选／取消与刷新恢复通过；章节、模块、首页计数同步通过；继续学习指向当前课；逐页笔记在课页及独立原页共享 |
| 草稿与旧记录 | 14 个含题课程的草稿恢复通过；3 个无题课程按实际 0 题保留。旧课完成状态、旧解题草稿与旧页笔记未被覆盖；旧 page-read 未被升级为整课完成 |
| 选择题即时提交 | 本次 39 道原题没有 radio 选择题，故未触发即时提交用例；既有提交处理器未改动 |
| 浏览器资源错误 | 页面错误 0、远程请求 0、失败资源 0 |
| 中断恢复 | 三章均以实际渲染器在隔离临时副本验证：保存回答原样复用、不重复保存、待完成页阻止预读、提交后前进、重复提交／跳页／回答篡改／源文件篡改均阻止 |
| 发布目录 | 主 AI 实际运行 pnpm build 成功；dist-check.json 记录本次 492 文件 source/dist 哈希一致，无缺失／差异，工具排除 |

## 原课保护与外部并行工作

最终静态检查截至 2026-10-17T06:08:51.840Z。原保护基线共 3321 项，其中 3255 项字节相同，66 项变化属于主 AI 已确认的外部 Probability 显示修订。逐项路径、原哈希、当前哈希及归因完整保存于 [baseline-differences.md](baseline-differences.md) 与 [static-check.json](static-check.json)。基线本身未修改，未还原其他任务的工作。

知识库 1090 文件、lecture 原件 20 文件、既有回答原文 397 文件全部匹配基线。Number theory 的 92 个响应还逐一匹配最初 response_saved 事件记录。外部修订期间变动文件数量会随该任务继续增长；这里报告的是本次验证快照，不声称整个共享工作区从此不再变化。

首轮静态检查严格拦截了此前尚未确认范围的 L1.10 变动；主 AI 根据真实 response_revision_activated 事件和已存在的并行计划确认范围包括 L1.9、L1.10、L1.11 后，仅修正验证分类并重新检查。没有删除、改写或制造旧日志。

## 目视检查

已目视 17 课桌面及窄屏截图联络图，并查看模块目录、原页索引与官方／补充答案的原尺寸截图。正文、数学公式和笔记区布局正常，未发现阻断显示问题。窄屏长公式在自身区域横向滚动。

一个非阻断可读性限制是 390 像素原页索引的四列表格较密，课程名及来源链接多次折行，行高偏大；页面仍在屏宽内，链接有效。本验收未改共享样式或原文。截图因滚动到正文而在边缘出现的上／下文裁切属于截图视口范围。

浏览器原始截图 58 张，另有 6 张联络图；文件位于 [screens](screens/)。逐项目视记录见 [visual-review.json](visual-review.json)，联络图对应关系见 [screenshot-review-index.json](screenshot-review-index.json)。

## 每课实际题量

| 章节 | 主题 | 题数 |
| --- | --- | --- |
| l1-12 | divisibility | 3 |
| l1-12 | division-theorem | 3 |
| l1-12 | modular-arithmetic | 3 |
| l1-12 | congruence-rules | 3 |
| l1-12 | modular-applications | 0 |
| l1-13 | gcd-and-euclid | 3 |
| l1-13 | bezout-and-extended-euclid | 3 |
| l1-13 | multiplicative-inverses | 2 |
| l1-13 | linear-congruences | 3 |
| l1-13 | hashing-and-checksums | 0 |
| l1-13 | chinese-remainder-theorem | 3 |
| l1-14 | secret-key-ciphers | 0 |
| l1-14 | modular-exponentiation | 3 |
| l1-14 | fermat-little-theorem | 3 |
| l1-14 | diffie-hellman | 1 |
| l1-14 | rsa-and-public-keys | 3 |
| l1-14 | rsa-correctness | 3 |

## 可复查证据

- [静态验收](static-check.json)、[离线浏览器验收](browser-check.json) 与 [真实点击开合验收](details-click-check.json)
- [构建产物一致性](dist-check.json)
- [L1.12 恢复](l1-12-recovery-check.json)、[L1.13 恢复](l1-13-recovery-check.json)、[L1.14 恢复](l1-14-recovery-check.json)
- 验证脚本为 `courses/l2-5/tools/verify-number-theory.mjs`、`courses/l2-5/tools/check-number-theory-browser.mjs`，均通过 `node --check`。只读验证之外仅新增脚本、截图和报告，不修改原回答、课程内容、知识库或原课件，不运行课程构建，不提交 Git。
