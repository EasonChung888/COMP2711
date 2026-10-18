# Number theory Sepia 修订验收

2026-10-18 验收通过。L1.12、L1.13、L1.14 共 92 页已激活 `sepia-20261017` 修订；网站仍为 17 课、39 道原题。主 AI 完成全部页面并通知后，独立验证任务才运行全文与浏览器检查。

| 检查 | 实际结果 | 证据 |
| --- | --- | --- |
| 全文与版本记录 | 92 页全部 written，无待处理页；独立页和课页完整呈现对应新版回答 | [static-check.json](static-check.json) |
| Sepia 审查记录 | 92 份 review 含操作、加载资料、模型身份、风格检查和事实清单；共 304 条事实、70 条缺陷，缺陷引文均逐字存在于原回答 | [static-check.json](static-check.json) |
| 处理时序 | 逐页、跨章的 presented → saved → publication → written 顺序及事务、哈希一致 | [static-check.json](static-check.json) |
| 原件与课程保护 | 436 项原件基线及 1130 项补充基线核对通过；1549 项字节不变，其余 17 项为授权修改的课页 HTML | [static-check.json](static-check.json) |
| 讲解以外的课页内容 | 将新版讲解和原文链接反向替换为旧版后，17 课 HTML 与修订前 SHA-256 完全一致；练习、导航、进度控件及其他 markup 保留 | [static-check.json](static-check.json) |
| 本地资源 | 2835 个本地链接有效，无远程显示依赖，无 KaTeX 错误或公式占位符残留 | [static-check.json](static-check.json) |
| 离线桌面与手机 | Chromium 在断网和 file: 协议下，以 1440 × 1000、390 × 844 检查全部 17 课；目录及课页无文档横向溢出 | [browser-check.json](browser-check.json) |
| 原图、公式、答案 | 92 张原图全部解码成功；练习答案初始折叠且可展开；45 次宽公式检查均能横向滚动 | [browser-check.json](browser-check.json) |
| 学习记录 | 17 课逐一实测勾选、取消、刷新、章节／模块／首页汇总和继续学习；有练习的课实测草稿恢复，逐页笔记可在课页与独立页共用 | [browser-check.json](browser-check.json) |
| 升级前记录 | 三章预置的整课进度、草稿和笔记均能恢复；旧课程记录保留，旧逐页标记不会自动变成整课完成 | [browser-check.json](browser-check.json) |
| 浏览器错误 | 页面错误 0、远程请求 0、失败请求 0 | [browser-check.json](browser-check.json) |
| 构建交付 | 主 AI 执行 pnpm build 成功；3729 个交付文件逐一与源目录 SHA-256 相同，工具目录排除，三章全部激活新版 | [dist-check.json](dist-check.json) |

本轮实际运行下列检查，退出码均为 0。

```sh
node courses/l2-5/tools/check-number-theory-sepia.mjs --full
node courses/l2-5/tools/check-number-theory-sepia-browser.mjs --full
```

验证脚本无需修复。39 道原题中没有选择题，multipleChoiceSubmitted 为 0，表示本轮没有可执行的选择题提交案例。

浏览器脚本生成 58 张截图，另为 RSA 证明第 32、34 页补拍 4 张。独立验证任务实际查看了模块桌面、模运算手机正文、整除答案、Bézout 桌面、逆元表手机、费马小定理手机、RSA 桌面与手机正文及答案，以及最后证明页，文字、表格、公式和笔记区域可读。超出手机宽度的长公式保留横向滚动。

- [模块桌面](screens/number-theory-desktop.png)
- [模运算手机正文](screens/l1-12-modular-arithmetic-mobile.png)
- [Bézout 桌面正文](screens/l1-13-bezout-and-extended-euclid-desktop.png)
- [逆元表手机正文](screens/l1-13-multiplicative-inverses-mobile.png)
- [RSA 第 32 页手机](screens/l1-14-page-032-mobile.png)
- [RSA 第 34 页手机](screens/l1-14-page-034-mobile.png)
- [RSA 第 34 页桌面](screens/l1-14-page-034-desktop.png)
- [RSA 展开答案手机](screens/l1-14-rsa-correctness-answer-mobile.png)

本报告按 Sepia 的 professional pass、style pass、中文校准和 GPT prose layer 撰写。执行模型身份为 GPT version=unknown，prose layer 作为 prior 使用。本文记录文件一致性、审查记录与离线交互的实际结果；原题答案在本轮通过字节保护核验。
