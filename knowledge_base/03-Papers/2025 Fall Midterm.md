---
id: "P-2025-FALL-MID"
note_type: "paper"
schema_version: 1
course: "COMP2711"
source_pdf: "knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf"
source_aliases: []
year: 2025
term: "fall"
exam_type: "midterm"
sha256: "3788b124362e1897cf11b78ff30651c01d24394d9c74afb01cc98f3c34b8a38e"
page_count: 26
text_layer_status: "partial"
identified_count: 44
admitted_count: 33
excluded_count: 0
unresolved_count: 11
duplicate_of: null
verification_status: "verified"
---
# 2025 Fall Midterm

![[knowledge_base/past_paper/COMP2711_F2025_Midterm.pdf]]

## Question Index

- [[Q-2025F-MID-P01-a - Logical Equivalence]]
- [[Q-2025F-MID-P01-b - Logical Equivalence]]
- [[Q-2025F-MID-P01-c - Proof Strategy]]
- [[Q-2025F-MID-P02-a-i - Predicate Logic]]
- [[Q-2025F-MID-P02-a-ii - Predicate Logic]]
- [[Q-2025F-MID-P02-b - Predicate Logic]]
- [[Q-2025F-MID-P02-c-premise1 - Predicate Logic]]
- [[Q-2025F-MID-P02-c-premise2 - Predicate Logic]]
- [[Q-2025F-MID-P02-c-proof - Proof Strategy]]
- [[Q-2025F-MID-P03-a - Set Operations]]
- [[Q-2025F-MID-P03-c-i - Countability]]
- [[Q-2025F-MID-P03-c-ii - Countability]]
- [[Q-2025F-MID-P03-c-iii - Countability]]
- [[Q-2025F-MID-P03-c-iv - Countability]]
- [[Q-2025F-MID-P03-c-v - Countability]]
- [[Q-2025F-MID-P03-c-vi - Countability]]
- [[Q-2025F-MID-P03-c-vii - Countability]]
- [[Q-2025F-MID-P04-a-i - Combinatorial Selection]]
- [[Q-2025F-MID-P04-a-ii - Combinatorial Selection]]
- [[Q-2025F-MID-P04-a-iii - Combinatorial Selection]]
- [[Q-2025F-MID-P04-a-iv - Combinatorial Selection]]
- [[Q-2025F-MID-P04-c-i - Combinatorial Selection]]
- [[Q-2025F-MID-P04-c-ii - Combinatorial Selection]]
- [[Q-2025F-MID-P04-d - Counting Principles]]
- [[Q-2025F-MID-P05 - Binomial Coefficients]]
- [[Q-2025F-MID-P06 - Inclusion-Exclusion]]
- [[knowledge_base/04-Questions/Q-2025F-MID-P07 - Counting Principles|Q-2025F-MID-P07 - Counting Principles]]
- [[Q-2025F-MID-P10-a-i-E - Random Variables]]
- [[Q-2025F-MID-P10-a-i-var - Random Variables]]
- [[Q-2025F-MID-P10-a-ii-E - Random Variables]]
- [[Q-2025F-MID-P10-a-ii-var - Random Variables]]
- [[Q-2025F-MID-P10-a-iii-E - Random Variables]]
- [[Q-2025F-MID-P10-a-iii-var - Random Variables]]

## Audit

44 identified = 33 admitted + 0 excluded + 11 unresolved. All source pages, including answer and draft pages, were visually inspected.

