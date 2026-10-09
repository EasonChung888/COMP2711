# Independent source audit of website practice answers — 2026-10-09

This is a read-only review of the existing website snapshot and current canonical question notes. Only this report was created. No source notes, website files, answer text, lecture explanations or PDFs were edited.

## Scope and binding contract

The binding specification is `docs/superpowers/specs/2026-09-30-two-part-answers-design.md`: preserve the existing **Official Answer** and **Supplementary Explanation** bodies verbatim as the only two answer sections. Removed Analysis, Detailed Solution wrappers/provenance, Common Mistakes, Correction / Completion and Chinese answer blocks must not be folded into either retained section. Metadata and non-answer source/question/connection material are not additional answer sections.

I actually read the Question, Official Answer and Supplementary Explanation of all **117 distinct primary IDs** occurring in **118 exercise records** across all eight `practice.json` files, plus both companion records `Q-2025S-FINAL-P07-sufficient` and `Q-2025S-FINAL-P07-minimal`: **119 distinct canonical source records**. I also read their **46 distinct shared stems**, and viewed the existing 2018 FINAL P11 grid image. I manually checked the logical transformations, proof assumptions, finite-set arguments, counting decompositions, inclusion-exclusion thresholds and pigeonhole bounds. The coverage inventory below enumerates every website exercise, including the repeated ID, rather than claiming coverage from an ID count alone.

## Initial website snapshot findings (corrected after display-aware comparison)

These findings describe the pre-repair snapshot, recovered with `git show HEAD:...` at commit `fe1bb05386ec9a6164dbd8d7e1dfef70e248bca9`, rather than any concurrent repair. The first version of this report incorrectly treated a raw `solutionMarkdown` string and raw wiki-link substring search as the whole displayed answer. That missed L1.8's separate `officialMarkdown` field and its rendered official-answer section. This section replaces that initial classification.

Comparison method: extract the canonical Official Answer and Supplementary Explanation bodies, trim section-boundary whitespace, then apply the same existing display conversion as `localizeAnswer`: `[[knowledge_base/past_paper/FILE.pdf#page=N|ALIAS]]` becomes `[ALIAS](../sources/papers/FILE.pdf#page=N)` (using the target text when no alias exists; existing PDF embeds likewise become local links). Compare the **entire converted body** to the corresponding `officialMarkdown` or `solutionMarkdown` field, separately. A raw wiki-link mismatch is a display-format difference, not missing content. Field shape, H2 presence in one field, and a substring containing a final answer are insufficient to determine what the generated HTML shows. I additionally read `git show HEAD:courses/l2-5/tools/l1-8-lessons.mjs`, whose original renderer explicitly displays `officialMarkdown` under “官方答案” and `solutionMarkdown` under “补充解析”.

The accurate initial classification is **65 exercises in the old answer structure, 42 with only Supplementary Explanation, and 11 already displaying both retained parts**:

- The 65 records in the root course and l1-1/l1-2/l1-3/l1-4 contain Chinese answer text and obsolete provenance/wrapper content; their copied primary notes differ from the current canonical notes. None of their entire answer fields equals the corresponding current retained body after display-link conversion.
- The 42 records in l1-6/l1-7 have current copied primary notes and display the complete Supplementary Explanation body unchanged, but have no Official Answer field or rendered official section. These are the supplementary-only cases.
- The 11 records in l1-8 have current copied primary notes, an `officialMarkdown` field and a `solutionMarkdown` field. **All eleven official and supplementary bodies exactly match the current canonical retained bodies after the allowed local-PDF-link conversion**, and the original renderer displays both. Their headings were Chinese UI labels. They must not be reported as missing official answers or missing two-part answers. Standardizing the UI labels is distinct from supplying omitted source content.
- Overall, 11 of 118 baseline official fields and 53 of 118 baseline supplementary fields equal the full converted canonical bodies; all 11 two-part matches are L1.8. There are 107 exercises outside that complete two-part baseline group. The original count of 70 raw supplementary-body substrings in displays only established that a body occurred inside some larger old answer text; it does not demonstrate that the displayed answer consists of the retained body alone and is superseded here by full-field equality.
- Every baseline `answerSource` value agrees with the canonical note's `answer_source`: 117 exercise records are `official`, and `Q-2017-MID-P10-c` is `derived`. There is no metadata-label mismatch in this snapshot. An `official` exercise still needs its Supplementary Explanation; a `derived` exercise with a supplied but erroneous official block still needs that official block preserved.
- **C1:** The root exercise `Q-2025S-FINAL-P07-N` is a merged question. Its initial Chinese display does not preserve the independent Official Answer and Supplementary Explanation bodies of its sufficient/minimal companions. Merely retaining N's already complete argument is not verbatim preservation of those separate companion answers. They must remain inside their corresponding two answer sections, with provenance/association preserved outside answer bodies as required by the integration design.

