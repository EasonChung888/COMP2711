---
id: "STEM-2019-FINAL-BONUS"
note_type: "stem"
schema_version: 1
course: "COMP2711"
source_pdf: "knowledge_base/past_paper/2019-final.pdf"
source_page: 17
---
# STEM-2019-FINAL-BONUS - Shared Problem Prompt

## Shared printed wording

Consider the following recurrence: $f_1=1,f_n=2f_{n-1}+n$ for $n\ge2$. The following is a purported induction proof that $f_n=O(n)$.

Proof. Base case: When $n=1$, $f(n)=O(n)$ because $f(1)=O(1)$.

Induction step: Assuming $f_{n-1}=O(n-1)$, we will prove $f_n=O(n)$:

$$\begin{aligned}f_n&=2f_{n-1}+n\\&=2\cdot O(n-1)+n&&\text{(induction hypothesis)}\\&=O(3n-2)\\&=O(n)&&\text{(dropping lower order term and constant coefficient)}\end{aligned}$$

as desired.

![[knowledge_base/past_paper/2019-final.pdf#page=17]]
