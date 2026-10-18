# Number theory 构建辅助独立审查

日期：2026-10-16。审查范围仅为设计规格、构建辅助报告、`number-theory-lessons.mjs`、`portal.mjs`、`chapter-render.mjs` 及合成测试。未读取真实三章 PDF、slides、page-text、responses；未运行真实构建、选题、编写解释、改源代码或提交 Git。

## 首次审查结论（修复前记录）

首次合成测试通过，正常完成路径满足主要显示层要求；当时发现以下两项需修复。下列位置和复现描述保留为修复前记录，最终状态见末尾复审结论。

### P1：显示层重渲染中断后，普通重跑被旧 HTML hash 阻塞

位置：`courses/l2-5/tools/number-theory-lessons.mjs:117–130`，特别是 120 行修改 HTML 后，直到 130 行才保存整章更新后的 `htmlSha256`。

一页 `buildPage()` 已写入带主题导航的新 HTML 后，如果 `verifyPage()`、events 追加、后续页写入或进程中断导致退出，磁盘 manifest 仍保存旧 HTML hash。下次正常入口在 `checkChapter()` 第 59–62 行报 `source artifact mismatch`，无法继续。原回答与原图未被改动，但显示层半完成状态需要手动修复才能恢复，违反中断可恢复的目标。

已执行隔离合成复现：复用现有 92 页夹具，在第一次写 `events.jsonl` 时注入异常；第一次构建按预期中断，恢复原 fs API 后重跑，确定抛出 `l1-12/1: source artifact mismatch`。进程 exit 0；所有夹具均在临时目录中清理。

建议：引入可恢复的显示层 intent/journal 或 staging 事务，先记录旧 hash、新渲染的预期 hash 及响应/图片身份，再替换输出；每页成功后持久化 hash，重启只在 intent 与原文/原图/目标内容全部吻合时恢复，不把普通 hash 不匹配默认为可信。新增故障注入测试，覆盖 HTML 替换后、日志追加失败及 manifest 更新失败后的正常重跑。

### P2：storagePrefix 仅检查相等，未保证独立且有效

位置：`courses/l2-5/tools/number-theory-lessons.mjs:39`；全章 preflight 位于 107–114 行；消费位置为 `portal.mjs:23` 及 `chapter-render.mjs` 的 body/progress 属性。

`config.storagePrefix === meta.storagePrefix` 不排除两者同时缺失、空字符串，或不同章节重复使用同一 prefix。若新章节误复用旧课程 prefix，同名 topic 的完成状态与草稿也可能共享存储。空值还会使门户的 fallback prefix 与章节 body prefix 不一致。规格要求稳定、独立的章节存储键，不能只校验两个输入彼此一致。

已执行隔离合成复现：三章 metadata 和 config 均设为旧 Counting 的 `comp2711:l2-5:`，各章保留同名合成 topic；所有 `checkChapter()` 及最终构建通过，首页产出 3 个完全相同的 `comp2711:l2-5:lesson-complete:fixture-topic` 键。没有读取任何真实课程数据。

建议：校验 prefix 为非空合法字符串，三个新章之间唯一，并避免旧课程已使用/保留的 namespace；保留合法 metadata 自定义 prefix 的能力。新增缺失/空 prefix、跨章碰撞、与旧 Counting prefix 碰撞的拒绝测试。

## 已确认通过的范围

- 现有 `node output/number-theory-20261016/test-build-helper.mjs` 实际通过，且仅创建临时合成夹具。
- 完整 written 页序门禁、缺页/重复页/prepared 拒绝、主题唯一覆盖、课内递增和原文 hash 拒绝路径成立。
- Number theory 的三章目录、Probability 后的首页位置、跨章课程导航、单页主题导航、source-map、仅课尾一个完成勾选均有代码与合成验证。
- `onlyNumberTheory:true` 的写入分支只写首页和 Number theory 模块入口；合成测试确认 Logic、Sets and Functions、Counting、Probability 四个模块文件字节不变。
- 正常完成后的第二次构建没有额外 rerender 事件，原文 hash 不变。

## 测试边界

现有夹具每章仅一个 topic，且 practice 全为空，因此不能证明非空练习的题源链接、答案展开、草稿恢复或多 topic 的实际浏览器行为。虽然输出使用了既有 `answerBlock`、`data-attempt` 和本地资源引用，真实非空练习、file:// 离线、桌面/窄屏、公式与整课进度恢复仍须后续验收。合成测试没有核验真实 92 页的日志时序、分课质量或答案正确性，本审查也未涉及这些内容。

审查过程中仅新增/更新本报告。源代码修复由主 AI 另派构建代理处理。


## 修复后独立复审结论

日期：2026-10-16。已重新阅读实际工具变化和更新后的故障注入测试；P1、P2 均已关闭，本轮未发现新的阻断问题。构建辅助工具可继续进入最终真实课程验收，但这不替代前述内容、题目和浏览器验收。

P1 修复符合发现问题的范围：`buildPage()` 增加可选 `beforeWrite` 回调，旧的二参数调用仍可用；HTML 通过临时文件加原子 rename 替换。Number theory 在替换前持久化 `pendingRerender`，绑定 transactionId、旧/预期新 HTML hash、原文和原图 hash；逐页保存新 hash，并在成功日志写入后清理 intent。恢复路径仅接受明确记录的旧/新 HTML hash，仍先检查全部章节原文、原图、HTML 内容与 hash；任意未授权 HTML 篡改继续被拒绝。失败和恢复记录保留真实事件与失败信息。该实现消除了首次审查复现的“新 HTML + 旧 manifest hash 导致永久阻塞”。

P2 修复符合发现问题的范围：单章拒绝缺失、空白或含空白的 prefix，最终构建还检查三章 prefix 唯一，并与旧 Counting namespace、现有其他章节默认 namespace 和 metadata prefix 比较。合法自定义 metadata prefix 继续可用，未改动旧课程存储数据。

本次独立实际执行并通过：

- 四个指定文件的 `node --check`。
- `node output/number-theory-20261016/test-build-helper.mjs`。
- 测试的四种异常分别发生在：intent 持久化后/HTML 替换前、HTML 原子替换后/hash 保存前、成功事件追加时、更新后 manifest 原子替换时；每次均由普通构建入口恢复，pending 最终清理。
- 带 pending 的 HTML 额外篡改被拒绝，拒绝前没有新增恢复日志。
- 缺失/空/含空白 prefix、跨章重复 prefix、旧 Counting 和现有旧章节 namespace 碰撞均拒绝。
- 正常完整构建后重复构建成功，不新增 rerender 事件；92 页原文和显示层 hash、导航、单一课尾完成控件、source-map、首页模块顺序仍通过。
- Logic、Sets and Functions、Counting、Probability 模块页字节保护仍通过。

本次未读取任何真实三章课件或讲解内容，未真实构建，未修改源码或测试，未提交或派生代理。
