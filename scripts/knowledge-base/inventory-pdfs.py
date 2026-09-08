#!/usr/bin/env python3
"""Build a read-only inventory of the COMP2711 past-paper PDF corpus."""

from __future__ import annotations

import argparse
import hashlib
import json
from pathlib import Path
from typing import Any

from pypdf import PdfReader


INVENTORY_SNAPSHOT_DATE = "2026-09-08"


def build_inventory(root: Path, overrides: dict[str, dict[str, Any]]) -> dict[str, Any]:
    """Return metadata for every sorted PDF under ``root/past_paper``."""
    root = root.resolve()
    pdf_paths = sorted((root / "past_paper").glob("*.pdf"))
    relative_paths = {path.relative_to(root).as_posix() for path in pdf_paths}
    unknown_overrides = sorted(set(overrides) - relative_paths)
    if unknown_overrides:
        raise ValueError(f"Overrides reference unknown sources: {unknown_overrides}")

    sources: list[dict[str, Any]] = []
    for path in pdf_paths:
        relative_path = path.relative_to(root).as_posix()
        override = overrides.get(relative_path, {})
        reader = PdfReader(path, strict=False)
        page_texts = [page.extract_text() or "" for page in reader.pages]
        text_char_count = sum(len(text) for text in page_texts)
        low_text_pages = [
            index
            for index, text in enumerate(page_texts, start=1)
            if len(text.strip()) < 80
        ]
        if text_char_count == 0:
            text_layer_status = "none"
        elif low_text_pages:
            text_layer_status = "partial"
        else:
            text_layer_status = "full"

        sources.append(
            {
                "source_pdf": relative_path,
                "sha256": hashlib.sha256(path.read_bytes()).hexdigest(),
                "page_count": len(reader.pages),
                "text_char_count": text_char_count,
                "low_text_pages": low_text_pages,
                "text_layer_status": text_layer_status,
                "duplicate_of": override.get("duplicate_of"),
                "duplicate_reason": override.get("reason"),
            }
        )

    sources_by_path = {source["source_pdf"]: source for source in sources}
    for source in sources:
        duplicate_of = source["duplicate_of"]
        if duplicate_of is None:
            continue
        canonical = sources_by_path.get(duplicate_of)
        if canonical is None:
            raise ValueError(
                f"Duplicate target {duplicate_of!r} for {source['source_pdf']!r} is absent"
            )
        if canonical["sha256"] != source["sha256"]:
            raise ValueError(
                f"Duplicate override for {source['source_pdf']!r} has a different SHA-256"
            )

    return {
        "schema_version": 1,
        "generated_at": INVENTORY_SNAPSHOT_DATE,
        "sources": sources,
    }


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--root", required=True, type=Path)
    parser.add_argument("--overrides", required=True, type=Path)
    parser.add_argument("--output", required=True, type=Path)
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    overrides = json.loads(args.overrides.read_text(encoding="utf-8"))
    inventory = build_inventory(args.root, overrides)
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(
        f"{json.dumps(inventory, ensure_ascii=False, indent=2, sort_keys=True)}\n",
        encoding="utf-8",
    )


if __name__ == "__main__":
    main()
