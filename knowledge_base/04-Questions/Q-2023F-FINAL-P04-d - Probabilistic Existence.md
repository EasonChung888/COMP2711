---
id: "Q-2023F-FINAL-P04-d"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2023 Fall Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_F2023_Final.pdf"
source_page: 7
question_number: "4(d)"
year: 2023
term: "fall"
exam_type: "final"
topics: ["[[Topic - Probability - 概率]]","[[Topic - Logic - 逻辑]]"]
subtopics: ["[[Subtopic - Random Variables - 随机变量]]","[[Subtopic - Inference and Proofs - 推理与证明]]"]
concepts: ["[[Probabilistic Existence - 概率存在性]]","[[Random Variables - 随机变量]]"]
methods: ["[[Expectation Existence Method - 期望存在性方法]]"]
question_types: ["proof"]
difficulty: 4
difficulty_basis: "Construct an independent fair switch experiment, pair opposite bulb states, sum expectations, and apply the lower-witness result to minus Y."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [7]
marks: 4
---
# Q-2023F-FINAL-P04-d

## Source

[[2023 Fall Final]]; printed item 4(d); 4 marks.

![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=7]]

Published answer/rubric pages: ![[knowledge_base/past_paper/COMP2711_F2023_Final.pdf#page=7]]

Unlike the underdetermined expectation questions 4(a)–(b), this existence claim lets the proof choose its own distribution. Independent fair choices are introduced as a proof construction, not attributed to the printed prompt. The supplied conclusion is verified without relying on either quarantined answer.

Finite-average context (editorial): The arbitrary-variable claim in part (c) is quarantined because a finite mean is not stated. Here Y is bounded between 0 and n on the finite switch-configuration space. If every configuration had Y<n/2, the finite uniform average would also be less than n/2, contradicting the computed average. No answer from (c) is assumed.

## Question

Recall the CSE Department with its light bulbs and switches again. Prove that it is possible to have at least half of the light bulbs being turned ON.

(Hint: You might want to use some facts from the previous parts. You are also allowed to use the fact in part (c) even if you could not prove it)

Shared printed context: ![[STEM-2023F-FINAL-P04 - Shared Problem Prompt#Shared printed wording]]

## 中文解析

存在性问题允许我们自行选择一个方便的随机实验，所以这里可以明确让各开关独立公平选择。对任意灯，翻转一个与它连接的固定开关使亮灭配置一一对应；再利用 linearity 得平均亮灯数为 n/2，直接用有限配置的平均值推出上方见证。

## Detailed Solution

Provenance: published official answer, independently checked and expanded below.

### 中文解答

**答案。** 存在某个开关配置使至少 $n/2$ 盏灯亮，即至少 $\lceil n/2\rceil$ 盏。

**推导。**

1. 为证明存在性，自行构造每个开关 independent、以 $1/2$ 概率选择是否翻转的实验，使全部 $2^m$ 个配置等可能；这是证明者的选择，不把独立性冒称为原题额外给定。
2. 每盏灯至少连接一个开关。对灯 $i$ 固定其中一个相连开关，翻转这个开关的选择便把每个配置与另一个配置一一配对，且灯 $i$ 在配对前后亮灭相反，不论初始状态如何。因此 $E(X_i)=1/2$。
3. 亮灯总数 $Y=\sum_iX_i$，由 linearity 得 $E(Y)=n/2$，这里不要求不同灯的指标独立。若每个配置都满足 $Y<n/2$，有限个值的均匀平均也严格小于 $n/2$，与刚算出的期望矛盾。因此某配置有 $Y\ge n/2$；这等价于对有限变量 $K=-Y$ 使用平均值下方见证，但已在本题内完整证明，不依赖隔离的 (a)、(b)、(c) 答案。

### English solution

**Answer.** There exists a switch configuration with at least $n/2$ bulbs ON (equivalently at least $\lceil n/2\rceil$).

**Derivation/proof.** Choose independently for each of the m switches whether to flip it, with probability 1/2. This is a deliberately constructed uniform distribution on all $2^m$ configurations. For bulb i, select one incident switch; toggling just that choice pairs each configuration with another in which bulb i has the opposite final state. Thus $E(X_i)=1/2$ regardless of its initial state. Since $Y=\sum_iX_i$, linearity gives $E(Y)=n/2$, even though the bulb indicators may depend on one another. If every configuration had $Y<n/2$, their finite uniform average would be strictly below $n/2$, contradicting $E(Y)=n/2$. Therefore some configuration has $Y\ge n/2$. Equivalently, apply the finite-average lower-witness argument to $K=-Y$; that argument is proved locally, without importing the quarantined claim (c).

## Common Mistakes

- 不能直接引用 (c) 对任意随机变量的说法；本题的有限配置平均已经足够。 / Use the local finite-average argument.
- 灯泡指标不必独立，但开关实验要明确构造。 / Do not confuse indicator dependence with the chosen switch distribution.

## Connections

- [[Subtopic - Random Variables - 随机变量]]
- [[Subtopic - Inference and Proofs - 推理与证明]]

- [[Probabilistic Existence - 概率存在性]]
- [[Random Variables - 随机变量]]
- [[Expectation Existence Method - 期望存在性方法]]

Construct an independent fair switch experiment, pair opposite bulb states, sum expectations, and apply the lower-witness result to minus Y.
