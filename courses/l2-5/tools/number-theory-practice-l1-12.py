"""Snapshot independently checked, unmodified KB exercises for L1.12 only.

Run after all three Number theory manifests contain their complete written pages.
No course HTML is built; only L1.12 practice/config/sources and append-only events change.
"""
from pathlib import Path
import hashlib
import importlib.util
import json
from datetime import datetime, timezone
from practice_answers import answer_fields, metadata_fields

spec = importlib.util.spec_from_file_location('chapter_practice_shared', Path(__file__).with_name('chapter-practice.py'))
s = importlib.util.module_from_spec(spec)
spec.loader.exec_module(s)
CHAPTER = s.ROOT / 'chapters' / 'l1-12'
SELECTION = {
    'divisibility': ['Q-2019-MID-P06-a', 'Q-2019-MID-P06-b', 'Q-2025S-MID-P07'],
    'division-theorem': ['Q-2013-FINAL-P01-a', 'Q-2014-FINAL-P02-a', 'Q-2014-FINAL-P02-b'],
    'modular-arithmetic': ['Q-2013-FINAL-P01-b', 'Q-2015-FINAL-P05-a', 'Q-2025S-FINAL-P03-a'],
    'congruence-rules': ['Q-2017-MID-P04-b', 'Q-2019-MID-P09-a', 'Q-2019-MID-P09-c'],
    'modular-applications': [],
}
CHECKS = {
    'Q-2019-MID-P06-a': 'Write c=ak=bl with integer witnesses; multiply to get c^2=ab(kl). The integer kl is the divisibility witness, with no coprimality or division assumption. Exhaustive small-integer witness checks include zero under the convention allowing 0|0; the nonzero-divisor convention also satisfies the proof.',
    'Q-2019-MID-P06-b': 'Counterexample a=1,b=-1: -1=1*(-1), 1=(-1)*(-1), but 1!=-1. Both divisibilities hold over the printed integer domain. No unstated positivity assumption is added.',
    'Q-2025S-MID-P07': 'For arbitrary odd natural a=2k+1, a^2-1=4k(k+1). Consecutive k,k+1 have even product, so 4k(k+1)=8t for an integer t. The boundary a=1 gives 0, divisible by 8. Supplemented with enumeration of odd a=1..199.',
    'Q-2013-FINAL-P01-a': 'For positive m|n, write n=sm, x=q1*n+r1 and r1=q2*m+r2 with 0<=r2<m. Then x=(q1*s+q2)*m+r2; uniqueness of the standard remainder proves the identity, also for negative x. Exhaustive checks cover x=-100..100, m=1..12, s=1..12. Only Division Theorem and divisibility are needed.',
    'Q-2014-FINAL-P02-a': 'For the printed a,m,n>1, write a=q1*mn+r1 and r1=q2*n+r2, 0<=r2<n. Thus a=(q1*m+q2)*n+r2 and remainder uniqueness proves True. No congruence theorem or GCD assumption is required. Exhaustive positive-parameter checks supplement the proof.',
    'Q-2014-FINAL-P02-b': 'The printed domain requires a,m,n>1. With a=8,m=2,n=3, (8 mod 6) mod 3=2 whereas 8 mod 2=0. This allowed triple disproves the universal assertion.',
    'Q-2013-FINAL-P01-b': 'Enumerated all 64 products x*y mod 8 for x,y=0..7, independently of any GCD theorem. Rows 0,2,4,6 never contain 1; rows 1,3,5,7 contain 1 only at y=x. Hence the inverse list is exactly 1->1,3->3,5->5,7->7. The source supplementary GCD criterion is retained, but is not a prerequisite for solving the finite table question.',
    'Q-2015-FINAL-P05-a': 'Enumerated y^2 mod 11 for every y in 0..10: [0,1,4,9,5,3,3,5,9,4,1]. The image set is {0,1,3,4,5,9}. The shared original definition explicitly includes y=0, so 0 must be retained. No quadratic-residue theorem is needed beyond the printed definition.',
    'Q-2025S-FINAL-P03-a': 'Write positive x=7q+r, 0<=r<7. Distances to the adjacent multiples are r and 7-r; both must exceed 2, so 2<r<5 and r is 3 or 4. More distant multiples cannot violate the condition. Enumerating x=1..140 against nearby multiples independently confirms exactly residues {3,4}. Only part (a) is selected; the later CRT/counting part (b) is excluded.',
    'Q-2017-MID-P04-b': 'For printed integer a,b and m>1, a-b=k*m for integer k. Multiplying the equality by 2 gives 2a-2b=k*(2m), proving True with the modulus scaled too. Exhaustive a,b=-12..12, m=2..12 checks supplement this general proof.',
    'Q-2019-MID-P09-a': 'The shared original premise is a=11 mod 19 and b=3 mod 19. Subtraction gives c=11-3=8, in the required interval 0..18. Every other representative differs by 19, so 8 is unique in that interval.',
    'Q-2019-MID-P09-c': 'Use the same supplied residues. The exponent applies only to b: a*b^2=11*3^2=99=5*19+4, hence c=4 in 0..18. Independent checks also test arbitrary supplied representatives a=11+19u,b=3+19v.',
}
REVIEWED_PAGES = [
    ['2013-final.pdf', 3], ['2014-final.pdf', 4], ['2015-final.pdf', 10],
    ['2017-midterm.pdf', 6], ['2019-midterm.pdf', 8], ['2019-midterm.pdf', 11],
    ['COMP2711_S2025_Midterm.pdf', 11], ['COMP2711_S2025_Final.pdf', 4],
]


