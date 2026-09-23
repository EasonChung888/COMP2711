---
id: "CON-ALGORITHM-CORRECTNESS"
note_type: "concept"
schema_version: 1
course: "COMP2711"
parent_subtopics: ["[[Subtopic - Algorithms - 算法]]"]
prerequisites: []
---
# Algorithm Correctness - 算法正确性

## Definition｜定义

An algorithm is correct when every allowed input terminates with an output satisfying its specification. A trace determines the result for one concrete input; a loop invariant proves a property throughout every permitted execution. 一次手算只能验证一个输入，不能替代对所有输入的正确性证明。

## Example｜例子

In Euclid's algorithm, $\gcd(x,y)$ is unchanged by $(x,y)\leftarrow(y,x\bmod y)$. The positive second coordinate strictly decreases until it becomes zero; then the first coordinate is the required gcd. 不变量说明答案没有改变，严格下降说明算法终止，终止条件把不变量转成输出结论。

For a sieve, distinguish pending numbers, retained numbers, and deleted numbers. Proving that no prime is deleted shows one inclusion; proving that every composite is eventually deleted shows the other. 集合输出的正确性往往需要两个包含方向，单凭“不删错”还不能保证“不漏删”。

## Boundary conditions｜边界条件

Initialization and empty-container guards are part of the algorithm. If a printed pseudocode omits them, state any convention explicitly instead of silently executing an undefined minimum operation. 源程序漏写初始化或空集分支时，应在来源核验中说明采用的解释。

## Connections

- [[Algorithm Trace and Invariant Method - 算法跟踪与不变量方法]]
- [[Asymptotic Complexity - 渐近复杂度]]

## Related Questions｜相关题目

Verified questions linked to this concept. 已核验且明确关联本知识点的题目。

![[knowledge_base/05-Views/Topic Coverage.base#CON-ALGORITHM-CORRECTNESS - Questions]]
