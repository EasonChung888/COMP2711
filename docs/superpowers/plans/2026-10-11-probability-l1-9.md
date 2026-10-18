# Probability / L1.9 Implementation Plan

**Goal:** 在 Counting 下方新增 Probability 模块并完整接入 L1.9。

**Architecture:** 复用 chapters、共享样式、chapter-render、串行门禁、整课进度。当前主 AI 直接生成所有讲解，避免代理读取课件。

**Tech Stack:** 静态 HTML、Python pypdf/Poppler、Node marked/KaTeX、现有 site.js、Playwright。

## 执行步骤
- [x] 保存源文件 SHA-256 和初始清单；扩展 chapter-render 的 L1.9 白名单及同款样式。
- [x] 建立 l1-9-serial.py 适配器。准备动作只接受首个未完成页，提交验证回答哈希和完整 Markdown 渲染。
- [x] 严格逐页 prepare → 查看当前原图及文字 → 主 AI 完整回答写入 responses/NNN.md → commit → 确认成功；32 页全部完成。
- [x] 仅从已保存讲解制定 course.config.json，每页唯一归属，课内递增。
- [x] 此时才检索知识库，逐题核对原文与官方答案，独立推导核验；快照来源并保存 practice.json 与核验报告。
- [x] 从原文渲染课程、页码索引、整课勾选和前后导航；添加 probability.html 和首页入口、全站汇总及继续学习。
- [x] 验证 32 页覆盖、源和回答哈希、网页完整片段、真实串行事件；验证保存后恢复、提交后恢复、哈希冲突阻断。
- [x] 实测 file:// 桌面/窄屏、断网、公式、原图、答案折叠、草稿、完成/取消/刷新/首页计数与继续学习；重建 dist 并交付本地入口。

## 文件范围
新增 chapters/l1-9 下所有内容；新增 tools/l1-9-serial.py、l1-9-lessons.mjs、l1-9-practice.py、verify-l1-9.mjs。修改 tools/chapter-render.mjs 与 tools/portal.mjs 以接入模块；旧章节输出不重建。保留现有未跟踪 deployment.json。