def now():
    return datetime.now(timezone.utc).isoformat()


def event(name, **fields):
    with (CHAPTER / 'events.jsonl').open('a') as out:
        out.write(json.dumps(dict(time=now(), event=name, sourceId='l1-12', **fields), ensure_ascii=False) + '\n')


def tree_hash(directory):
    digest = hashlib.sha256()
    for file in sorted(directory.rglob('*')):
        if file.is_file():
            digest.update(str(file.relative_to(directory)).encode())
            digest.update(bytes.fromhex(s.sha(file)))
    return digest.hexdigest()


def independent_checks():
    def divides(a, b):
        return (a == 0 and b == 0) or (a != 0 and b % a == 0)
    for a in range(-10, 11):
        for b in range(-10, 11):
            for c in range(-10, 11):
                if divides(a, c) and divides(b, c):
                    assert divides(a*b, c*c)
    assert divides(1, -1) and divides(-1, 1) and 1 != -1
    for a in range(1, 200, 2):
        assert (a*a-1) % 8 == 0
    for x in range(-100, 101):
        for m in range(1, 13):
            for multiple in range(1, 13):
                assert (x % (m*multiple)) % m == x % m
    for a in range(2, 101):
        for m in range(2, 13):
            for n in range(2, 13):
                assert (a % (m*n)) % n == a % n
    assert (8 % 6) % 3 == 2 and 8 % 2 == 0
    assert {x: [y for y in range(8) if x*y % 8 == 1] for x in range(8)} == {0: [], 1: [1], 2: [], 3: [3], 4: [], 5: [5], 6: [], 7: [7]}
    assert [y*y % 11 for y in range(11)] == [0, 1, 4, 9, 5, 3, 3, 5, 9, 4, 1]
    safe = [x for x in range(1, 141) if all(abs(x-7*k) > 2 for k in range(-1, 23))]
    assert set(x % 7 for x in safe) == {3, 4}
    for a in range(-12, 13):
        for b in range(-12, 13):
            for m in range(2, 13):
                if (a-b) % m == 0:
                    assert (2*a-2*b) % (2*m) == 0
    assert (11-3) % 19 == 8 and (11*3**2) % 19 == 4
    for u in range(-12, 13):
        for v in range(-12, 13):
            a, b = 11+19*u, 3+19*v
            assert (a-b) % 19 == 8 and (a*b*b) % 19 == 4


