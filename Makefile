PYTHON ?= python3
PORT ?= 8000

.PHONY: cv html server

cv:
	cd CompileCV && $(PYTHON) WebsiteToCV.py

html:
	cd CompileCV && $(PYTHON) GeneratePublicationJSON.py

server:
	cd Website/ElizabethMunch && $(PYTHON) -m http.server $(PORT)