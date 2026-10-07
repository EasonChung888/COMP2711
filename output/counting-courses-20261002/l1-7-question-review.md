# L1.7 原题独立核验报告

范围：只读 `knowledge_base/04-Questions` 的既有题目、共享题干与该目录内原图；未修改知识库，未编造、改编或联网获取题目。全部课件讲解完成后开展本次选题。下列 11 道题的 frontmatter 均为 `answer_source: official`、`verification_status: verified`、`syllabus_status: in-scope`。这里独立核验数学正确性；官方来源的状态及页码来自既有知识库，未重新读取 PDF。保留原题和官方答案，独立核验仅作为新增网站的答案核验依据。

## 最终选题清单

| 新课主题 | 原题 ID | 题型及匹配理由 | 数量 |
| --- | --- | --- | --- |
| 二项式定理与系数（课件页 1–11） | Q-2017-MID-P08-a；Q-2017-MID-P08-b | 提取指定项系数、数展开后的不同单项式 | 2 |
| 组合数求和（页 12–16） | Q-2019-FINAL-P05；Q-2024F-MID-P09-a；Q-2024F-MID-P09-b | 三种选择的求和、子集互补配对、按大小分组求和 | 3 |
| Pascal 与路径（页 17–34） | Q-2025F-MID-P05；Q-2020-FINAL1-P03-a；Q-2018-FINAL-P11-a | 重复 Pascal 恒等式、两道无额外限制的格点路径 | 3 |
| Vandermonde 与组合证明（页 35–41） | Q-2023F-MID-P05；Q-2017-MID-P11；Q-2025S-FINAL-P09 | Vandermonde 特例、标记成员的双重计数、hockey-stick 加权应用 | 3 |

二项式展开直接匹配原题实际只有上述 2 道；没有用数论、概率或递归题凑第三道。求和组没有找到直接要求证明奇偶基数子集各占一半的既有原题，选用互补配对及相同的子集按大小求和方法。所有最终 ID 与 L1.6 分配的题目不同；2020 与 2018 的共享图同时承载别的小题，但这里仅使用对应 (a) 原题。

## 二项式定理与系数

### Q-2017-MID-P08-a

- 文件：`knowledge_base/04-Questions/Q-2017-MID-P08-a - Binomial Coefficients.md`。
- 原题核心：Find the coefficient of $x^7y^5$ in $(3x-y)^{12}$。
- 官方答案：$-\binom{12}{7}3^7=-1\,732\,104$。
- 独立核验：每个因子只取 $3x$ 或 $-y$。要求恰取七次 $3x$，其位置有 $\binom{12}{7}=792$ 种，其余五次 $-y$ 贡献负号。系数为 $792\times3^7\times(-1)^5=-1\,732\,104$。项的总次数为 12，满足 $7+5=12$。
- 依赖：二项式定理、组合数、正负系数和指数。
- 出处：`knowledge_base/past_paper/2017-midterm.pdf`，原题及官方答案物理页 10，题号 8(a)。无共享题干、无图。

### Q-2017-MID-P08-b

- 文件：`knowledge_base/04-Questions/Q-2017-MID-P08-b - Binomial Coefficients.md`。
- 原题核心：Find the number of terms in $(5a+8b)^{15}$ 的展开式。
- 官方答案：$16$。
- 独立核验：通项 $\binom{15}{k}5^{15-k}8^k a^{15-k}b^k$，$k=0,1,\ldots,15$。所有系数非零，指数对 $(15-k,k)$ 两两不同，所以没有合并项，恰有 16 项。
- 依赖：二项式展开的 $n+1$ 个不同项。
- 出处：同一 PDF 物理页 10，题号 8(b)。无共享题干、无图。
- 编辑提示：知识库 Supplementary Explanation 的末段提到 “Matching the requested exponent of b”，但本题没有要求特定 $b$ 指数；这是无关的附加句。官方答案 16 与主体推导均正确。使用官方答案即可；不得据此改写知识库。

## 组合数求和

