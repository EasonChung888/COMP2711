# Number theory 构建辅助报告

日期：2026-10-16。范围：工具、模块目录、显示层及合成夹具验证。

## 修改文件

- `courses/l2-5/tools/chapter-render.mjs`：在已有注册中添加 l1-12、l1-13、l1-14；启用现有 `counting-courses.css`、章节“开始学习”及答案核验记录入口。保留原先已有 l1-10 / l1-11 接入。
- `courses/l2-5/tools/portal.mjs`：Probability 后新增同级 Number theory → `number-theory.html`；三章默认页数 31 / 27 / 34，优先使用 metadata.pageCount；首页整课进度和继续学习合并新课路径和存储键；优先沿用章 metadata.storagePrefix。新增 `{onlyNumberTheory:true}`，此模式仅写 `index.html` 和 `number-theory.html`，不写 Counting / Logic / Sets and Functions / Probability。
- `courses/l2-5/tools/number-theory-lessons.mjs`：独立的显式构建入口；导入时不读取课程输入。三章全部 written 且页序覆盖完整后才读取 config / practice / responses。校验主题唯一归属、课内原页序、storagePrefix、练习 ID / 核验标记 / 来源 hash / 两段答案格式，以及回答、原图和已有单页 HTML hash。写主题课程、source-map、原页显示层 topic 导航和 chapter index，保留原文；仅显示层变化更新 HTML hash 并记录 `html_rerendered`。首课上一链接和末课返回链接均指向 Number theory；跨章上一/下一课相连。沿用原 questionBlock、answerBlock、草稿字段及一个末尾“我已学完这课”。
- `output/number-theory-20261016/test-build-helper.mjs`：仅使用临时目录中的合成文本、占位图片及空练习，不读取真实三章课件、讲解或题库。测试结束删除临时目录。

## 已实际执行的检查

以下均通过：

```text
node --check courses/l2-5/tools/chapter-render.mjs
node --check courses/l2-5/tools/portal.mjs
node --check courses/l2-5/tools/number-theory-lessons.mjs
node --check output/number-theory-20261016/test-build-helper.mjs
node output/number-theory-20261016/test-build-helper.mjs
```

合成测试覆盖：缺页 / 重复页 / prepared 状态阻止完成构建；主题覆盖和存储前缀错误阻止构建；原文被篡改时构建在创建课页或模块页之前失败；31+27+34 个模拟页成功生成主题课、单页导航及92行 source-map；首页 Number theory 位于 Probability 后；首页和章节有兼容进度键和 resume 路径；每课全部讲解及练习后恰有一个完成勾选；首尾和跨章导航正确；本地数学渲染与现有 CSS 引用存在；原文 hash 不变；重复构建无额外 HTML rerender 事件；只构建新模块时旧模块页字节完全不变；门户总页数跟随 metadata 覆盖值。

## 使用方式与输入契约

只有真实92页全部完成、主 AI 完成分课和练习核验后才运行：

```text
node courses/l2-5/tools/number-theory-lessons.mjs
```

每章需要 `chapter.meta.json`、`manifest.json`、`course.config.json`、`practice.json`。course.config 沿用原格式：`storagePrefix`、`topics[{slug,title,description,pages,questions}]`。practice 沿用 Probability 扩展的格式：`topic`、题源和文件 SHA-256、`verificationStatus:'verified'`、`independentVerification`、`answerSource:'official'`，以及现有 `answerBlock` 所需的两段答案字段。

## 本次未执行

未运行真实 Number theory 构建，未读取 L1.12 / L1.13 / L1.14 PDF 正文、缩略图、page-text 或 responses，未编写逐页讲解，未选题，未修改章 metadata 或 serial wrapper，未提交 Git。真实课页、练习折叠/草稿、file:// 离线、桌面/窄屏与浏览器进度恢复仍需主 AI 在全部课程完成后验收。

## 独立审查修复补充（2026-10-16）

已阅读 `build-support-review.md`，修复其中 P1 与 P2；未改变真实课程内容或执行真实构建。

P1：`chapter-render.mjs` 的 `buildPage(id,page)` 保持原调用兼容，增加可选第三参数 `{beforeWrite}`。渲染完整 HTML 并计算预期 hash 后先调用回调，再以同目录临时文件 + rename 原子替换 HTML。Number theory 构建器在回调中先原子持久化 `pendingRerender`，包含事务 ID、开始时间、旧/预期新 HTML hash、回答/原图 hash，再记录 `html_rerender_started`。每页写入成功后立即原子保存其新 hash；成功事件持久化后才删除 intent，避免整章末尾统一保存导致的中断死锁。

重跑先检查所有章节原文、原图、练习及页覆盖，再只接受与待恢复 intent 的旧或预期新 hash 完全相符的 HTML；重新验证完整渲染内容，记录 `html_rerender_recovered`，分别标明未写入时重试或已写入时完成。任意其他 HTML hash 仍然拒绝，不自动采纳。可捕获失败将时间及错误保存到 intent.lastFailure，并追加 `html_rerender_failed`；即使日志追加本身失败，持久 intent 仍保留失败信息供恢复。已有成功事件和原始页处理日志不改写。

P2：新增全三章 `checkStoragePrefixes`；拒绝缺失、空串、空白字符、跨章重用以及与旧 Counting / 已有章节保留或实际使用前缀碰撞。合法且唯一的 metadata 自定义前缀继续可用。各章 config 与 metadata 前缀仍须一致。

新增并实际通过的合成故障注入：

1. intent 已落盘、开始日志追加失败，HTML 尚未替换；正常重跑成功并记录重试恢复。
2. HTML 已原子替换后抛错，manifest 仍旧 hash；正常重跑成功并记录已写入恢复。
3. 新 hash 已落盘、成功事件追加失败；正常重跑完成恢复。
4. HTML 已更新、manifest 原子替换失败；保留 lastFailure，正常重跑成功。
5. 待恢复 HTML 被额外篡改，构建拒绝且不追加恢复事件；还原为 intent 预期字节后方能恢复。
6. 缺失/空串/含空白 prefix、跨章同 prefix、旧 Counting 和已有 Probability prefix 均被拒绝，唯一自定义 prefix 通过。

已再次执行三个工具及测试脚本的 `node --check`，以及 `node output/number-theory-20261016/test-build-helper.mjs`，全部通过；`git diff --check` 对已有修改工具通过。合成脚本仍只操作临时目录并在结束时清理。非空练习、草稿、浏览器多主题和真实课程验证边界保持前述说明。
