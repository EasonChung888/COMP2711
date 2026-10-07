---
id: "Q-2016-MID-P02-b"
note_type: "question"
schema_version: 1
course: "COMP2711"
source_paper: "[[2016 Midterm]]"
source_pdf: "knowledge_base/past_paper/2016-midterm.pdf"
source_page: 4
solution_page: [4]
question_number: "2(b)"
year: 2016
term: "fall"
exam_type: "midterm"
marks: 6
topics: ["[[Topic - Counting - 计数]]"]
subtopics: ["[[Subtopic - Permutations and Combinations - 排列与组合]]"]
concepts: ["[[Combinatorial Selection - 组合选择]]"]
methods: ["[[Combinatorial Case Analysis - 组合分类法]]"]
question_types: ["calculation"]
difficulty: 3
difficulty_basis: "The dual-role postgraduate must be placed in one mutually exclusive role case while avoiding selection of that person twice."
syllabus_version: "COMP2711-2026-27-fall"
syllabus_status: "in-scope"
answer_source: "official"
verification_status: "verified"
related_questions: []
---
# Q-2016-MID-P02-b

## Source

![[knowledge_base/past_paper/2016-midterm.pdf#page=4]]

Official answer or marking material: ![[knowledge_base/past_paper/2016-midterm.pdf#page=4]]

## Question

(b) Now, one postgraduate student has a special treatment. This postgraduate student could also be accepted to be a teaching assistant (i.e., this particular person has two roles, a postgraduate student and a teaching assistants). The tennis club can invite this guy as a role of either a teaching assistant or a postgraduate student (but not both), or does not invite this guy at all. How many possible groups of guests are there?

Shared context: [[STEM-2016-MID-P02 - Shared Problem Prompt]].

## Official Answer

Source: [[knowledge_base/past_paper/2016-midterm.pdf#page=4|PDF physical page 4]].

(b) The special guy can be in the group as a postgraduate student or not in the group at all, this is the same as part (a). In addition, this special guy can be in the group as a teaching assistant. In this case, we only need 9 more teaching assistants, and the total number of possible postgraduate students becomes 599 because the special guy already in the group as teaching assistant. Therefore, we have
$$\binom{300}{4}\binom{500}{10}\binom{600}{10}\binom{10000}{40}+\binom{300}{4}\binom{500}{9}\binom{599}{10}\binom{10000}{40}$$
possible groups of guests.

Another possible solution is
$$\binom{300}{4}\binom{500}{10}\binom{599}{9}\binom{10000}{40}+\binom{300}{4}\binom{501}{10}\binom{599}{10}\binom{10000}{40}.$$

## Supplementary Explanation

**Answer.** $\binom{300}{4}\binom{10000}{40}\left[\binom{500}{10}\binom{600}{10}+\binom{500}{9}\binom{599}{10}\right]$.

**Derivation/proof.** Partition by whether the special person serves as an assistant. If not, the original count allows that person either as a postgraduate or absent. If yes, choose 9 ordinary assistants from 500 and 10 other postgraduates from 599. Faculty and undergraduate selections are unchanged. These cases are disjoint, and the distinguished role is determined by the other attendees' role counts.

The original count already includes that person as a postgraduate or omits that person; those cases must not be added again.

## Connections

- [[Subtopic - Permutations and Combinations - 排列与组合]]
- [[Combinatorial Selection - 组合选择]]
- [[Combinatorial Case Analysis - 组合分类法]]
