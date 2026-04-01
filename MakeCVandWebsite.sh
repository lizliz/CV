#!/bin/sh
set -eu

SCRIPT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)

cd "$SCRIPT_DIR/CompileCV"
python3 WebsiteToCV.py
python3 GeneratePublicationJSON.py