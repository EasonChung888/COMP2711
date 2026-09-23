---
id: "STEM-2018-FINAL-P10"
note_type: "stem"
schema_version: 1
course: "COMP2711"
source_pdf: "knowledge_base/past_paper/2018-final.pdf"
source_page: 14
---
# STEM-2018-FINAL-P10 - Shared Problem Prompt

## Shared printed wording

Given a $n\times p$ matrix $A$ and a $p\times m$ matrix $B$, the following algorithm computes the $n\times m$ product matrix $C=A\cdot B$.

Matrix-Mult(A,B)

    for i = 1 to n do
        for j = 1 to m do
            C[i,j] = 0
            for k = 1 to p do
                C[i,j] = C[i,j] + A[i,k] · B[k,j]
            end for
        end for
    end for
    return C

![[knowledge_base/past_paper/2018-final.pdf#page=14]]
