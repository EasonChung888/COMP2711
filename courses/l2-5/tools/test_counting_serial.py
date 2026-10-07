"""Verify PPTX serial guards and saved-response recovery in an isolated copy."""
import contextlib
import hashlib
import importlib.util
import io
import json
from pathlib import Path
import shutil
import tempfile
import unittest
from unittest.mock import patch
from zipfile import ZipFile

spec=importlib.util.spec_from_file_location('counting_serial',Path(__file__).with_name('counting-serial.py'))
serial=importlib.util.module_from_spec(spec)
spec.loader.exec_module(serial)
shared=serial.shared
SITE=Path(__file__).resolve().parents[1]

class CountingRecovery(unittest.TestCase):
    def test_no_prefetch_and_reuse_saved_response(self):
        with tempfile.TemporaryDirectory() as temporary:
            site=Path(temporary)
            chapter=site/'chapters/l1-6'
            for folder in ('sources','responses','slides','pages','page-text','work'):
                (chapter/folder).mkdir(parents=True)
            source=chapter/'sources/L1.6.pptx'
            shutil.copy2(SITE/'chapters/l1-6/sources/L1.6.pptx',source)
            digest=hashlib.sha256(source.read_bytes()).hexdigest()
            meta={'id':'l1-6','source':'sources/L1.6.pptx','sourceSha256':digest,'pageCount':2}
            shared.write_json(chapter/'chapter.meta.json',meta)
            shared.write_json(chapter/'manifest.json',dict(sourceId='l1-6',sourceSha256=digest,pageCount=2,pages=[]))
            reads=[]
            real_read=ZipFile.read
            def guarded_read(package,member,*args,**kwargs):
                reads.append(member)
                if member=='ppt/slides/slide2.xml':
                    raise AssertionError('Future slide was read')
                return real_read(package,member,*args,**kwargs)
            def convert(command,**kwargs):
                if command[0]=='pdftoppm':
                    Path(command[-1]+'.png').write_bytes(b'isolated rendered image')
            with patch.object(shared,'SITE',site),patch.object(serial.subprocess,'run',side_effect=convert),patch.object(ZipFile,'read',guarded_read),contextlib.redirect_stdout(io.StringIO()):
                serial.prepare('l1-6',1)
                self.assertIn('ppt/slides/slide1.xml',reads)
                self.assertNotIn('ppt/slides/slide2.xml',reads)
                before=len(reads)
                with self.assertRaisesRegex(SystemExit,'Commit current page'):
                    serial.prepare('l1-6',2)
                self.assertEqual(len(reads),before)
                with self.assertRaisesRegex(SystemExit,'Complete l1-6'):
                    serial.prepare('l1-7',1)
            response=chapter/'responses/001.md'
            original=(SITE/'chapters/l1-6/responses/001.md').read_bytes()
            response.write_bytes(original)
            with patch.object(shared,'SITE',site),patch.object(shared.subprocess,'run',side_effect=RuntimeError('interrupted render')):
                with self.assertRaisesRegex(RuntimeError,'interrupted render'):
                    shared.commit('l1-6',1)
            saved=shared.read_json(chapter/'manifest.json')['pages'][0]
            self.assertEqual(saved['status'],'prepared')
            self.assertEqual(saved['responseSha256'],hashlib.sha256(original).hexdigest())
            self.assertEqual(response.read_bytes(),original)
            # A saved response may not be silently replaced during recovery.
            response.write_text('tampered original response '*4)
            with patch.object(shared,'SITE',site):
                with self.assertRaisesRegex(SystemExit,'previously saved response changed'):
                    shared.commit('l1-6',1)
            response.write_bytes(original)
            def render(command,**kwargs):
                if command[-3:]==['build-page','l1-6','1']:
                    (chapter/'pages/001.html').write_text('<html>saved original response</html>')
            with patch.object(shared,'SITE',site),patch.object(shared.subprocess,'run',side_effect=render),contextlib.redirect_stdout(io.StringIO()):
                shared.commit('l1-6',1)
                shared.audit('l1-6')
                self.assertEqual(response.read_bytes(),original)
                with self.assertRaisesRegex(SystemExit,'already written'):
                    shared.commit('l1-6',1)
                with self.assertRaisesRegex(SystemExit,'Next permitted page'):
                    serial.prepare('l1-6',3)
            events=shared.events(chapter)
            self.assertEqual(sum(e['event']=='response_saved' for e in events),1)
            self.assertEqual(sum(e['event']=='page_written' for e in events),1)

if __name__=='__main__':
    unittest.main()
