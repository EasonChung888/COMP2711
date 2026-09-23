---
id: "Q-2025S-MID-P05"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Midterm]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf"
source_page: 7
question_number: "5"
year: 2025
term: "spring"
exam_type: "midterm"
topics: ["[[Topic - Induction and Recursion - 归纳与递归]]"]
subtopics: ["[[Subtopic - Recursion - 递归]]"]
concepts: ["[[Recursive Structures - 递归结构]]"]
methods: ["[[Structural Induction Method - 结构归纳法]]"]
question_types: ["proof"]
difficulty: 4
difficulty_basis: "Verify both recursive basis constructors and compare Fibonacci bounds for all balanced-height cases."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "derived"
verification_status: "verified"
marks: 12
---
# Q-2025S-MID-P05

## Source

[[2025 Spring Midterm]]; printed item 5; 12 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=7]]

Printed answer pages contain the defect below; correction/completion is independently derived: ![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=7]] ![[knowledge_base/past_paper/COMP2711_S2025_Midterm.pdf#page=8]]

Source defect: Pages 7–8 check only the single-node basis and omit the separate two-node HBT constructor. Page 8 also invokes f(h(T)-1) when h(T)=1, although f(0) is not defined in the prompt. The derived completion checks both bases and handles equal zero heights using f(1)=f(2)=1.

## Question

A height-balanced tree (HBT) is defined recursively as follows.

– A single node $r$ is an HBT with height 0 and size 1.
– Two nodes $u,v$ form an HBT, where $u$ is the root, and $v$ is either $u$'s left or right child. This HBT has height 1 and size 2.
– Let $T_1$ and $T_2$ be two disjoint HBTs with roots $r_1$ and $r_2$, heights $h(T_1)$ and $h(T_2)$, sizes $n(T_1)$ and $n(T_2)$, respectively, such that $|h(T_1)-h(T_2)|\le1$. Create a new node $r$ and make $r_1$ and $r_2$ the left and right child of $r$, respectively. The resulting structure is also an HBT with height $\max(h(T_1),h(T_2))+1$ and size $n(T_1)+n(T_2)+1$.

The figure below shows an HBT $T$ with height $h(T)=4$ and size $n(T)=13$. The numbers are the height differences between the left and right subtrees.

![[knowledge_base/06-Audit/figures/2025S-MID-P05-hbt.png]]

Show that $n(T)\ge f(h(T)+2)-1$ for any HBT $T$, where $f(k)$ is the $k$-th Fibonacci number. Recall that $f(1)=f(2)=1$, and $f(k)=f(k-1)+f(k-2)$ for $k\ge3$.

## 中文解析

结构归纳必须分别检查单节点、双节点两类基础构造，再处理合并构造。

## Detailed Solution

Provenance: independently derived correction/completion; the printed defect is retained in Source.

### 中文解答

**答案。** 所有按定义生成的 HBT 都满足 $n(T)\ge f(h(T)+2)-1$。

**推导。** 基础构造一：$h=0,n=1$，$f(2)-1=0\le1$。基础构造二：$h=1,n=2$，$f(3)-1=1\le2$，左右单孩子两种形式都满足。

设两棵子树已满足归纳假设，令 $H=\max(h_1,h_2)$。若高度不同，可交换左右令 $h_1=H,h_2=H-1$，其中 $H\ge1$。新树高度 $H+1$，且 $n=n_1+n_2+1\ge f(H+2)+f(H+1)-1=f(H+3)-1$。若高度相同为 $H\ge0$，则 $n\ge2f(H+2)-1$。由 Fibonacci 初值和非负递推可知 $f(H+2)\ge f(H+1)$（$H=0$ 时两者都为一），故 $2f(H+2)-1\ge f(H+2)+f(H+1)-1=f(H+3)-1$。两种合并情形都给出要求的下界，结构归纳完成；没有调用未定义的 $f(0)$。

## Common Mistakes

- 漏掉双节点基础构造会使结构归纳没有覆盖整个递归定义。
- 当子树同高且为零时不能引用涉及 $f(0)$ 的式子，题目只定义从一开始的 Fibonacci 数。

## Connections

- [[Topic - Induction and Recursion - 归纳与递归]]
- [[Subtopic - Recursion - 递归]]
- [[Recursive Structures - 递归结构]]
- [[Structural Induction Method - 结构归纳法]]

Verify both recursive basis constructors and compare Fibonacci bounds for all balanced-height cases.
