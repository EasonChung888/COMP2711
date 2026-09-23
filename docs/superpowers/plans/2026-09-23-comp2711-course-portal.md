# COMP2711 Course Portal Implementation Plan

**Goal:** 将现有 L2.5 网站提升为 COMP2711 总入口，内容归于 Counting。

**Architecture:** 沿用 courses/l2-5 的静态生成器及现有资源。首页、模块入口、章节目录分开，教学页面及存储 ID 稳定。此次任务耦合紧密，由主代理直接实现，辅助审查只负责独立验收。

**Tech Stack:** Node.js 静态 HTML 生成器、原有 CSS、原生浏览器 localStorage。

## Global Constraints

不生成 ZIP；不改写 39 页讲解或 17 道练习；不改动 lecture、knowledge_base。网站名为 COMP2711，新增上级模块 Counting，保持离线可用及整课进度。

### Task 1: 入口及导航
- [x] 在 tools/build.mjs 增加 COMP2711 首页及 counting.html；将旧首页输出改为 l2-5.html。课程返回目录指向 l2-5.html，页码索引链接同样更新。
- [x] 在 tools/render.mjs 统一品牌、标题、页脚及面包屑，传入页面层级与有效课程 ID。
- [x] assets/site.js 按显式 data-progress-topics 汇总进度，首页/模块/章节共用稳定的 comp2711:l2-5: 数据；pageshow 时同时更新继续学习。
- [x] 仅补充入口列表及面包屑响应式样式，复用原来的视觉。

### Task 2: 验证及说明
- [x] tools/validate.mjs 将 counting.html 和 l2-5.html 纳入本地链接校验，并检查各级入口、品牌及课程返回路径。
- [x] node courses/l2-5/tools/build.mjs && node courses/l2-5/tools/validate.mjs；比较 tmp/comp2711-portal-protected.json 中所有文件 SHA-256。
- [x] 通过 Playwright 浏览器实测 1440px / 390px 页面、导航、进度、继续学习、草稿、折叠答案，并保存 output/playwright 截图。
- [x] 更新 README.md、PRODUCT.md 和验收记录，独立审查 PASS；提供网站入口。
