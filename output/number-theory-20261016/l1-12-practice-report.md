# L1.12 练习快照报告

已完成 12 道原印刷小题的选择、独立核验和快照。未运行课程构建，未修改任何逐页讲解或知识库原文。

| 主题 | 题数 | 原题 ID |
| --- | ---: | --- |
| 整除与整数线性组合 | 3 | Q-2019-MID-P06-a、Q-2019-MID-P06-b、Q-2025S-MID-P07 |
| 带余除法与唯一性 | 3 | Q-2013-FINAL-P01-a、Q-2014-FINAL-P02-a、Q-2014-FINAL-P02-b |
| 模运算与逆元入门 | 3 | Q-2013-FINAL-P01-b、Q-2015-FINAL-P05-a、Q-2025S-FINAL-P03-a |
| 同余关系与运算规则 | 3 | Q-2017-MID-P04-b、Q-2019-MID-P09-a、Q-2019-MID-P09-c |
| 校验、哈希与伪随机数 | 0 | 无直接匹配原题，保留实际数量，不以一般模运算谜题填充 |

## 文件

- 可复现脚本：`courses/l2-5/tools/number-theory-practice-l1-12.py`。
- 练习快照：`courses/l2-5/chapters/l1-12/practice.json`。
- 仅更新本章 `course.config.json` 各主题的 questions；其他主题信息、页归属、标题和描述保持原值。
- 来源：本章 `sources/notes/` 保存 12 份题目笔记及 5 份共享题干笔记；`sources/papers/` 保存 7 份原 PDF。所有复制文件与来源 SHA-256 相同。
- 逐题核验记录：`courses/l2-5/chapters/l1-12/sources/audit/l1-12-question-review.md`。
- 仅向 L1.12 的 `events.jsonl` 追加快照阶段真实开始和完成事件；不修改其他章日志。

## 核验

使用 `chapter-practice.py` 的原题、共享题干、来源复制与 hash helpers，以及 `practice_answers.py` 的统一两段答案解析器。Official Answer 和 Supplementary Explanation 保留来源原文；题面只解析显示标记、拼接必要原共享题干。2019 Problem 6 的两份原子笔记缺少“证明或反驳”共用指令，已从物理 PDF 第8页原样补回，并在 originalRestoration 明记。

本次没有合并或拆分印刷小题，每项 originalSourceIds 均对应一个原小题；不把整道大题分数误给无单独分数的小题。所有选题均为文字或公式题，无原题图示需要额外复制；已保留本地 figures 目录，不生成替代图。

实际目视对照了 8 个来源物理页：2013 Final p.3；2014 Final p.4；2015 Final p.10；2017 Midterm p.6；2019 Midterm pp.8、11；2025 Spring Midterm p.11；2025 Spring Final p.4。独立核验包括一般代数证明、有效反例、全余数集合穷举和边界条件，逐题细节见 audit。有限样本检查只补充一般证明，不用它代替证明。

排除 Q-2025S-MID-P08-a（官方仅证单向，知识库 answer_source=derived）和 Q-2017-MID-P04-a（官方末行有明确笔误）。逆元表可用 8×8 产品枚举求解，不依赖后续 GCD 定理；保留的来源补充解析虽引用 GCD 判据，独立核验不以其为前提。CRT、Fermat、扩展 Euclid 及质因数分解题留给后续章。

对知识库全部 Question 段落搜索 check sum / check digit / ISBN / UPC / hash / hashing / pseudorandom / linear congruential，结果为零；不以平均分等一般模运算题替代本课的校验、哈希和伪随机数主题。

## 实际检查结果

- Python 编译和可复现脚本运行通过，脚本内全部独立验算断言通过。
- Node 只读核验通过：12 个唯一 ID，主题数量 3/3/3/3/0；逐题原题笔记、题干及 PDF hash；两段答案与统一解析器输出逐字段相等；数学 Markdown 可渲染；答案折叠结构完整；题源链接均为存在的本地文件。
- 本章 config 除 questions 外的字段保持一致；本章全部 responses 与知识库 04-Questions 全树字节未变。
- 该脚本没有调用课程 build；未进行浏览器展开、草稿或进度测试。

全部92页最后一条 page_written 时间为 `2026-10-16T14:45:28.599263+00:00`；本次快照生产开始事件为 `2026-10-17T05:34:48.449838+00:00`，明确晚于全部讲解完成。此事件标记来源审查后的快照生产阶段，未回填或伪造更早时间。现有第一版92页讲解保持不变。

练习快照 SHA-256：`bf7148baaaa77fe9350c53354cab6679277277cc6fd11818f0593f7cc990fcc4`。

知识库 04-Questions 全树 SHA-256：`164a0fe2abeb9cd66a932bb27f169047ec7d9347993823a8e39c49d0739ec7dd`。

L1.12 responses 全树 SHA-256：`4e4dbdc4c77a9133bdcb8c67ebd9d163e307a7b6bb0b057578e0e739f99a6d67`。
