---
id: "STEM-2017-FINAL-P04"
note_type: "stem"
schema_version: 1
course: "COMP2711"
source_pdf: "knowledge_base/past_paper/2017-final.pdf"
source_page: 6
---
# STEM-2017-FINAL-P04 - Shared Problem Prompt

## Shared printed wording

Recall that in RSA, we need to choose two primes $p$ and $q$, and the public key is $(n,e)$ where $n=pq$. Let $T=(p-1)(q-1)$. The private key is $d$, where $ed\equiv1\pmod T$. The encryption of $x$ is $x^e\bmod n$. This means that $d$ must be an integer in $\mathbb Z_T$ that is relatively prime with $T$. We can find $d$ using the following algorithm:

1. Randomly pick $d\in\mathbb Z_T$.
2. If $d$ and $T$ are relatively prime, then return $d$. If they are not, then pick a new $d$ and loop from step 1.

Assume that we will never pick the same $d$ twice.

![[knowledge_base/past_paper/2017-final.pdf#page=6]]
