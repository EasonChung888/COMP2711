---
id: "CON-OSCILLATING-BOUNDS"
note_type: "concept"
schema_version: 1
course: "COMP2711"
parent_subtopics: ["[[Subtopic - Algorithms - 算法]]"]
prerequisites: ["[[Asymptotic Complexity - 渐近复杂度]]"]
---
# Oscillating Asymptotic Bounds - 振荡函数渐近界

## Constant-factor bounds｜常数倍界

For possibly signed functions, a magnitude convention compares $|f(x)|$ and $|g(x)|$ beyond a threshold. State or check the source convention rather than assuming every oscillating function is eventually nonnegative. 对有正负振荡的函数要明确比较绝对值；无论如何，足够大的零点常能否定界。

## Subsequence counterexamples｜子序列反例

If arbitrarily large points have $g=0$ but $|f|>0$, no constant $C$ can give $|f|\le C|g|$ eventually. Reverse the roles to refute a positive lower bound. For $f=\sin x,g=\cos^2x$, the points $\pi/2+2k\pi$ defeat the upper bound and $k\pi$ defeat the lower bound. 不要只根据两函数都“有界”就断言互为紧界。

## Positive envelopes｜正下界包络

A denominator bounded away from zero permits upper bounds even with zeros in the numerator: $|2\sin x|\le2\le4(|\cos x|+1/2)$. But infinitely many numerator zeros still prevent an $\Omega$ relation. 上下界需要分别证明，振荡本身既不保证也不排除某一个方向。

Use [[Asymptotic Bound Method - 渐近界方法]].

## Related Questions｜相关题目

Verified questions linked to this concept. 已核验且明确关联本知识点的题目。

![[knowledge_base/05-Views/Topic Coverage.base#CON-OSCILLATING-BOUNDS - Questions]]
