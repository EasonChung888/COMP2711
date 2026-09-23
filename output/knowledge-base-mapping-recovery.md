# Knowledge-base mapping recovery · 2026-09-23

恢复与当前 knowledge_base 路径匹配的 45 个维护脚本、测试及证据文件；恢复缺失的 4 个 Obsidian 配置。Obsidian vault 仍映射到 COMP2711 项目根目录，保留应用当前窗口状态。

修复 36 个入口/试卷笔记中原来指向旧审计目录或网站快照的 72 条原生解析关系，改用明确的正式知识库路径，并保留显示文字。7 个 Bases 增加正式目录范围，排除网站的 19 份题目副本。统一 All Questions 的列属性引用，并修复审计说明中被 Markdown 误读成链接的数学表达式显示；原始 JSON 记录未修改。

验收：211 项检查通过；Obsidian 原生查询 7 个视图成功，其中题目视图 715 条、试卷视图 34 条；知识库内部未解析链接 0，指向知识库外副本的链接 0。已打开 All Questions 表格检查，应用未报告错误。

所有正式题目、共享题干、图像、试卷 PDF、lecture PDF 与恢复源逐字节一致；网站全部 17 道练习的来源 SHA-256 仍匹配。网站 40,445 项内容/链接检查仍通过。

完整结果：knowledge-base-mapping-recovery.json。截图：playwright/kb-restored-all-questions.png。