| Snapshot file | Records | Initial structure | Current copied primary notes | Exact converted Official Answer | Exact converted Supplementary Explanation |
| --- | ---: | --- | ---: | ---: | ---: |
| courses/l2-5/chapters/l1-1/practice.json | 10 | Old structure | 0 | 0 | 0 |
| courses/l2-5/chapters/l1-2/practice.json | 14 | Old structure | 0 | 0 | 0 |
| courses/l2-5/chapters/l1-3/practice.json | 14 | Old structure | 0 | 0 | 0 |
| courses/l2-5/chapters/l1-4/practice.json | 10 | Old structure | 0 | 0 | 0 |
| courses/l2-5/chapters/l1-6/practice.json | 31 | Supplementary only | 31 | 0 | 31 |
| courses/l2-5/chapters/l1-7/practice.json | 11 | Supplementary only | 11 | 0 | 11 |
| courses/l2-5/chapters/l1-8/practice.json | 11 | Both retained parts displayed | 11 | 11 | 11 |
| courses/l2-5/practice.json | 17 | Old structure | 0 | 0 | 0 |

## Canonical source structure and language

All 119 reviewed canonical records have nonempty Official Answer and Supplementary Explanation sections. The retained bodies contain no Chinese characters; English mathematical text, source wikilinks, tables, quotation markers, formulas and image references are existing source content and are retained verbatim. The derived-only exception described in the global September 30 specification is not among these 119 records. `Q-2017-MID-P10-c` is derived by metadata, but has both retained blocks: its printed official answer is erroneous, while its supplementary answer is independently derived.

## Material source issues to retain and report separately

The following are defects or limitations already present in current canonical bodies. They are **not authorization to rewrite them**. Preserve both retained bodies exactly and keep this audit as a separate errata record. The two-part contract requires the official printing defects to remain verbatim in Official Answer; it does not authorize correcting that block. S1 is also retained verbatim in its existing Supplementary Explanation and documented only in this independent audit. Do not add a third Correction / Errata / Completion answer block, or merge newly written errata into either retained body.

- **S1 — Q-2018-FINAL-P11-b, supplementary final paragraph:** The last paragraph says “Every path through the forbidden point splits uniquely…” and attributes eighteen paths to that point. The problem removes the **C–D edge**, and eighteen counts paths using that edge. Viewing the stored figure confirms C=(2,2), D=(3,2), B=(5,3) relative to A=(0,0). Paths through C number 6×4=24; paths through D number 10×3=30. The preceding supplementary edge-based derivation and final answer 38 are correct. The final point-based sentence is a substantive explanation error, not a wrong final count. An independent grid dynamic-programming calculation confirms 56 total, 18 using the removed edge, 38 remaining.
- **O1 — Q-2024F-FINAL-P01-a, official proof:** The printed repeated-disjunction step is labeled “Distributive law,” although equivalence follows from associativity/idempotence. The equivalence itself is correct. The existing Supplementary Explanation explicitly identifies the rule-label error.
- **O2 — Q-2015-MID-P02-c, official step 5:** Modus ponens cites (3,4), but line 3 is q and line 2 is p. The correct input is (2,4). The existing Supplementary Explanation identifies this reference error and supplies the valid inference.
- **O3 — Q-2019-MID-P04, official final step:** `∃x(Q(x)∧R(w))` introduces an unbound w instead of using x. The valid conclusion is `∃x(Q(x)∧R(x))`. The canonical Source verification records the typo, and the retained supplementary numbered proof has the correct common witness. This malformed official conclusion must remain visible as source text.
- **O4 — Q-2017-MID-P03-b, official intermediate equality:** Starting from x=a/b, the printed `x=(√x)²=(a/b)²` is invalid; x²=(a/b)² is needed. It also invokes √x without assuring x≥0. The canonical Source verification already records the equality error; the retained supplementary contrapositive proof is correct.
- **O5 — Q-2017-MID-P10-c:** The supplied official value is `C(35+4−1,3)=C(38,3)=8436`. Reserving five candies in each of four boxes leaves 50−20=30, so the correct count is `C(33,3)=5456`. The retained supplementary derivation and its independent enumeration agree. Preserve `answer_source: derived`, the printed Official Answer and the existing Supplementary Explanation. Do not relabel the supplied printed block as the correct derived result, or replace it with 5456.
- **O6 — Q-2024S-FINAL-P04, official last prose line:** The final intermediate is named `#P2,bad` but is assigned `C(11,6)−C(6,4)C(5,2)`, which is the number of good continuations. The number of bad continuations is 150, good continuations 312, final total 3120. The official final expression and supplementary answer are correct; the intermediate label is wrong.
- **O7 — Q-2025F-FINAL-P02-b, official explanatory wording:** The statement “there is a bijection between any subset and its complement” cannot literally mean a bijection between their elements (their sizes can differ). The map S↦A\S on the entire powerset is the involution needed for the proof. The retained supplementary proof makes the correct pairing and verifies that no set equals its complement. The conclusion remains correct.
- **O8 — Q-2023F-MID-P02-a, official final quantifier extraction:** The last official equivalence extracts the existential factor from ∀x. It uses the usual nonempty-domain convention; it need not hold for empty domains. The existing supplementary proof retains the explicit scopes and calls out the convention. No false result arises under standard nonempty first-order domains.