- Q-2025F-MID-P03-b; page 10; needs-review: The rendered page 10 has a complement bar on C only in the conclusion; the text layer drops it. The claim is false: in universe {0}, choose A=B=C={0}; both premises hold, but A∪B={0} is not a subset of C̄=∅. Page 11 proves A∪B⊆C instead, silently removing the bar. No proof of the literal printed claim is possible, so no Question note is admitted.
- Q-2025F-MID-P04-b; page 12; needs-review: Page 13 prints 3×4×5×4×3×2=1440, counting exactly one crossing of each stage outbound and inbound. The printed condition forbids reusing roads but does not forbid revisiting towns or detours. For example A–B–C–B–C–D–C–B–A can use 2 distinct A–B roads, all 4 distinct B–C roads, and 2 distinct C–D roads without any road reuse, but is not included in 1440. Requiring simple outbound/inbound paths yields 1440; allowing all edge-nonrepeating trips permits additional valid tours. The missing route restriction is material, so this is audit only. Original graph crop: knowledge_base/06-Audit/figures/2025F-MID-P04-b-roads.png.
- Q-2025F-MID-P08-a; page 18; needs-review: Five marginal capture probabilities 1/2 do not specify independence. The page-19 answer 1/32 follows from independent captures. If all five capture indicators equal one shared fair bit, every marginal remains 1/2 but P(k=0)=1/2. Thus the requested probability is not determined.
- Q-2025F-MID-P08-b; page 18; needs-review: The independent-capture model used on page 19 gives 5/32. If all five indicators equal one fair bit, each capture marginal is still 1/2 but P(k=1)=0. No independence condition is printed, so the value is underdetermined.
- Q-2025F-MID-P08-c; page 18; needs-review: The page-19 independent value is 10/32. With all five indicators equal one fair bit, every capture marginal is 1/2 but P(k=2)=0. Missing joint assumptions prevent a verified numeric answer.
- Q-2025F-MID-P08-d; page 18; needs-review: Page 19 gives hungry probability 1/2 under independent captures. A different exchangeable joint model takes total potential captures K=0 with probability 3/8 and K=4 with probability 5/8, choosing the four successes uniformly. Each fly has marginal success (5/8)(4/5)=1/2, but after the stopping rule the spider is hungry with probability 3/8. Thus the missing dependence assumption materially changes this item too.
- Q-2025F-MID-P08-e; page 18; needs-review: Page 19 gives 3/4 by assuming independence plus the part-(d) stopping policy. In a model where all six potential capture indicators equal one shared fair bit, every marginal capture probability is 1/2. On bit 1 the spider has stopped after catching three; on bit 0 every fly escapes. The sixth fly therefore survives with probability 1, rather than 3/4. If “encounters” conditions on still hunting, the conditioning is another unstated distinction; no Question note is admitted.
- Q-2025F-MID-P09-a; page 20; needs-review: Page 20 obtains 1/4 by independent Bernoulli tosses, but the prompt specifies only each coin's head probability, not independence between tosses. If the three tosses of the fair second coin share one fair bit, each is marginally fair but exactly two heads is impossible, so P(D|B)=0 instead of 1/4. The observation can still have positive probability under the other branch using independent biased tosses.
- Q-2025F-MID-P09-b; page 20; needs-review: The printed 9/17 uses independent tosses with likelihoods 1/4 and 2/9. Keep the first coin selection uniform and first tosses independent of later trials, let the three fair-coin tosses share one fair bit, and keep biased-coin tosses independent. Then P(D|B)=0, P(D|not B)=2/9, P(D)=1/9>0, so P(B|D)=0. Both models have the printed coin marginals; independence is not supplied.
- Q-2025F-MID-P10-b; page 22; needs-review: Scenario 2 specifies fair marginals but no independence. Page 22 adds “we can assume the two die rolls are iid” and claims scenario 1 is higher. Independent dice give E(UV)=49/4<91/6, whereas perfectly coupled fair dice V=U give E(UV)=91/6, equal to scenario 1. Part (a)'s independence applies to its named X1,...,X100, not this newly introduced scenario. A non-strict universal inequality is derivable, but the requested strict comparison is underdetermined; no extra independence assumption is imported.
- Q-2025F-MID-P10-c; page 23; needs-review: Page 23 contains only this orphaned answer fragment labeled (c); every page 1–26 was inspected and no corresponding problem statement or marks are printed. It suggests a first-ace expectation of 10.6, but the random shuffle experiment, deck and requested quantity are absent as a prompt. Do not invent a question from the answer. Kept as an answer-only unresolved atomic record, with no Question or Stem.

See [[knowledge_base/06-Audit/Syllabus Audit|Syllabus Audit]] and [[knowledge_base/06-Audit/Extraction and Verification Audit|Extraction and Verification Audit]] for source-scoped decisions and corrections.

## Native Reconciliation｜原生核对视图

The printed Question Index above remains the reading order. 上方题目索引保留原卷顺序；下表显示本卷核对记录。

![[knowledge_base/05-Views/Paper Reconciliation.base#P-2025-FALL-MID - Reconciliation]]
