.PHONY: all install local

all: install local

install:
	poetry install

local: copyreadme
	poetry run mkdocs serve

copyreadme:
	python main.py