Minor editorial/context drift, with correct final mathematics, also appears in retained supplementary bodies: **E1** `Q-2019-FINAL-P09-b` calls the forty distinguishable journal issues “people” in its last paragraph; **E2** `Q-2017-MID-P08-b` adds a sentence about a requested exponent/coefficient although this part only asks for the number of terms; **E3** `Q-2019-FINAL-P01-a` says “real universal choice” in its final sentence although the shared domain is integers (the same construction works over reals as well); **E4** `Q-2025F-MID-P03-c-ii` indexes f₀,f₁,… without specifying whether 0∈N, so a positive-natural convention requires reindexing. These do not warrant silent rewriting or changing the final answer.

## Companion proof verification

The supplied inventory is 100 red, 80 green, 60 blue and 40 black socks. All three N/sufficient/minimal source records are `official` and contain both retained answer sections. For any 23 socks, the number u of unpaired socks is odd and at most four, hence u≤3 and (23−u)/2≥10 disjoint pairs. The 22-sock witness (5,5,5,7) respects all inventory bounds and has exactly nine pairs. Exhaustive enumeration of all 2,600 nonnegative four-color allocations of total 23 gives minimum ten pairs; all 2,300 allocations of total 22 give minimum nine pairs. Since totals 22/23 are below the smallest inventory bound 40, these enumerations cover every allowed allocation. The official and supplementary sufficient/minimal arguments are mathematically sound and both companion bodies must be preserved.

## Independent calculation checks

Executed 26 assertions: eight binomial values; two committee sums; four glove/anagram counts; five numeric inclusion-exclusion counts (including literal enumeration for bounded triples and multiples 0–999); one candy allocation enumeration; four grid-path counts/expressions; two exhaustive sock-allocation minima. All passed. This substantiates numerical results and the material S1/O5/O6 findings; it is not a claim that every proof has been machine-formalized.

## Limits of confirmation

This audit did not re-render every original exam PDF, recheck every transcription against its PDF image, run a browser, assess formula rendering/offline assets, or verify a subsequently repaired website state. Source provenance was read from current canonical records; the existing grid image was directly inspected. The language check rejects Chinese characters in retained bodies but is not a general natural-language classifier. Manual mathematical review can detect obvious errors but is not a formal proof guarantee. Mathematical/source errors were recorded separately in accordance with the no-rewrite contract.

## Per-exercise coverage inventory

Every row was manually read with both retained answer bodies; `OK` means no additional material error was found beyond the issues listed above, not fresh PDF certification. The hash records the canonical note bytes read in this review.

