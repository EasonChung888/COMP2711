# Number theory Sepia 版本工具

新增 `courses/l2-5/tools/number-theory-sepia.mjs`。范围固定为 l1-12 / l1-13 / l1-14，revision 为 `sepia-20261017`，未修改共享 renderer、Probability、题库、原 PDF 或图片。

## 接口

```text
node courses/l2-5/tools/number-theory-sepia.mjs init
node courses/l2-5/tools/number-theory-sepia.mjs prepare l1-12 1
node courses/l2-5/tools/number-theory-sepia.mjs commit l1-12 1
node courses/l2-5/tools/number-theory-sepia.mjs audit
```

`init [chapter]`、`audit [chapter]` 可指定单章；省略时按三章顺序处理。init 保留 live 原 responses，并在 revision 中复制每页旧回答，保存 original-manifest.json、original-events.jsonl、original-config.json 及 SHA-256。重复 init 校验已有备份，不覆盖历史。

`prepare` 只呈现当前章首个未完成页的旧回答和原 manifest 所指的当前 page-text。重复 prepare 同一 prepared 页可恢复显示；跨页或提前进入后章被拒绝。每次检查已保存原回答、原图、备份、配置及已完成改写页的哈希，前章须全部成功。

主 AI 保存至 revision 的 `reviews/NNN.json` 和 `responses/NNN.md` 后执行 commit。review 契约兼容主 AI 的 number-theory-sepia-save.py：facts 为非空字符串数组；defects 为数组，每项含非空 check、quote、evidence，quote 必须在该页旧回答中逐字出现。其他 Sepia provenance 字段保留但不强制固定。工具不生成或改写讲解；事实清单内容是否完整、数学事实是否保持由主 AI 逐页核验，结构检查不能代替作者的事实核对。

## 立即写入与恢复

commit 先校验 review/response 并持久化各自 SHA-256；savedAt 出现后拒绝修改它们。准备 lesson 和 source-map 的 staged 完整输出，记录旧/预期新 hash 和事务 ID。随后更新 active manifest response 指针，使用已有 buildPage/verifyPage 原子写独立页，更新所属课页的完整单页区块及 source-map 对应行，确认原文渲染完整、active 原文链接正确后才记录 page_written、允许下一页。

原 active record 的 previousResponse 保存旧路径/hash；原回答、原始清单与日志备份保持不变。单页更新不重写练习、整课完成控件或课程配置。当前共享 pageBlock 已支持 record.response，因此没有新增路径补丁，也不需修改 Number theory 课程 builder。

中断恢复复用已保存回应与 staged 输出，只接受事务指定的旧/新目标 hash；未知目标改动被拒绝。失败有 page_publication_failed 及 manifest.lastFailure；重试有 page_publication_resumed。active activation 和 revision page_written 用事务 ID 避免重复。prepare / saved 事件追加失败也可通过同页重试补齐，而不产生第二条呈现/保存事件。

## 实际验证

仅运行合成测试，未执行真实 init / prepare / commit / audit，也未读取真实章节内容、page-text、responses 或课件图像。

```text
node --check courses/l2-5/tools/number-theory-sepia.mjs
node --check output/number-theory-sepia-20261017/test-version-tool.mjs
node output/number-theory-sepia-20261017/test-version-tool.mjs
```

均通过。夹具在临时目录创建三章各2页，并在结束后删除。覆盖：备份与原文/config不变、首未完成页/跨章门禁、只输出当前页、错误 quote 和空 facts 拒绝、已保存回应篡改拒绝、单页/完整lesson区块/source-map active链接、练习标记保留、幂等commit、六页全序audit，以及四个故障位置的同页恢复——prepare事件追加、保存事件追加、lesson原子替换后、最终page_written事件追加。最终每页恰有一条呈现、保存、写入事件，activation 不重复。

真实92页的作者改写、事实核验、最终双版本内容检查、离线浏览器、草稿/进度/窄屏和 dist 同步由主 AI 后续完成。本报告不宣称这些已执行。
