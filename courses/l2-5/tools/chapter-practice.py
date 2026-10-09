from practice_answers import answer_fields, metadata_fields
"""Snapshot verified, original past-paper questions for L1.1–L1.4."""
from pathlib import Path
import hashlib
import json
import re
import shutil

ROOT = Path(__file__).resolve().parents[1]
REPO = ROOT.parents[1]
KB = REPO / 'knowledge_base' / '04-Questions'
CHAPTERS = ('l1-1', 'l1-2', 'l1-3', 'l1-4')


def sha(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def section(text, name):
    match = re.search(r'^## ' + re.escape(name) + r'\s*\n(.*?)(?=^## |\Z)', text, re.M | re.S)
    return match.group(1).strip() if match else ''


def snapshot(source, chapter, kind):
    target = chapter / 'sources' / kind / source.name
    target.parent.mkdir(parents=True, exist_ok=True)
    if not target.exists() or sha(source) != sha(target):
        shutil.copy2(source, target)
    return str(target.relative_to(chapter))


def local_media(text, chapter):
    def replace(match):
        target = match.group(1)
        if target.startswith('knowledge_base/') and target.lower().endswith(('.png', '.jpg', '.jpeg', '.svg')):
            source = REPO / target
            assert source.is_file(), source
            rel = snapshot(source, chapter, 'figures')
            return f'![原题图示](../{rel})'
        if '.pdf' in target:
            return ''
        raise ValueError(f'Unresolved source embed: {target}')
    return re.sub(r'!\[\[([^\]]+)\]\]', replace, text).strip()


def printed_question(text, chapter):
    question = section(text, 'Question')
    assert question
    pattern = r'!?\[\[(STEM-[^\]#]+)(?:#[^\]]+)?\]\]'
    stems = list(dict.fromkeys(re.findall(pattern, question)))
    question = re.sub(r'^Shared (?:context|printed context):.*$', '', question, flags=re.M)
    question = re.sub(pattern, '', question).strip()
    contexts = []
    for stem in stems:
        source = KB / 'Stems' / f'{stem}.md'
        assert source.is_file(), source
        snapshot(source, chapter, 'notes')
        wording = section(source.read_text(), 'Shared printed wording')
        assert wording, stem
        contexts.append(local_media(wording, chapter))
    result = '\n\n'.join(contexts + [local_media(question, chapter)]).strip()
    assert result and '[[' not in result, result
    return result, stems


def main():
    total = 0
    for chapter_id in CHAPTERS:
        chapter = ROOT / 'chapters' / chapter_id
        config = json.loads((chapter / 'course.config.json').read_text())
        manifest = json.loads((chapter / 'manifest.json').read_text())
        assert len(manifest['pages']) == len([p for p in manifest['pages'] if p['status'] == 'written'])
        results = []
        seen = set()
        for topic in config['topics']:
            for question_id in topic['questions']:
                assert question_id not in seen, question_id
                seen.add(question_id)
                matches = list(KB.glob(question_id + ' - *.md'))
                assert len(matches) == 1, question_id
                source = matches[0]
                text = source.read_text()
                meta = metadata_fields(text)
                assert meta['verification_status'] == 'verified', question_id
                assert meta['answer_source'] == 'official', question_id
                question, stems = printed_question(text, chapter)
                answers = answer_fields(text)
                paper = REPO / meta['source_pdf']
                assert paper.is_file(), paper
                results.append({
                    'id': question_id, 'topic': topic['slug'],
                    'sourceNote': snapshot(source, chapter, 'notes'),
                    'sourceNoteSha256': sha(source), 'stems': stems,
                    'paper': meta['source_paper'].replace('[[', '').replace(']]', ''),
                    'pdf': snapshot(paper, chapter, 'papers'), 'pdfSha256': sha(paper),
                    'page': meta['source_page'], 'solutionPages': meta.get('solution_page', []),
                    'number': meta['question_number'], 'marks': meta.get('marks'),
                    'verificationStatus': meta['verification_status'],
                    'answerSource': meta['answer_source'],
                    'questionMarkdown': question, **answers
                })
        (chapter / 'practice.json').write_text(json.dumps(results, ensure_ascii=False, indent=2) + '\n')
        print(f'{chapter_id}: {len(results)} verified original questions')
        total += len(results)
    print(f'Total: {total}')


if __name__ == '__main__':
    main()
