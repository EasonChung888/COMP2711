"""Prepare one PDF page and require a verified response before advancing."""
import argparse
import hashlib
import json
import subprocess
from datetime import datetime, timezone
from pathlib import Path
from pypdf import PdfReader


SITE = Path(__file__).resolve().parents[1]
ORDER = ('l1-1', 'l1-2', 'l1-3', 'l1-4')


def now():
    return datetime.now(timezone.utc).isoformat()


def sha256(file):
    return hashlib.sha256(file.read_bytes()).hexdigest()


def read_json(file):
    return json.loads(file.read_text(encoding='utf-8'))


def write_json(file, value):
    temporary = file.with_suffix(file.suffix + '.tmp')
    temporary.write_text(json.dumps(value, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    temporary.replace(file)


def chapter(chapter_id):
    if chapter_id not in ORDER:
        raise SystemExit(f'Unknown chapter: {chapter_id}')
    directory = SITE / 'chapters' / chapter_id
    meta = read_json(directory / 'chapter.meta.json')
    manifest = read_json(directory / 'manifest.json')
    source = directory / meta['source']
    if sha256(source) != meta['sourceSha256'] or manifest['sourceSha256'] != meta['sourceSha256']:
        raise SystemExit(f'Source hash mismatch: {chapter_id}')
    if manifest['pageCount'] != meta['pageCount'] or manifest['sourceId'] != chapter_id:
        raise SystemExit(f'Chapter metadata mismatch: {chapter_id}')
    return directory, meta, manifest, source


def events(directory):
    file = directory / 'events.jsonl'
    if not file.exists():
        return []
    return [json.loads(line) for line in file.read_text(encoding='utf-8').splitlines() if line.strip()]


def event(directory, kind, page, **extra):
    file = directory / 'events.jsonl'
    with file.open('a', encoding='utf-8') as stream:
        stream.write(json.dumps({'time': now(), 'event': kind, 'sourceId': directory.name,
                                 'page': page, **extra}, ensure_ascii=False) + '\n')


def audit(chapter_id):
    directory, meta, manifest, _ = chapter(chapter_id)
    records = manifest['pages']
    if len(records) > meta['pageCount']:
        raise SystemExit(f'Too many pages: {chapter_id}')
    if [record['page'] for record in records] != list(range(1, len(records) + 1)):
        raise SystemExit(f'Non-sequential page records: {chapter_id}')
    if sum(record['status'] == 'prepared' for record in records) > 1:
        raise SystemExit(f'Multiple prepared pages: {chapter_id}')
    log = events(directory)
    for record in records:
        number = record['page']
        if record['sourceId'] != chapter_id or record['prompt'] != '解释一下':
            raise SystemExit(f'Page identity or prompt mismatch: {chapter_id}/{number}')
        if record['status'] == 'written':
            response = directory / record['response']
            image = directory / record['image']
            html = directory / record['html']
            if not all(file.exists() for file in (response, image, html)):
                raise SystemExit(f'Missing artifact: {chapter_id}/{number}')
            if (sha256(response) != record['responseSha256']
                    or sha256(image) != record['imageSha256']
                    or sha256(html) != record['htmlSha256']):
                raise SystemExit(f'Artifact hash mismatch: {chapter_id}/{number}')
            if not any(item['event'] == 'page_written' and item['page'] == number for item in log):
                raise SystemExit(f'Missing page_written event: {chapter_id}/{number}')
        elif record['status'] != 'prepared':
            raise SystemExit(f'Unexpected page state: {chapter_id}/{number}')
    if any(record['status'] == 'prepared' for record in records[:-1]):
        raise SystemExit(f'Prepared page is not last: {chapter_id}')
    return directory, meta, manifest


def check_prior_chapters(chapter_id):
    for prior in ORDER[:ORDER.index(chapter_id)]:
        _, meta, manifest = audit(prior)
        if len(manifest['pages']) != meta['pageCount'] or any(
                page['status'] != 'written' for page in manifest['pages']):
            raise SystemExit(f'Complete {prior} before {chapter_id}')


def show(chapter_id):
    directory, _, manifest = audit(chapter_id)
    if not manifest['pages'] or manifest['pages'][-1]['status'] != 'prepared':
        raise SystemExit('No current prepared page')
    page = manifest['pages'][-1]
    content = (directory / page['text']).read_text(encoding='utf-8')
    print(f"来源：{chapter_id} · 第 {page['page']} 页\n提示词：解释一下\n\n{content}\n\n原页图：{directory / page['image']}")


def prepare(chapter_id, number):
    check_prior_chapters(chapter_id)
    directory, meta, manifest = audit(chapter_id)
    if manifest['pages'] and manifest['pages'][-1]['status'] == 'prepared':
        raise SystemExit('Finish or resume the prepared page before another prepare')
    expected = len(manifest['pages']) + 1
    if number != expected or number > meta['pageCount']:
        raise SystemExit(f'Next permitted page is {chapter_id}/{expected}')
    page_id = f'{number:03d}'
    image = directory / 'slides' / f'{page_id}.png'
    text = directory / 'page-text' / f'{page_id}.txt'
    source = directory / meta['source']
    event(directory, 'prepare_started', number, prompt='解释一下')
    image_command = ['pdftoppm', '-f', str(number), '-l', str(number), '-png',
                     '-scale-to', '1500', '-singlefile', str(source), str(image.with_suffix(''))]
    try:
        subprocess.run(image_command, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.PIPE)
        # Access only this page's content stream. PdfReader first reads PDF structure.
        page_text = PdfReader(str(source)).pages[number - 1].extract_text(extraction_mode='layout')
        text.write_text(page_text or '', encoding='utf-8')
    except Exception as error:
        event(directory, 'prepare_failed', number, reason=str(error))
        raise
    record = {'sourceId': chapter_id, 'page': number, 'prompt': '解释一下',
              'image': f'slides/{page_id}.png', 'text': f'page-text/{page_id}.txt',
              'response': f'responses/{page_id}.md', 'html': f'pages/{page_id}.html',
              'status': 'prepared', 'preparedAt': now(), 'topic': None,
              'imageSha256': sha256(image)}
    manifest['pages'].append(record)
    write_json(directory / 'manifest.json', manifest)
    event(directory, 'page_presented', number, image=record['image'],
          imageSha256=record['imageSha256'])
    show(chapter_id)


def commit(chapter_id, number):
    check_prior_chapters(chapter_id)
    directory, _, manifest = audit(chapter_id)
    if not manifest['pages'] or manifest['pages'][-1]['page'] != number:
        raise SystemExit('Only the current page can be committed')
    page = manifest['pages'][-1]
    if page['status'] != 'prepared':
        raise SystemExit('The current page is already written')
    response = directory / page['response']
    if not response.exists() or len(response.read_text(encoding='utf-8').strip()) < 40:
        raise SystemExit('A complete original response is required')
    digest = sha256(response)
    if page.get('responseSha256') and page['responseSha256'] != digest:
        raise SystemExit('A previously saved response changed')
    if not page.get('responseSavedAt'):
        page['responseSha256'] = digest
        page['responseSavedAt'] = now()
        write_json(directory / 'manifest.json', manifest)
        event(directory, 'response_saved', number, response=page['response'], responseSha256=digest)
    subprocess.run(['node', str(SITE / 'tools' / 'chapter-render.mjs'), 'build-page',
                    chapter_id, str(number)], check=True)
    subprocess.run(['node', str(SITE / 'tools' / 'chapter-render.mjs'), 'verify-page',
                    chapter_id, str(number)], check=True)
    html = directory / page['html']
    page['htmlSha256'] = sha256(html)
    page['status'] = 'written'
    page['writtenAt'] = now()
    write_json(directory / 'manifest.json', manifest)
    event(directory, 'page_written', number, responseSha256=digest,
          html=page['html'], htmlSha256=page['htmlSha256'])
    subprocess.run(['node', str(SITE / 'tools' / 'chapter-render.mjs'), 'build-index',
                    chapter_id], check=True)
    print(f'{chapter_id} 第 {number} 页已保存并入站。SHA-256 {digest}')


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('action', choices=('prepare', 'show', 'commit', 'audit'))
    parser.add_argument('chapter_id', choices=ORDER)
    parser.add_argument('page', type=int, nargs='?')
    arguments = parser.parse_args()
    if arguments.action in ('prepare', 'commit') and arguments.page is None:
        parser.error('prepare and commit require a page number')
    {'prepare': prepare, 'show': show, 'commit': commit,
     'audit': lambda chapter_id: audit(chapter_id)}[arguments.action](
        arguments.chapter_id, arguments.page) if arguments.action in ('prepare', 'commit') else (
            show(arguments.chapter_id) if arguments.action == 'show' else audit(arguments.chapter_id))
