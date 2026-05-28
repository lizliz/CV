PYTHON ?= python3
PORT ?= 8000

.PHONY: cv html server

cv:
	cd CompileCV && $(PYTHON) WebsiteToCV.py

html:
	cd CompileCV && $(PYTHON) GeneratePublicationJSON.py

server:
	cd Website/ElizabethMunch && $(PYTHON) -m http.server $(PORT)

help: 
	@echo "Makefile for Elizabeth Munch's CV and website"
	@echo "Usage:"
	@echo "  make cv       - Generate the CV from the website content"
	@echo "  make html     - Generate publication JSON for the website"
	@echo "  make server   - Start a local server to view the website (default port: 8000)"
	@echo "  make help     - Show this help message"