### Q-2019-FINAL-P05

- 文件：`knowledge_base/04-Questions/Q-2019-FINAL-P05 - Binomial Coefficients.md`。
- 原题核心：用组合方法证明 $\sum_{i=0}^n\binom ni\sum_{j=0}^{n-i}\binom{n-i}j=3^n$。
- 官方答案：两边都计数把 $n$ 个不同元素分给三个有名字的集合 $A,B,C$ 的方法，允许空集合。
- 独立核验：直接法让每个元素独立选择三个组，得到 $3^n$。分类法先确定 $|A|=i$ 并选择 A，再从剩余 $n-i$ 元素选 $|B|=j$，余下全部归 C。每种分配唯一落在一个 $(i,j)$ 类；所有类互斥且穷尽。代数交叉核验：内和为 $2^{n-i}$，外和 $\sum_i\binom ni2^{n-i}=(2+1)^n$。$n=0$ 时两边也是 1。
- 依赖：乘法与加法原则、组合选择、二项式求和；不需要概率。
- 出处：`knowledge_base/past_paper/2019-final.pdf`，原题及答案页 7，题号 5。无共享题干、无图。

### Q-2024F-MID-P09-a

- 文件：`knowledge_base/04-Questions/Q-2024F-MID-P09-a - Combinatorial Selection.md`。
- 原题核心：$\{1,\ldots,2n-1\}$ 中元素数至多 $n-1$ 的子集有 $2^{2n-1}/2$ 个；原题提示比较子集及其补集大小。
- 官方答案：所有子集分成互补对，每对恰有一个子集的大小至多 $n-1$，所以答案是总数的一半。
- 独立核验：$n\ge1$ 时全集大小是奇数 $2n-1$。每对 $S,U\setminus S$ 的大小和为 $2n-1$，因此一个大小小于 $n$，另一个大小至少 $n$。补集映射是无固定点的对合，每对恰计一次目标子集，故 $2^{2n-2}$。$n=1$ 时只有空集符合，公式给 1。
- 依赖：子集总数 $2^m$、补集、双射/配对法。
- 出处：`knowledge_base/past_paper/COMP2711_F2024_Midterm.pdf`，题及答案页 14，题号 9(a)。无图、无需额外共享题干。

### Q-2024F-MID-P09-b

- 文件：`knowledge_base/04-Questions/Q-2024F-MID-P09-b - Binomial Coefficients.md`。
- 原题核心：用组合方法证明 $2^{2n-2}=\sum_{r=0}^{n-1}\binom{2n-1}r$；提示允许直接使用 (a)。
- 官方答案：左边是 (a) 得出的大小至多 $n-1$ 的子集总数；右边分别按大小 $r$ 计数后相加。
- 独立核验：以大小划分目标子集，$r=0$ 到 $n-1$ 的每一类有 $\binom{2n-1}r$ 个；互斥、穷尽。也可用对称性 $\binom{2n-1}r=\binom{2n-1}{2n-1-r}$ 将整行总和 $2^{2n-1}$ 成对拆成两个相等半行，得到等式。
- 依赖与共享条件：明确依赖同组的 Q-2024F-MID-P09-a 结果；须保留本题原始 “Hint: You may use part (a), even if you do not manage to prove it.”，并在入站时让 (a) 先于 (b)。
- 出处：同一 PDF 页 14，题号 9(b)。无图。

## Pascal 与路径

### Q-2025F-MID-P05

