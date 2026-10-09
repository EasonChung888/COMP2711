"""Use the shared, code-aware two-section answer parser from Python builders."""
import json
import os
from pathlib import Path
import shutil
import subprocess

def _read_fields(text, mode):
    node=os.environ.get('CODEX_NODE') or shutil.which('node')
    if not node:
        candidate=Path.home()/'.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node'
        if candidate.is_file():
            node=str(candidate)
    if not node:
        raise RuntimeError('Node runtime is required for the shared answer parser')
    script=Path(__file__).with_name('practice-answers.mjs')
    result=subprocess.run([node,str(script),mode],input=text,text=True,
                          capture_output=True,check=True)
    return json.loads(result.stdout)


def answer_fields(text):
    return _read_fields(text, 'fields')


def metadata_fields(text):
    return _read_fields(text, 'metadata')
