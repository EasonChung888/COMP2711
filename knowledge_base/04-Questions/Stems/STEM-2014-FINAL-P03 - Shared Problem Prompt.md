---
id: "STEM-2014-FINAL-P03"
note_type: "stem"
schema_version: 1
course: "COMP2711"
source_pdf: "knowledge_base/past_paper/2014-final.pdf"
source_page: 5
---
# STEM-2014-FINAL-P03 - Shared Problem Prompt

## Shared printed wording

Consider the following simplified version of the RSA algorithm for public cryptography:

- (i) Bob's public key is a pair $(n,e)$, where $n$ is a prime number and $e$ is a positive integer that is smaller than $n$ and is relatively prime with $n-1$.
- (ii) Bob's private key is $d=e^{-1}\bmod(n-1)$.
- (iii) Alice encrypts a message $m$ ($0<m<n-1$) by calculating $c=m^e\bmod n$, and sends the ciphertext $c$ to Bob.
- (iv) Bob decrypts the ciphertext $c$ by calculating $c^d\bmod n$.

Suppose $n=251$ and $e=137$.

![[knowledge_base/past_paper/2014-final.pdf#page=5]]
