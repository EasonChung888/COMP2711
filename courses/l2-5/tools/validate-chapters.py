"""Audit L1.1–L1.4 coverage, provenance, serial logs and offline links."""
from collections import defaultdict
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import hashlib
import json
import re

SITE = Path(__file__).resolve().parents[1]
CHAPTERS = ('l1-1', 'l1-2', 'l1-3', 'l1-4')


def sha(file):
    return hashlib.sha256(file.read_bytes()).hexdigest()


def load(file):
    return json.loads(file.read_text())


class Document(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.links = []
        self.ids = set()
        self.remote_dependencies = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            self.ids.add(attrs['id'])
        for key in ('href', 'src'):
            if key not in attrs:
                continue
            value = attrs[key]
            if key == 'href' and tag not in ('a', 'link'):
                continue
            if value.startswith(('https:', 'http:')):
                if key == 'src' or tag == 'link':
                    self.remote_dependencies.append(value)
            elif not value.startswith(('mailto:', 'javascript:', 'data:')):
                self.links.append(value)


def audit_timing(directory, count):
    log = [json.loads(line) for line in (directory/'events.jsonl').read_text().splitlines() if line.strip()]
    written = {}
    saved = {}
    presented = {}
    for i, event in enumerate(log):
        n = event['page']
        if event['event'] == 'page_presented':
            presented.setdefault(n, i)
        if event['event'] == 'response_saved':
            saved.setdefault(n, i)
        if event['event'] == 'page_written':
            written.setdefault(n, i)
    assert set(written) == set(saved) == set(presented) == set(range(1,count+1)), directory
    for n in range(1,count+1):
        assert presented[n] < saved[n] < written[n], (directory, n)
        if n < count:
            assert written[n] < presented[n+1], (directory, n)
    return len(log)


def main():
    htmls = [SITE/name for name in ('index.html','logic.html','sets-and-functions.html','counting.html')]
    pages = lessons = questions = events = 0
    for chapter_id in CHAPTERS:
        directory = SITE/'chapters'/chapter_id
        meta = load(directory/'chapter.meta.json')
        config = load(directory/'course.config.json')
        manifest = load(directory/'manifest.json')
        practice = load(directory/'practice.json')
        assert sha(directory/meta['source']) == meta['sourceSha256']
        assert config['storagePrefix'] == meta['storagePrefix']
        assert len(manifest['pages']) == meta['pageCount']
        assignment = defaultdict(list)
        for topic in config['topics']:
            assert topic['pages'] == sorted(set(topic['pages'])), topic['slug']
            assignment[topic['slug']] = topic['pages']
            html = directory/'lessons'/f"{topic['slug']}.html"
            assert html.is_file(), html
            body = html.read_text()
            assert body.count('data-lesson-complete=') == 1, html
            assert body.count('data-slide=') == len(topic['pages']), html
            assert body.count('data-attempt=') == len(topic['questions']), html
            assert 'data-lesson="chapters/'+chapter_id+'/lessons/'+topic['slug']+'.html"' in body
            for n in topic['pages']:
                assert f'id="slide-{n:03d}"' in body, (chapter_id, topic['slug'], n)
            htmls.append(html)
            lessons += 1
        ordered = [n for topic in config['topics'] for n in topic['pages']]
        assert sorted(ordered) == list(range(1,meta['pageCount']+1)), chapter_id
        for record in manifest['pages']:
            n = record['page']
            assert record['status'] == 'written' and n in assignment[record['topic']]
            for key, field in (('response','responseSha256'),('image','imageSha256'),('html','htmlSha256')):
                assert sha(directory/record[key]) == record[field], (chapter_id, n, key)
            htmls.append(directory/record['html'])
            pages += 1
        selected = [q for topic in config['topics'] for q in topic['questions']]
        assert selected == [q['id'] for q in practice]
        assert len(selected) == len(set(selected))
        for q in practice:
            assert q['verificationStatus'] == 'verified' and q['answerSource'] == 'official'
            assert sha(directory/q['sourceNote']) == q['sourceNoteSha256']
            assert sha(directory/q['pdf']) == q['pdfSha256']
            assert q['questionMarkdown'] and q['solutionMarkdown'] and q['page'] > 0
            questions += 1
        events += audit_timing(directory,meta['pageCount'])
        htmls += [directory/'index.html',directory/'source-map.html']
    assert (pages,lessons,questions) == (189,22,48)
    documents = {}
    for file in htmls:
        doc = Document()
        doc.feed(file.read_text())
        assert not doc.remote_dependencies, (file,doc.remote_dependencies)
        documents[file.resolve()] = doc
    references = 0
    for file, doc in documents.items():
        for url in doc.links:
            parsed = urlsplit(url)
            target = (file.parent/unquote(parsed.path)).resolve() if parsed.path else file
            assert target.is_file(), (file, url)
            if parsed.fragment and target.suffix == '.html' and target in documents:
                assert unquote(parsed.fragment) in documents[target].ids, (file,url)
            references += 1
    for file in (SITE/'assets').rglob('*.css'):
        for url in re.findall(r'url\(([^)]+)\)', file.read_text()):
            value = url.strip(' "\'')
            if value.startswith('data:'):
                continue
            assert (file.parent/value).resolve().is_file(), (file,value)
    print(f'PASS: {pages} serial pages, {lessons} unique topic lessons, {questions} verified original questions, {events} log events, {len(htmls)} HTML files, {references} local references; source/response/image/HTML/PDF hashes and offline dependencies valid.')


if __name__ == '__main__':
    main()
