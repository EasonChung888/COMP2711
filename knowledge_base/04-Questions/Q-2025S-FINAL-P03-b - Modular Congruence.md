---
id: "Q-2025S-FINAL-P03-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2025 Spring Final]]"
source_pdf: "knowledge_base/past_paper/COMP2711_S2025_Final.pdf"
source_page: 4
question_number: "3(b)"
year: 2025
term: "spring"
exam_type: "final"
topics: ["[[Topic - Number Theory - 数论]]","[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - GCDs and Congruences - 最大公因数与同余]]","[[Subtopic - Basic Counting - 基本计数]]"]
concepts: ["[[Modular Congruence - 同余]]","[[Counting Principles - 计数原理]]"]
methods: ["[[Modular Arithmetic Method - 模运算方法]]","[[Counting Method - 计数方法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "Count independent allowed residue triples and use CRT uniqueness within the product interval."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
solution_page: [4]
marks: 6
related_questions: ["[[Q-2025S-FINAL-P03-a - Modular Congruence]]"]
---
# Q-2025S-FINAL-P03-b

## Source

[[2025 Spring Final]]; printed item 3(b); 6 marks.

![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=4]]

Published official answer pages: ![[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=4]]

Prerequisite context (editorial): [[Q-2025S-FINAL-P03-a - Modular Congruence]]. Part (a) establishes the 7-safe residues {3,4}.

## Question

![[STEM-2025S-FINAL-P03 - Shared Problem Prompt#Shared printed wording]]

(b) [6 pts] Find the number of positive integers less than 1001 ($1001=7\cdot11\cdot13$) that are simultaneously 7-safe, 11-safe, and 13-safe. Please justify your answer.

## Official Answer

Source: [[knowledge_base/past_paper/COMP2711_S2025_Final.pdf#page=4|physical PDF page 4]].

(b) Consider the mapping from $x$ to the 3-tuple $(a=x\bmod7,b=x\bmod11,c=x\bmod13)$. For any $x$ that is 7-safe, 11-safe, and 13-safe, we must have $a\in\{3,4\}$, $b\in\{3,4,5,6,7,8\}$, $c\in\{3,4,5,6,7,8,9,10\}$. By the Chinese Remainder Theorem, for each such triple $(a,b,c)$, there is also a unique positive integer $x<1001$ such that $a=x\bmod7,b=x\bmod11,c=x\bmod13$. So there is a one-to-one correspondence between such triples and the set of positive integers less 1001 that are 7-safe, 11-safe, and 13-safe. Thus, the answer is
$$2\cdot6\cdot8=96.$$

## Supplementary Explanation

**Answer.** $96$.

**Derivation/proof.** The allowed residues are $\{3,4\}$ modulo seven, $\{3,4,5,6,7,8\}$ modulo eleven, and $\{3,4,5,6,7,8,9,10\}$ modulo thirteen. These sets have two, six and eight members. The moduli are pairwise coprime, so CRT assigns each triple a unique class modulo $1001$ and distinct triples cannot overlap. Zero satisfies none of the allowed residue conditions; hence each class has exactly one representative with $1\le x<1001$. The product rule yields $2\cdot6\cdot8=96$.

## Connections

- [[Topic - Number Theory - 数论]]
- [[Topic - Counting - 计数]]
- [[Subtopic - GCDs and Congruences - 最大公因数与同余]]
- [[Subtopic - Basic Counting - 基本计数]]
- [[Modular Congruence - 同余]]
- [[Counting Principles - 计数原理]]
- [[Modular Arithmetic Method - 模运算方法]]
- [[Counting Method - 计数方法]]

Count independent allowed residue triples and use CRT uniqueness within the product interval.

- Prerequisite / related: [[Q-2025S-FINAL-P03-a - Modular Congruence]]: 把模七的安全余数与另两个模数的安全区间组合计数。 Part (a) establishes the 7-safe residues {3,4}.
