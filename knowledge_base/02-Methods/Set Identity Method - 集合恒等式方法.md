---
id: "METHOD-SET-IDENTITY"
note_type: "method"
schema_version: 1
course: "COMP2711"
parent_subtopics: ["[[Subtopic - Sets and Functions - 集合与函数]]"]
prerequisites: ["[[Set Operations - 集合运算]]"]
---
# Set Identity Method - 集合恒等式方法

## Procedure｜步骤

Fix the universe and translate membership of an arbitrary element into logic. Apply De Morgan, distributivity, absorption, or complement laws, then translate back into set operations. 先固定全集，再逐个元素解释交、并、差与补集，避免把集合符号仅当普通代数符号。

## Example｜例子

$B\cap(A\cup\overline B)=(B\cap A)\cup(B\cap\overline B)=A\cap B$. This simplification often supplies the numerator of a conditional probability. 条件事件先与目标事件相交，化简完成后再代入数值，不能直接把条件中的并集当作数值相加。

## Cardinality bounds｜基数界

For a finite universe, $|A\cap B\cap C|=|U|-|\overline A\cup\overline B\cup\overline C|$ and the union is at most the sum of the three complement sizes. 集合恒等式先给精确关系，随后才使用并集上界；重叠时上界不必等于真实值。

## Verification｜核验

Check the empty set, the full universe, equal input sets, and disjoint input sets. For intervals, test each endpoint separately. Difference is directional: $A-B$ need not equal $B-A$.

## Related Questions｜相关题目

Verified questions linked to this method. 已核验且明确关联本方法的题目。

![[knowledge_base/05-Views/Methods.base#METHOD-SET-IDENTITY - Questions]]