- 文件：`knowledge_base/04-Questions/Q-2025F-MID-P05 - Binomial Coefficients.md`。
- 原题核心：用组合方法证明 $\binom nk-\binom{n-3}k=\binom{n-1}{k-1}+\binom{n-2}{k-1}+\binom{n-3}{k-1}$。
- 官方答案：取 $n$ 元素集合中的三个标记元素 $a,b,c$，左边计数至少包含一个标记元素的 $k$ 子集。按“含 a”“不含 a 但含 b”“不含 a,b 但含 c”分为三个互斥类，分别对应右侧三项。
- 独立核验：第一类自由选择另外 $k-1$ 个元素，池大小 $n-1$；第二类排除 a 并选入 b，池大小 $n-2$；第三类排除 a,b 并选入 c，池大小 $n-3$。每个含标记元素的子集由首个出现的标记唯一归类。代数交叉检查由 Pascal 恒等式 $\binom mk-\binom{m-1}k=\binom{m-1}{k-1}$ 连续取 $m=n,n-1,n-2$ 后求和得到。组合意义要求 $n\ge3$，在有效 $k$ 范围外的不可能选择采用组合数为零的惯例；$k=0$ 时两侧为零。
- 依赖：Pascal 恒等式的含/不含一个标记元素证明、互斥分类、减法原理。
- 出处：`knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf`，原题及答案页 14，题号 5。无共享题干、无图。

### Q-2020-FINAL1-P03-a

- 文件：`knowledge_base/04-Questions/Q-2020-FINAL1-P03-a - Combinatorial Selection.md`。
- 原题核心：In how many ways you can go to point B?
- 必要共享题干：`knowledge_base/04-Questions/Stems/STEM-2020-FINAL1-P03 - Shared Problem Prompt.md` 的原文 “You are staying on point A and you are allowed to walk either up or to the right. Answer these questions:” 和原图。
- 必须展示的原图：`knowledge_base/04-Questions/Figures/2020-FINAL1-P03-grid.png`。共享题干以短名 `2020-FINAL1-P03-grid.png` 引用；已定位并实际查看该图，A 到 B 为 6 右、5 上的单位边格点路径。C 在 (3,3)，本小题不限制经过 C。
- 官方答案：$\binom{11}5=462$。
- 独立核验：所有路径对应 11 位的 R/U 串，其中 5 位 U，选择位置得 $\binom{11}5$。另按边界 1、内部 $p(x,y)=p(x-1,y)+p(x,y-1)$ 的整数递推独立计算 6×5 网格终点也得 462。
- 依赖：单位右/上路径、组合数、Pascal 递推。
- 出处：`knowledge_base/past_paper/2020-final-part-1.pdf`，题及答案页 2，题号 3(a)。L1.6 使用另一个 3(b) 小题，这里没有重复 ID。

### Q-2018-FINAL-P11-a

- 文件：`knowledge_base/04-Questions/Q-2018-FINAL-P11-a - Combinatorial Selection.md`。
- 原题核心：a) All lines in the rectangle are possible?
- 必要共享题干：`knowledge_base/04-Questions/Stems/STEM-2018-FINAL-P11 - Shared Problem Prompt.md` 的 Shared printed wording，包含 A 到 B 只能沿线向上或向右，以及其完整示例移动序列。
- 必须展示的原图：`knowledge_base/04-Questions/Figures/2018-FINAL-P11-grid.png`。已实际查看：A 到 B 为 5 右、3 上。图中 CD 边画为虚线，但本小题明确 All lines are possible，故虚线亦允许；只有 (b) 才删去该边。
- 官方答案：$C(8,5)=56$。
- 独立核验：选择八次移动中五次 R 或三次 U 的位置，得 $\binom85=56$。按 Pascal 网格递推 5×3 终点也得 56。
- 依赖：单位路径与组合数的对应，边界/内部相加。
- 出处：`knowledge_base/past_paper/2018-final.pdf`，题及答案页 16，题号 11(a)。L1.6 使用独立的 11(b)，这里没有重复 ID。

## Vandermonde 与组合证明

### Q-2023F-MID-P05

