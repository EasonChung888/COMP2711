# Mock exam production tools

Use the bundled Python executable:
`/Users/eason/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3`.
Dependencies are pypdf and pdfplumber. LaTeX uses Tectonic 0.17.0.

The local, ignored `cache/tectonic` executable was downloaded from the official
Tectonic GitHub release for aarch64 macOS. If missing, download and extract
`https://github.com/tectonic-typesetting/tectonic/releases/download/tectonic%400.17.0/tectonic-0.17.0-aarch64-apple-darwin.tar.gz`
to `tools/cache`, or supply `build.py --tectonic /absolute/path/to/tectonic`.
The first compile needs a network connection to populate Tectonic's TeX cache.

## Assembly and production

Each `content/*.json` file must have `papers` and `coverage` arrays using the shared
contract. Merge across subject files is by paper number and problem number.
Duplicate problems or concept IDs fail immediately. Papers must be numbered 1--10,
with ten problems in the fixed 100-point pattern. Sources must be actual verified,
in-scope midterm IDs in the current original KB and one of the four subject areas.

```
python3 tools/build.py --root /absolute/path/to/comp2711-midterm-mocks
python3 tools/validate.py --root /absolute/path/to/comp2711-midterm-mocks
python3 tools/check_math.py --root /absolute/path/to/comp2711-midterm-mocks
```

`build.py` writes twenty LaTeX documents to `source/`, compiles PDFs to `pdf/`, and
saves compilation transcripts and SHA-256 output hashes to `audit/`.
`validate.py --data-only` skips PDF checks. Full validation requires exactly twenty
PDFs, embedded Computer Modern 12pt, US Letter pages, all ten labels, distinct
problem start pages on exams, centered page numbers, and no clipped glyphs,
overfull TeX boxes, or missing glyphs. Human visual inspection remains required.

Public helpers: `load_papers(root) -> dict[int, paper]`,
`render_exam(paper, solutions=False) -> str`, `build(root, tectonic=None)`.
`load_data(root)` additionally returns the merged coverage mapping.
An unsplit part's assessment ID is `01.5`; a labelled part is `01.5.a`.

## Independent mathematical checks

Authors/reviewers save Python exact-check suites as `content/*checks.py`,
`tools/*_checks.py`, or `audit/*checks.py`. Alternatively use repeated
`--checks /absolute/path/to/suite.py` arguments. Suites run in separate processes
using the caller's Python, with the output root as their working directory.
Use assertions, exact integers, `Fraction`, finite enumeration, or truth tables.
Successful exit indicates a pass; failure propagates. With no suites, the runner
fails rather than reporting a mathematical pass. `audit/math-checks.json` records
suite hashes, exit codes, stdout and stderr. These scripts are trusted project code;
JSON content is always read with `json.loads`, never evaluated as executable code.
General proofs still require independent human review.

## Isolated fixture tests

```
python3 tools/test_pipeline.py -v
python3 tools/test_pipeline.py --compile-fixture /absolute/path/to/tmp/pdfs/fixture
```

The fixture uses two parts per problem with displayed mathematics and representative
writing spaces. It compiles one exam and one solution, and never enters `content/`
or `pdf/` of the formal set. Remove the temporary fixture after visual checks;
its results are retained in `audit/pipeline-test-results.json`.

## Final integration and delivery

`final_audit.py --root ROOT --render` reconciles the 95-cluster independent source
inventory with authored coverage, inventories all 367 lecture pages, rehashes
current source PDFs and cited notes, records per-slot reading/writing density, checks
solution heading attachment, measures footer/body bounds and renders every PDF page
at 120 dpi with bundled Poppler. Without `--render`, existing render evidence is
preserved only when the PDF hash is unchanged. The resulting `final-manifest.json`
is the input to the two disjoint all-page visual reviews; machine checks do not
certify unseen pages. Native TeX logs and compiler transcripts live in
`audit/build-logs/`; the final `pdf/` directory contains only the twenty PDFs.

`deliver.py --root ROOT` writes and reopens the ZIP, requiring exactly twenty PDF
basenames, good CRCs and decompressed member hashes equal to the final manifest.
With `--copy-to /absolute/path/to/original/workspace`, it copies only this task's
PDFs, ZIP, sources, content, tools, useful audits/logs and matching plan/spec/task
Markdown reports. It verifies every copied hash and records
`audit/delivery-verification.json`. Caches, binary tools, previews, raster evidence,
raw lecture/source extraction and unrelated workspace files are excluded. Final
render PNGs stay in the isolated worktree for review.

```text
python3 tools/final_audit.py --root /absolute/path/to/comp2711-midterm-mocks --render
python3 tools/deliver.py --root /absolute/path/to/comp2711-midterm-mocks
python3 tools/deliver.py --root /absolute/path/to/comp2711-midterm-mocks --copy-to /absolute/path/to/original/workspace
```