| # | Course location | Primary ID | Answer source | Finding | Canonical SHA-256 |
| ---: | --- | --- | --- | --- | --- |
| 1 | chapters/l1-1 | Q-2016-MID-P04-a | official | OK | `a35c46d6e636aec6038488cd14abe68097cfe5617e23ffe7ce26bf28c199fc25` |
| 2 | chapters/l1-1 | Q-2019-MID-P01-a | official | OK | `48425ed6579fd6c4bc4fb6bc101cec43ec24d26840c4f55c9cf918b84440fb25` |
| 3 | chapters/l1-1 | Q-2019-MID-P01-b | official | OK | `e073ad4cf3ee13d1af905bced84758fa996bc43ed7fcbb7e6f77ee85ccb2915c` |
| 4 | chapters/l1-1 | Q-2019-MID-P01-c | official | OK | `8dededf98abad9f0bc182859346f73a5ce5a3ee1b58df60ab5ff78920d3978d0` |
| 5 | chapters/l1-1 | Q-2019-MID-P01-d | official | OK | `2be5c97adf6cb889b7d66e79c9b7bca92292537558962c3cdd72ffb55ecc5bba` |
| 6 | chapters/l1-1 | Q-2015-MID-P01-a | official | OK | `e9a0598bfdfaed4017ff9231109b1570726f0f019818d4da065a511a0e0189fc` |
| 7 | chapters/l1-1 | Q-2023F-MID-P01-a | official | OK | `0c4e481acb92d5136dfa6f58bb5e18eab61ff78e4fc90bee9de944f4cdd5cc98` |
| 8 | chapters/l1-1 | Q-2024F-FINAL-P01-a | official | O1 | `13545888a1cf270f70613787b7f851e7f6e907da48fe3cf73bc59ae180131af9` |
| 9 | chapters/l1-1 | Q-2018-MID-P01-a | official | OK | `04c3fd2dc512a8c57821bb0d924832c776634eb4c9b310c9591c91faf8916394` |
| 10 | chapters/l1-1 | Q-2018-MID-P01-b | official | OK | `ba3566cf875adfa69d9e685091da91c8ea61620e4f5be0a46ce51194a0a88488` |
| 11 | chapters/l1-2 | Q-2019-MID-P02-a | official | OK | `12418a6904dc69eb17436f628355cfd328d98b1cead0afb7714d86959771545b` |
| 12 | chapters/l1-2 | Q-2019-MID-P02-b | official | OK | `27d168046b44e7689f4f64ca7aae885b1c3c88f7596703682528aa12cdff440b` |
| 13 | chapters/l1-2 | Q-2019-MID-P02-c | official | OK | `164820ac11ad24704db616b52cd0a36131f6fbb3b1d8a980de1b6270222f1549` |
| 14 | chapters/l1-2 | Q-2016-MID-P06-a | official | OK | `538f64f66c1324ac79cc9e81b8edbd1cbaf169220d03273888b8b27fcdfe8f3a` |
| 15 | chapters/l1-2 | Q-2016-MID-P06-d | official | OK | `9b9952532a0741f30199fc3933a39bbbb946392ce544957e783be484d0de0a93` |
| 16 | chapters/l1-2 | Q-2020-MID-P01-a | official | OK | `dbe45e039b770354f70350b1ecabdec1c1642e91297dfecf615d07d6c148b8eb` |
| 17 | chapters/l1-2 | Q-2014-FINAL-P05-b | official | OK | `af405c7c3de5c4d35d224199b04f3a926391e1adbb4be9a095a78dfc3c849ed4` |
| 18 | chapters/l1-2 | Q-2014-FINAL-P05-c | official | OK | `c73726cfa466a7dae015ee70b36af77beaf58ff92b63e1b87349af8976804e82` |
| 19 | chapters/l1-2 | Q-2024S-MID-P03-a | official | OK | `f8f60cd0c33a45002af6b3ce9f9d0e847ceae79797090301ddde75f103380de8` |
| 20 | chapters/l1-2 | Q-2023F-MID-P02-a | official | O8 | `a24955464da43eeefa9cf3433f2cb9a521d4f4e6e714520c2393303d9add32c5` |
| 21 | chapters/l1-2 | Q-2025F-MID-P02-b | official | OK | `54f7cf4bf91fa12fe1f12fb8449032443b310203249552926f9507a20e656f1a` |
| 22 | chapters/l1-2 | Q-2019-FINAL-P01-a | official | E3 | `533619abb5848931a1a457dfab213daa06cce4fdb394febb485f6affc38a196a` |
| 23 | chapters/l1-2 | Q-2019-FINAL-P01-c | official | OK | `0e447103ba6e6ba5f6bdc0fc5441cfedfb2b91b88f0eedb6a2fa3125fa66cee3` |
| 24 | chapters/l1-2 | Q-2019-FINAL-P01-d | official | OK | `3032907c455a9204d38d8dd4e1b5507d10a3c048d49b236d544a1b181a2d4d25` |
| 25 | chapters/l1-3 | Q-2015-MID-P02-a | official | OK | `b94093ae88cbca1fc06ec6f5bc002cba895830daea15346f647d6dcd9af4a6cb` |
| 26 | chapters/l1-3 | Q-2015-MID-P02-b | official | OK | `9ddb6481528a6e1e6ed913d85e6efbc15a8775e1769a61ca07676891d2aaa6d4` |
| 27 | chapters/l1-3 | Q-2015-MID-P02-c | official | O2 | `f47f504668015b1bcddab5f4e48e8338ef06f6181a4d690575a396d05e0e587d` |
| 28 | chapters/l1-3 | Q-2019-MID-P04 | official | O3 | `ef48d69bf7ab5e811211b9a09ee5a7cc26e750a89b1199741e813bec09678a5a` |
| 29 | chapters/l1-3 | Q-2013-FINAL-P06-b | official | OK | `efd468e31ca967f590324b9c2abb93d47265891848dc697d9aef61b6ec9ae67b` |
| 30 | chapters/l1-3 | Q-2025F-MID-P02-c-proof | official | OK | `9052deeb60cecebaa1f0d73e6b3f0cd1a3fd689b99daddf40d7518c966fb57b5` |
| 31 | chapters/l1-3 | Q-2015-MID-P04-a | official | OK | `ecf7dc7996b7cdd5238c11f9447633c27331027702d44b9ab3bbefb51e78ae6c` |
| 32 | chapters/l1-3 | Q-2020-MID-P03-b | official | OK | `238b2586f7ca4e6bc0a74d5eecb2ffbfac79fb505dd28ff037be090078cdc69d` |
| 33 | chapters/l1-3 | Q-2015-MID-P04-b | official | OK | `a8d81ca4f5c996ce4c6ed41ce3045346b658830eb2a0400c772c6465e58899a0` |
| 34 | chapters/l1-3 | Q-2014-FINAL-P06-b | official | OK | `99ac3e6702fa7c29315692d074c3e13ebe42a14392ceee5a54aa88a2a45818db` |
| 35 | chapters/l1-3 | Q-2017-MID-P03-b | official | O4 | `1f10a2734350d7700408917046266a7d21330ed17a4e92bab5e021257030812f` |
| 36 | chapters/l1-3 | Q-2014-FINAL-P06-a | official | OK | `65659c2f1a91aba49dd54576b03893d52f95ed9a427e86881a82053b505fb95d` |
| 37 | chapters/l1-3 | Q-2015-MID-P04-c | official | OK | `77763af61fb9f54601375a1ca1bb9f877bcbfcd2e0abce2d6f919f346279c169` |
| 38 | chapters/l1-3 | Q-2019-MID-P08 | official | OK | `cb10ec0f4aa3665b113d55388e5df03b87b3787d20b223fffc0e64484bdf9810` |
| 39 | chapters/l1-4 | Q-2025F-MID-P03-a | official | OK | `aeeca6725e907d5cac7d1ecf65dab93e2320c797a81690c8042586600bccf49d` |
| 40 | chapters/l1-4 | Q-2024F-FINAL-P02-a | official | OK | `ca62dcd7685f67183e0a75207cc08d81dbc89aaf95e0dc872de5e5d65dcfd1f0` |
| 41 | chapters/l1-4 | Q-2024F-MID-P03-c | official | OK | `3089b168792de69e1af821fa6bf41b9fce08e57c16e06f4f38de48a3e9cac47f` |
| 42 | chapters/l1-4 | Q-2023F-MID-P03-a | official | OK | `2992e40c96ff3e83c8104409a7ceb23d18570962a5b1676d61973062d54026b5` |
| 43 | chapters/l1-4 | Q-2013-MID-P02-a | official | OK | `d171191910a923c523bf11a2fefd72bd1630cfeac1f224877e8e093b3e26395a` |
| 44 | chapters/l1-4 | Q-2018-MID-P04-a-proof | official | OK | `5408d517b9fbbd1a7d3205779b4b7134c1153d31423e4a60c48a6f1400df5261` |
| 45 | chapters/l1-4 | Q-2018-MID-P04-b | official | OK | `1bf955420036a1e24b89ff5cc4b0a6f603bd78c66847828ac49b2e3e0b605edd` |
| 46 | chapters/l1-4 | Q-2023S-MID-P03-1 | official | OK | `9ddd8e6f1cf4102d7fa633e358f02f889f5dc1ffd4dc8bf1632cb1a00001c257` |
| 47 | chapters/l1-4 | Q-2023S-MID-P03-2 | official | OK | `7289ab66b93f3d5fd6be092c8e5bd7416ac2f60bd4992fc8d0ebcb28e3ab59e4` |
| 48 | chapters/l1-4 | Q-2025F-MID-P03-c-ii | official | E4 | `86703638aa235a05f1abbdbf377434b0a44367fe1545e185ef7a843976550bbe` |
| 49 | chapters/l1-6 | Q-2014-MID-P02-a | official | OK | `5b2408ef361527867e3026284ab5f2f196d6c0cce58edef807c1535a83323128` |
| 50 | chapters/l1-6 | Q-2025F-MID-P04-a-i | official | OK | `e0fc614c7e5380a9f1cc3dcb9a3665158edad89b23cc6e64dc430c62f8cad4bb` |
| 51 | chapters/l1-6 | Q-2025F-MID-P04-c-i | official | OK | `760bf53ea237d1b8d7e15d2fcfb0c057ba199bdc6ca90b6799829a8095f9e9bf` |
| 52 | chapters/l1-6 | Q-2013-MID-P01-a | official | OK | `277dbbc27a165d9853168dbb5b7d65724ff16f0cc1afe9204372ff19ca18b83a` |
| 53 | chapters/l1-6 | Q-2014-MID-P01-a | official | OK | `414a6931e79312ef37c10c0fd87a63cc3a70c1a5481c05999a8b33f5c0337c19` |
| 54 | chapters/l1-6 | Q-2018-MID-P07-a | official | OK | `15eb7885a76e994d75e4d328eb082823c40e3569570f38895816cd64cb6f9f48` |
| 55 | chapters/l1-6 | Q-2014-MID-P02-b | official | OK | `41929874f21732e42c9463db5fb49e4d67aa0251a9dee0a62a9654b7012a59f0` |
| 56 | chapters/l1-6 | Q-2014-MID-P02-d | official | OK | `438429cc83d73f678fe2b05e52e6a2600bee347cfd9d833c63bdfc30b107283c` |
| 57 | chapters/l1-6 | Q-2025F-MID-P04-a-iv | official | OK | `8636706a752e4caa2d0d916b8783cfd4626506087bf816fbfc06cfd9ad79a633` |
| 58 | chapters/l1-6 | Q-2017-MID-P09-a | official | OK | `9be4e66a18315f130a0ee0b42b2691f16dd273d7f2b9a8fc103fc6dd67a51175` |
| 59 | chapters/l1-6 | Q-2017-MID-P09-b | official | OK | `0548db2b0f3f3b5259e32a3621fd2029aa845cb7aa87d5517a15d26ba68fa85d` |
| 60 | chapters/l1-6 | Q-2024F-MID-P06-b | official | OK | `49917b179dc75f15a6869acd1894a89b742a1e97dea9f1a1db660e6f4c1926b0` |
| 61 | chapters/l1-6 | Q-2015-MID-P08-a | official | OK | `387b9451b05aca82abdad6bd80c3ac6ffa3fbf91e1dff3ae842670ae700e1a08` |
| 62 | chapters/l1-6 | Q-2015-MID-P08-b | official | OK | `f188e0d648e186bbc7b3ffe122f86305133062ea97a8228048b2c411af1690e6` |
| 63 | chapters/l1-6 | Q-2015-MID-P08-c | official | OK | `ec945d80ca66ecf377a7fd19e7399648517f4ebb4db20490d77fb2845703a676` |
| 64 | chapters/l1-6 | Q-2013-MID-P03 | official | OK | `c7f2cb757363933ad698651f763d38944da6797acf859bb9cd6bbdebba6a37d6` |
| 65 | chapters/l1-6 | Q-2016-MID-P03-a | official | OK | `f49b004fb9f8e3c664b161b21e72bb949f798f1003754495da51651707146f97` |
| 66 | chapters/l1-6 | Q-2016-MID-P03-b | official | OK | `19654ae70f513a0d3f63660a49772c18cd533aa28c7777ba050288eca449e07f` |
| 67 | chapters/l1-6 | Q-2014-MID-P04-a | official | OK | `78c233c9ac634816b13a50853daa0e75ea458132017e803ae35823b7476994dc` |
| 68 | chapters/l1-6 | Q-2014-MID-P04-b | official | OK | `729849a992d0907bb145dc9a569a5038e69ce48c96c87e4a1f8480b5042ac89d` |
| 69 | chapters/l1-6 | Q-2019-FINAL-P09-a | official | OK | `1582a8dde2d4b9bf146bad809bee602b40d210162cdd10236904ad07f327afb5` |
| 70 | chapters/l1-6 | Q-2019-FINAL-P09-b | official | E1 | `e212b92e2301b17ca94f272f900268ee3abea91702a9ab8f26481210f7f1c5f4` |
| 71 | chapters/l1-6 | Q-2018-MID-P08-c | official | OK | `9e7ffc4f6b6bb50514960690782777191bd342775a290062595775b0f111bba8` |
| 72 | chapters/l1-6 | Q-2024F-MID-P06-c | official | OK | `1b6e225dd421764a87f0f451c5e3ae1b0b59fcc00b4211c8be78ea87fec5d167` |
| 73 | chapters/l1-6 | Q-2024F-MID-P06-d | official | OK | `1fcea15bdc2d0635d4a983cafaed9513d32473aeaac3a33acdf82814aa2a67e4` |
| 74 | chapters/l1-6 | Q-2013-MID-P08 | official | OK | `e2e92c370a7e0c96bd6177498531c073fdb4ee213dd07d7f6a021b017554c92d` |
| 75 | chapters/l1-6 | Q-2017-MID-P10-b | official | OK | `8c032ec1b15f3a4c59191a7a53443c6a5bdf9bd0b77f7f8d41eabd409e8e186c` |
| 76 | chapters/l1-6 | Q-2017-MID-P10-c | derived | O5; derived | `de6f61a7550b875d973e429753ef5c6e128f45a12ab5dddba83913ff3835b67b` |
| 77 | chapters/l1-6 | Q-2018-FINAL-P11-b | official | S1 | `187efdb6bf785bb4929ba9cfdac1333ab8c929e62df568a8704b5a16bdf342c7` |
| 78 | chapters/l1-6 | Q-2020-FINAL1-P03-b | official | OK | `a65b7b3a9dd64696a6df0dc833f269ce5379f5006be9388f240b496856261c1c` |
| 79 | chapters/l1-6 | Q-2024S-FINAL-P04 | official | O6 | `31b647fc54320995ce0bab671114cfda5ebb5de022e44c402e0be7f3c2859fe9` |
| 80 | chapters/l1-7 | Q-2017-MID-P08-a | official | OK | `4da8698ff62efc41ee65c9f49fe8f7ff74574f51b141e4e5f2e89d6d7fd95d05` |
| 81 | chapters/l1-7 | Q-2017-MID-P08-b | official | E2 | `082d7f02825db997ecebcd6f11aa96d07ddc3ec927542b80ec32c7d1460949df` |
| 82 | chapters/l1-7 | Q-2019-FINAL-P05 | official | OK | `af68e863b7cb5fdb0cbb474bd6479160e2997f00266523039874a67032dc24ca` |
| 83 | chapters/l1-7 | Q-2024F-MID-P09-a | official | OK | `48182de6573e5bc43ac1730dbf9e3f60ca1fc3eb0e46ca287504cc3f6edd3062` |
| 84 | chapters/l1-7 | Q-2024F-MID-P09-b | official | OK | `f008939d5579c69054967a915f034363e09513d9f74e08021b8b76d08d570c6c` |
| 85 | chapters/l1-7 | Q-2018-FINAL-P11-a | official | OK | `c2e805d42c4d23c7e89aefc594721b4138a99c1bc8d6e7b0ec226af398733037` |
| 86 | chapters/l1-7 | Q-2020-FINAL1-P03-a | official | OK | `8fe5f93993b09d613da9d5a406f9e5976a0addb0dadef374004d13a9e8f8df02` |
| 87 | chapters/l1-7 | Q-2025F-MID-P05 | official | OK | `78474944fd68a5b51246756239b5063e8ac5f99615e6cecf6c02811d05431f57` |
| 88 | chapters/l1-7 | Q-2023F-MID-P05 | official | OK | `c63bbc6a28f16e33d9f08b294ab5d40100753a95b1274629c714e3723ce2b447` |
| 89 | chapters/l1-7 | Q-2017-MID-P11 | official | OK | `6d00fc6ceb6eafaa37317a3ff3ce0a78c5c759b6d8bf8175d9f73a7eae55c7fe` |
| 90 | chapters/l1-7 | Q-2025S-FINAL-P09 | official | OK | `a0862d0216173b0055c0973a980e41e3ee3295e509c87e0dd014f99d6342ddb4` |
| 91 | chapters/l1-8 | Q-2019-FINAL-P08-b | official | OK | `b3946a56b4f680454baee26199d6018fa5242030527f1cfaac13f153d56be5dc` |
| 92 | chapters/l1-8 | Q-2020-FINAL1-P04-a | official | OK | `af3faa308d1a555f61f441384543413207cb733eab32fb5a64b1f4e02f5e02d2` |
| 93 | chapters/l1-8 | Q-2025F-MID-P06 | official | OK | `ebec72cc132ba5af478e8dbe2cdd92cb5c694a385d20f5667384999f648728d0` |
| 94 | chapters/l1-8 | Q-2024F-MID-P07 | official | OK | `53619c270eb13ca4304fd66dc1493737872f23adb0f1dcb6ddb537df14f3b283` |
| 95 | chapters/l1-8 | Q-2017-FINAL-P01 | official | OK | `fad086499c95403c736dc1a23fba16331d62b659421815fa80dc98bde1e9d2bc` |
| 96 | chapters/l1-8 | Q-2020-FINAL2-P06-a | official | OK | `63d5143f32a179afbd95cdc8d1d1d1e76aaa96420df5d16e4bfa81124a8c3d7b` |
| 97 | chapters/l1-8 | Q-2020-FINAL2-P06-b | official | OK | `b36ca02fcb9e29560d1ee96aba27e8c58b82487c345da73f7e9a27400357d11b` |
| 98 | chapters/l1-8 | Q-2020-FINAL2-P06-d | official | OK | `f4642343fe70e43ab5e779f32b9ab0fc73476f5784e88ad76b1ba0b8066ae23b` |
| 99 | chapters/l1-8 | Q-2019-FINAL-P10-b | official | OK | `c897793f60f725eceaad2e44be211bb94a5a7aa6c6d155e4c205f21896ff3176` |
| 100 | chapters/l1-8 | Q-2019-FINAL-P10-d | official | OK | `d5956357d423f07ab76d1f24ac49221fd57294aa43fee22faa6976f72b89d96f` |
| 101 | chapters/l1-8 | Q-2023F-MID-P06 | official | OK | `9dfac29bf70432ad9b7553679abf346621f75363dbe696cacc8385e797eb849f` |
| 102 | . | Q-2017-MID-P06-a | official | OK | `66937058f8d1b537620cdaf8e239f4f8c48c9bf11716b22c3f678dffc40177a8` |
| 103 | . | Q-2016-MID-P01-d | official | OK | `b0a3b4cf07048fe8b9df5e3911b0b7bf6abeb5f640e2e1fbe885b76f4b0b3fef` |
| 104 | . | Q-2013-MID-P02-a | official | OK | `d171191910a923c523bf11a2fefd72bd1630cfeac1f224877e8e093b3e26395a` |
| 105 | . | Q-2013-MID-P02-b | official | OK | `f9172462c33721c1cdf0eff7e61c993887f0135aa59e7653a77c711b09a29c0e` |
| 106 | . | Q-2013-MID-P02-c | official | OK | `31622685a694d0cea7668790155f447eff8574c80d6450ca54c5734d2d5ab8a5` |
| 107 | . | Q-2018-FINAL-P10-c | official | OK | `18d073b314960e0ffe027042b616714e55bc8964649f3bed85406d85dedcb6a3` |
| 108 | . | Q-2015-MID-P06-a | official | OK | `57cf39bec2f5c18c23ee395c33878e5d3d7cd2ead6eece3604c5bccf19bce9fe` |
| 109 | . | Q-2016-MID-P01-b | official | OK | `b1778e601dfe82405c9f143b1c76aa342365ab4f0fe349629bfda5cdd58520c3` |
| 110 | . | Q-2016-MID-P01-c | official | OK | `2dcbff859aa8b39ec1ec9a9b9be8d79c576e236304b7242cb7e452cf3f3bb279` |
| 111 | . | Q-2015-MID-P06-b | official | OK | `86a08b9d3ad559d0a6a856871bae6018e0b7039150189fca0aff7d25cd8aa672` |
| 112 | . | Q-2015-MID-P06-c | official | OK | `157ff908b1197f88d27e8080813bf99544e9ea9956ecdd1746846aeea87d5d74` |
| 113 | . | Q-2025F-MID-P07 | official | OK | `03e445793384ff1d50134eb274b78a11299455056d271cb55c2edcaf84204c90` |
| 114 | . | Q-2025F-FINAL-P02-b | official | O7 | `f86d1468dd38499526cf481745052c7b790eec6e481b46ff06fa5f5e21648bf5` |
| 115 | . | Q-2019-FINAL-P07 | official | OK | `361f87c8ff96041b497a41a3202ecd21ef0e532462ad34180c3372cafb4241f9` |
| 116 | . | Q-2017-MID-P07 | official | OK | `e2fbc10ba8dcf5d27d723390707066366460081cb4c2d463a6edccdfc32566f6` |
| 117 | . | Q-2015-MID-P07-c | official | OK | `5933bf1759c80fef0891669ccff6eb048836c46a6278e52be79ea2d876e1eaf8` |
| 118 | . | Q-2025S-FINAL-P07-N | official | C1 | `24bed8714ca73e7eea38eefa6547810942a1f5311e3cb4fd2b335bfdeabd55bb` |

### Companion records

| ID | Two retained bodies read | Answer source | Finding | Canonical SHA-256 |
| --- | --- | --- | --- | --- |
| Q-2025S-FINAL-P07-sufficient | Yes | official | Sound; retain both bodies | `80eb7635fc197a1605e613df3cff9221e467e25c0bab917cc2873f9b17b330cb` |
| Q-2025S-FINAL-P07-minimal | Yes | official | Sound; retain both bodies | `04bb8f1b642a7e68dc88d880b88c375af5f7ac83a5325e8cbf502e97d839191e` |

Audit report written at UTC 2026-10-09T10:51:28.679602+00:00.

Display-aware baseline correction completed on 2026-10-09; no implementation or answer content was edited.