def main():
    completion = {}
    for chapter_id, count in [('l1-12', 31), ('l1-13', 27), ('l1-14', 34)]:
        directory = s.ROOT / 'chapters' / chapter_id
        manifest = json.loads((directory / 'manifest.json').read_text())
        assert manifest['pageCount'] == count and len(manifest['pages']) == count
        assert all(p['page'] == i+1 and p['status'] == 'written' for i, p in enumerate(manifest['pages']))
        events = [json.loads(line) for line in (directory / 'events.jsonl').read_text().splitlines()]
        written = [e for e in events if e['event'] == 'page_written']
        assert {e['page'] for e in written} == set(range(1, count+1))
        completion[chapter_id] = max(e['time'] for e in written)
    latest_completion = max(completion.values())
    started = now()
    assert datetime.fromisoformat(started) > datetime.fromisoformat(latest_completion)
    config_path = CHAPTER / 'course.config.json'
    config = json.loads(config_path.read_text())
    assert [t['slug'] for t in config['topics']] == list(SELECTION)
    unmodified_config = {**config, 'topics': [{k: v for k, v in t.items() if k != 'questions'} for t in config['topics']]}
    kb_before = tree_hash(s.KB)
    response_before = tree_hash(CHAPTER / 'responses')
    event('practice_selection_started', phase='snapshot production after independent source review', basis='all 92 first-version explanations remain written and unchanged', allChaptersLastWritten=completion)
    independent_checks()
    results = []
    for topic in config['topics']:
        topic['questions'] = SELECTION[topic['slug']]
        for qid in topic['questions']:
            source, = s.KB.glob(qid + ' - *.md')
            text = source.read_text()
            meta = metadata_fields(text)
            assert meta['verification_status'] == 'verified' and meta['answer_source'] == 'official'
            question, stems = s.printed_question(text, CHAPTER)
            restoration = None
            if qid.startswith('Q-2019-MID-P06-'):
                question = 'Prove or disprove the following statements:\n\n' + question
                restoration = 'Restored the exact shared printed instruction from original 2019-midterm.pdf physical page 8; the atomic KB note omits this instruction. The selected printed subpart itself is unchanged.'
            stem_records = []
            for stem in stems:
                stem_file = s.KB / 'Stems' / (stem + '.md')
                stem_meta = metadata_fields(stem_file.read_text())
                stem_records.append(dict(id=stem_meta['id'], sourceNote=s.snapshot(stem_file, CHAPTER, 'notes'), sourceNoteSha256=s.sha(stem_file), page=stem_meta['source_page']))
            paper = s.REPO / meta['source_pdf']
            answers = answer_fields(text)
            record = dict(id=qid, topic=topic['slug'], sourceNote=s.snapshot(source, CHAPTER, 'notes'), sourceNoteSha256=s.sha(source),
                          stems=stems, stemSources=stem_records, stemPages=sorted({x['page'] for x in stem_records}),
                          paper=meta['source_paper'].replace('[[', '').replace(']]', ''), pdf=s.snapshot(paper, CHAPTER, 'papers'), pdfSha256=s.sha(paper),
                          page=meta['source_page'], solutionPages=meta.get('solution_page', []), number=meta['question_number'], marks=meta.get('marks'),
                          verificationStatus='verified', answerSource='official', questionMarkdown=question, independentVerification=CHECKS[qid],
                          originalSourceIds=[qid], **answers)
            if restoration:
                record['originalRestoration'] = restoration
            assert answers['officialMarkdown'] and answers['solutionMarkdown'] and '[[' not in question
            results.append(record)
    assert len(results) == 12 and len({q['id'] for q in results}) == 12
    assert unmodified_config == {**config, 'topics': [{k: v for k, v in t.items() if k != 'questions'} for t in config['topics']]}
    (CHAPTER / 'sources' / 'figures').mkdir(parents=True, exist_ok=True)
    (CHAPTER / 'practice.json').write_text(json.dumps(results, ensure_ascii=False, indent=2) + '\n')
    config_path.write_text(json.dumps(config, ensure_ascii=False, indent=2) + '\n')
    assert tree_hash(s.KB) == kb_before and tree_hash(CHAPTER / 'responses') == response_before
    for q in results:
        assert s.sha(CHAPTER / q['sourceNote']) == q['sourceNoteSha256']
        assert s.sha(CHAPTER / q['pdf']) == q['pdfSha256']
        for stem in q['stemSources']:
            assert s.sha(CHAPTER / stem['sourceNote']) == stem['sourceNoteSha256']
    rows = ['# L1.12 practice answer review', '',
            'Selection is based on the unchanged first-version 92 page explanations, all written before this snapshot phase. No explanations were revised and no course build ran.', '',
            f'Snapshot phase started (UTC): `{started}`.', f'Latest explanation page_written (UTC): `{latest_completion}`.',
            'Completion gate: ' + json.dumps(completion, ensure_ascii=False) + '.', '',
            '## Scope and provenance', '',
            'Four themes retain three original printed subparts each; checksum/hash/pseudorandom applications retain zero matching exercises. No mock, adapted or filler exercise is added. No selected printed subpart was split further or merged; every record has one originalSourceIds entry. Parent-problem total marks are never assigned to an unmarked subpart.', '',
            'Every selected question and its answer was visually compared with these source PDF physical pages: ' + '; '.join(f'{name} p.{page}' for name, page in REVIEWED_PAGES) + '.', '',
            'All selected items are text/formula questions without source diagrams. Required shared stems are copied with hashes and full wording; no diagram was discarded. sources/figures is reserved locally but no figure was fabricated. The common prove/disprove instruction missing from the 2019 Problem 6 atomic notes is restored exactly from its PDF and recorded in originalRestoration.', '',
            '## Independent verification', '']
    for topic in config['topics']:
        rows += [f"### {topic['title']} ({topic['slug']})", '']
        if not topic['questions']:
            rows += ['0 exercises. Searched the KB Question sections for checksum, check digit, ISBN, UPC, hash/hashing, pseudorandom, and linear-congruential-generator terminology. No directly matched original exercise was located. Generic modular puzzles were not substituted for the specific applications taught here.', '']
        for qid in topic['questions']:
            q = next(q for q in results if q['id'] == qid)
            rows += [f"- **{qid}** — {q['paper']}, printed {q['number']}, physical p.{q['page']}. {CHECKS[qid]}"]
        rows += ['']
    rows += ['## Exclusions and answer preservation', '',
             '- Q-2025S-MID-P08-a: answer_source is derived; printed official proof supplies only one direction. Excluded from the official-answer-only selection.',
             '- Q-2017-MID-P04-a: the official last comparison incorrectly repeats 5 instead of b+c=8. Excluded rather than exposing a defective official line as a selected verified answer.',
             '- CRT, Fermat, extended Euclid and prime-factorization exercises need later chapter prerequisites and are excluded. The inverse table is solved by direct 8x8 product enumeration, independent of the retained supplementary GCD criterion.',
             '- Q-2024S-MID-P08: a general modular-average puzzle does not directly exercise checksum/hash/pseudorandom generation, so it was not used to fill the application theme.', '',
             'Official Answer and Supplementary Explanation are preserved through the shared two-part parser, with original source note and PDF SHA-256. English source answers are not translated or rewritten. Whole selected KB and L1.12 response trees remain byte-identical across this script run.', '',
             f'KB Question tree SHA-256: `{kb_before}`.', f'L1.12 response tree SHA-256: `{response_before}`.', '']
    audit = CHAPTER / 'sources' / 'audit' / 'l1-12-question-review.md'
    audit.parent.mkdir(parents=True, exist_ok=True)
    audit.write_text('\n'.join(rows))
    event('practice_selection_completed', questions=len(results), topicCounts={slug: len(qids) for slug, qids in SELECTION.items()},
          practiceSha256=s.sha(CHAPTER / 'practice.json'), configSha256=s.sha(config_path), auditSha256=s.sha(audit),
          allChaptersLastWritten=completion, latestExplanationWrittenAt=latest_completion)
    print(json.dumps(dict(chapter='l1-12', questions=len(results), topicCounts={slug: len(qids) for slug, qids in SELECTION.items()},
                          latestExplanationWrittenAt=latest_completion, snapshotStartedAt=started,
                          practiceSha256=s.sha(CHAPTER / 'practice.json'), kbQuestionsTreeUnchanged=kb_before,
                          responsesTreeUnchanged=response_before), ensure_ascii=False, indent=2))


if __name__ == '__main__':
    main()
