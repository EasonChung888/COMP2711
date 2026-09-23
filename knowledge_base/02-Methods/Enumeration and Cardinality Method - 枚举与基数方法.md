---
id: "METH-ENUMERATION"
note_type: "method"
schema_version: 1
course: "COMP2711"
---
# Enumeration and Cardinality Method - 枚举与基数方法

## Applicability｜适用条件

Use explicit lists or bijections to establish countability, and closure of countable unions to establish that a remainder is uncountable. 用于构造集合差的例子，以及证明某个无限搜索最终会覆盖真正参数。

## Procedure｜步骤

1. State the set and the exact order of enumeration. 对正整数对，按和相同的有限对角线依次列举。
2. Prove coverage: every target appears at a finite index. 仅说“逐一尝试”不足以排除永远卡在无限子集。
3. For a search evolving in time, evaluate the candidate at the current time, not its starting position. 若位置为 $x+yt$，第 $t$ 次试验必须用 $x+yt$。
4. For a set difference example, separately verify both input sets and the difference have the requested cardinalities. 不能只验证差集而忘记输入集必须不可数。

## Failure Modes｜常见失误

Lexicographic order on positive integer pairs never leaves the first row. Removing infinitely many elements does not necessarily make a set smaller in cardinality. 字典序不是这里可用的枚举；无限集合的基数也不能用普通减法处理。

## Related Questions｜相关题目

Verified questions linked to this method. 已核验且明确关联本方法的题目。

![[knowledge_base/05-Views/Methods.base#METH-ENUMERATION - Questions]]
