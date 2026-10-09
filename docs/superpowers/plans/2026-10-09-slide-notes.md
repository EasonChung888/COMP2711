# Slide Notes Implementation Plan

**Goal:** 在每页 PPT 讲解旁提供独立且自动保存的笔记。

**Architecture:** 在共享 site.js 中查找现有讲解，保留 response-body 节点，将它与笔记区置于响应式网格。使用现有章节存储前缀加 slide-note 与原页码作为笔记身份。

**Tech Stack:** 本地 HTML/CSS/JavaScript、localStorage、已有 Playwright 运行时。

## Constraints

- 不修改讲解原文、课件、知识库、课程生成器或既有未提交变更。
- 不新增网络依赖，不改变整课完成或解题草稿的键。
- 当前任务直接实施，共享资源修改后核验所有章节入口。

## Implementation

- [x] 修改 courses/l2-5/assets/site.js：建立带 label、textarea、保存说明和状态的笔记区；逐页隔离、即时保存、失败提示、pageshow/storage 恢复。
- [x] 修改 courses/l2-5/assets/site.css：桌面正文/笔记两栏，窄屏上下排列，最小宽度归零避免公式撑开网格；可调整输入框高度、清晰焦点和打印隐藏。
- [x] 更新 courses/l2-5/README.md，说明笔记在当前浏览器本地保存。
- [x] 使用已有 Playwright 运行时离线检查所有讲解页面的增强覆盖，并检查保存恢复、跨入口共享、隔离、清空、异常、原文不变、公式/进度/草稿回归；保存桌面和窄屏截图至 output/playwright/slide-notes。
- [x] 审查差异及截图，仅修复本功能问题；记录结果。

## Verification result

2026-10-09：391 个 HTML 入口、684 处讲解实例通过静态覆盖检查；57 个浏览器页面通过离线 file://、1440/390px、原文节点一致性检查。保存恢复、跨入口共享、章节及页码隔离、清空、存储拒绝/额度不足/损坏数据提示、原有进度和草稿均通过。结果和截图位于 output/playwright/slide-notes/。
