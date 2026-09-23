"""Exercise the interrupted-page guard without touching real course files."""
import hashlib
import importlib.util
import json
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

SCRIPT = Path(__file__).with_name('chapter-serial.py')
spec = importlib.util.spec_from_file_location('chapter_serial', SCRIPT)
serial = importlib.util.module_from_spec(spec)
spec.loader.exec_module(serial)


class SerialRecovery(unittest.TestCase):
    def test_saved_response_recovers_after_render_failure(self):
        with tempfile.TemporaryDirectory() as temporary:
            site = Path(temporary)
            chapter = site/'chapters'/'l1-1'
            for folder in ('sources','responses','slides','pages','page-text'):
                (chapter/folder).mkdir(parents=True)
            source = chapter/'sources'/'L1.1.pdf'
            source.write_bytes(b'isolated source fixture')
            (chapter/'slides'/'001.png').write_bytes(b'isolated page image')
            digest = hashlib.sha256(source.read_bytes()).hexdigest()
            image_digest = hashlib.sha256((chapter/'slides'/'001.png').read_bytes()).hexdigest()
            (chapter/'chapter.meta.json').write_text(json.dumps({
                'id':'l1-1','source':'sources/L1.1.pdf','sourceSha256':digest,'pageCount':2}))
            manifest = {'sourceId':'l1-1','sourceSha256':digest,'pageCount':2,'pages':[
                {'sourceId':'l1-1','page':1,'prompt':'解释一下','status':'prepared',
                 'response':'responses/001.md','image':'slides/001.png','html':'pages/001.html'}]}
            manifest['pages'][0]['imageSha256'] = image_digest
            (chapter/'manifest.json').write_text(json.dumps(manifest))
            response = chapter/'responses'/'001.md'
            response.write_text('# Complete explanation\n\n' + 'This is the original response. '*4)
            original = response.read_bytes()
            with patch.object(serial,'SITE',site), patch.object(serial.subprocess,'run',side_effect=RuntimeError('render interrupted')):
                with self.assertRaisesRegex(RuntimeError,'render interrupted'):
                    serial.commit('l1-1',1)
            saved = json.loads((chapter/'manifest.json').read_text())['pages'][0]
            self.assertEqual(saved['status'],'prepared')
            self.assertEqual(saved['responseSha256'],hashlib.sha256(original).hexdigest())
            self.assertEqual(response.read_bytes(),original)

            def render(command, **_):
                if command[-3:] == ['build-page','l1-1','1']:
                    (chapter/'pages'/'001.html').write_text('<html>original response displayed</html>')
            with patch.object(serial,'SITE',site), patch.object(serial.subprocess,'run',side_effect=render):
                serial.commit('l1-1',1)
                serial.audit('l1-1')
                with self.assertRaisesRegex(SystemExit,'already written'):
                    serial.commit('l1-1',1)
                with self.assertRaisesRegex(SystemExit,'Next permitted page'):
                    serial.prepare('l1-1',3)
                response.write_text('tampered')
                with self.assertRaisesRegex(SystemExit,'Artifact hash mismatch'):
                    serial.audit('l1-1')
                response.write_bytes(original)
                source.write_bytes(b'changed PDF')
                with self.assertRaisesRegex(SystemExit,'Source hash mismatch'):
                    serial.audit('l1-1')


if __name__ == '__main__':
    unittest.main()