- 文件：`knowledge_base/04-Questions/Q-2023F-MID-P05 - Binomial Coefficients.md`。
- 原题核心：用组合论证证明 $\sum_{i=0}^n\binom ni^2=\binom{2n}n$。
- 官方答案：将 2n 个元素分为两个各有 n 元素的组，按所选 n 元素中来自第一组的数量 i 分类；第二组必须选 n−i 个。
- 独立核验：固定两个不交集合 A、B，大小均 n。直接从并集选 n 个有 $\binom{2n}n$ 法。按 $i=|S\cap A|$ 分类，有 $\binom ni\binom n{n-i}=\binom ni^2$ 法；互斥穷尽，得到 Vandermonde 的 $m=n,r=n$ 特例。$n=0$ 时成立。
- 依赖：Vandermonde 恒等式、组合数对称性、分类双重计数。
- 出处：`knowledge_base/past_paper/COMP2711_F2023_Midterm.pdf`，题及答案页 12，题号 5。无共享题干、无图。

### Q-2017-MID-P11

- 文件：`knowledge_base/04-Questions/Q-2017-MID-P11 - Binomial Coefficients.md`。
- 原题核心：组合证明 $\binom nk\binom k1=\binom n1\binom{n-1}{k-1}$。
- 官方答案：两边都计数从 n 人中组建 k 人俱乐部并选一个领袖的方案；一边先选俱乐部后选领袖，另一边先选领袖后选另外 k−1 人。
- 独立核验：对象是 $(S,s)$，$|S|=k,s\in S$。$1\le k\le n$ 时两种构造互为唯一对应，共 $k\binom nk=n\binom{n-1}{k-1}$；阶乘展开亦给相同 $n!/[(k-1)!(n-k)!]$。
- 依赖：标记成员、乘法原理、同一对象的两种计数；不需对 $n/k$ 给独立组合意义。
- 出处：`knowledge_base/past_paper/2017-midterm.pdf`，题及答案页 13，题号 11。无共享题干、无图。
- 去重说明：未使用 L1.6 已分配的 2016-MID-P03-a/b；数学结构相似，但本题为另一份试卷的完整原题。

### Q-2025S-FINAL-P09

- 文件：`knowledge_base/04-Questions/Q-2025S-FINAL-P09 - Binomial Coefficients.md`。
- 原题核心：$\{1,2,\ldots,2022\}$ 的所有 1000 元子集各取最小元素，求这些最小元素的总和；原题给出可直接使用的 Hockey Stick Identity $\binom{n+1}{r+1}=\sum_{j=r}^n\binom jr$。
- 官方答案：$\binom{2023}{1001}$，将 $m\binom{2022-m}{999}$ 的加权和按列拆解，两次使用 hockey-stick。
- 独立核验：最小值 $m$ 的范围为 $1\le m\le1023$，其余 999 元从大于 m 的 $2022-m$ 元中选。目标和 $\sum_{m=1}^{1023}m\binom{2022-m}{999}$。用 $m=\sum_{t=1}^m1$ 交换有限求和，内和 $\sum_{m=t}^{1023}\binom{2022-m}{999}=\binom{2023-t}{1000}$；外和上标从 1000 到 2022，第二次应用 hockey-stick 得 $\binom{2023}{1001}$。
- 另一独立组合核验：每个 1000 元子集 $S$ 搭配一个 $t\in\{1,\ldots,\min S\}$；映射为 $\{t\}\cup\{s+1:s\in S\}$，这是 $\{1,\ldots,2023\}$ 的 1001 元子集，且逆映射取最小元素 t、将余下元素减 1，构成双射。因此直接得 $\binom{2023}{1001}$。
- 依赖：按最小值分类、加法/乘法原理、Hockey Stick Identity；双重求和只是有限和，原题自身已经给出恒等式提示。应保留原始 Hint 与公式。
- 出处：`knowledge_base/past_paper/COMP2711_S2025_Final.pdf`，题及答案页 12，题号 9。无图、无额外共享题干。

## 独立交叉检查记录

本次除上述完整推导外，还执行了 Python 整数核验：

- 精确系数 $-\binom{12}7 3^7=-1732104$。
- 对 $0\le n\le17$ 检查三组分配求和与 Vandermonde 特例；对正 n 检查半行和。对有效小 n,k 检查标记成员及三次 Pascal 恒等式。
- 对 $1\le N\le15$、$1\le K\le N$ 检查一般加权最小值恒等式 $\sum_{m=1}^{N-K+1}m\binom{N-m}{K-1}=\binom{N+1}{K+1}$。
- 按格点递推独立计算 5×3 和 6×5 无限制路径分别为 56、462。为核验共享图也计算删 CD 边得 38，以及避 C 点得 262；后两值仅供审计，本次 L1.7 不选对应 (b) 题。

整数检查全部通过；其作用是排查实现/抄录失误，证明依据仍是上文的完整推导。未改动源题、答案、图或网站。

## 读取时 SHA-256 快照


| 文件 | SHA-256 |
| --- | --- |
| `knowledge_base/04-Questions/Q-2017-MID-P08-a - Binomial Coefficients.md` | `4da8698ff62efc41ee65c9f49fe8f7ff74574f51b141e4e5f2e89d6d7fd95d05` |
| `knowledge_base/04-Questions/Q-2017-MID-P08-b - Binomial Coefficients.md` | `082d7f02825db997ecebcd6f11aa96d07ddc3ec927542b80ec32c7d1460949df` |
| `knowledge_base/04-Questions/Q-2019-FINAL-P05 - Binomial Coefficients.md` | `af68e863b7cb5fdb0cbb474bd6479160e2997f00266523039874a67032dc24ca` |
| `knowledge_base/04-Questions/Q-2024F-MID-P09-a - Combinatorial Selection.md` | `48182de6573e5bc43ac1730dbf9e3f60ca1fc3eb0e46ca287504cc3f6edd3062` |
| `knowledge_base/04-Questions/Q-2024F-MID-P09-b - Binomial Coefficients.md` | `f008939d5579c69054967a915f034363e09513d9f74e08021b8b76d08d570c6c` |
| `knowledge_base/04-Questions/Q-2025F-MID-P05 - Binomial Coefficients.md` | `78474944fd68a5b51246756239b5063e8ac5f99615e6cecf6c02811d05431f57` |
| `knowledge_base/04-Questions/Q-2020-FINAL1-P03-a - Combinatorial Selection.md` | `8fe5f93993b09d613da9d5a406f9e5976a0addb0dadef374004d13a9e8f8df02` |
| `knowledge_base/04-Questions/Q-2018-FINAL-P11-a - Combinatorial Selection.md` | `c2e805d42c4d23c7e89aefc594721b4138a99c1bc8d6e7b0ec226af398733037` |
| `knowledge_base/04-Questions/Q-2023F-MID-P05 - Binomial Coefficients.md` | `c63bbc6a28f16e33d9f08b294ab5d40100753a95b1274629c714e3723ce2b447` |
| `knowledge_base/04-Questions/Q-2017-MID-P11 - Binomial Coefficients.md` | `6d00fc6ceb6eafaa37317a3ff3ce0a78c5c759b6d8bf8175d9f73a7eae55c7fe` |
| `knowledge_base/04-Questions/Q-2025S-FINAL-P09 - Binomial Coefficients.md` | `a0862d0216173b0055c0973a980e41e3ee3295e509c87e0dd014f99d6342ddb4` |
| `knowledge_base/04-Questions/Stems/STEM-2020-FINAL1-P03 - Shared Problem Prompt.md` | `9e4862e72363bcd184627cf9887804a1ca67f6f8939975deb4986846152974ce` |
| `knowledge_base/04-Questions/Stems/STEM-2018-FINAL-P11 - Shared Problem Prompt.md` | `3732e6dda319ac67eb8eeaf9bbee1c0cd4aa1859b4b8392c37cd032e91c2cb72` |
| `knowledge_base/04-Questions/Figures/2020-FINAL1-P03-grid.png` | `e6271f6eb7101ef84ba82ee0712685eb574a262e7b9a471b904cc3d1bc3751dc` |
| `knowledge_base/04-Questions/Figures/2018-FINAL-P11-grid.png` | `63c6a3beefe7d94e6093319345a7a6c260a0b875bde248cd107554385b7f9fea` |
