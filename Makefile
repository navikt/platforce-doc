# Determine the OS
ifeq ($(OS), Windows_NT)
	COPY_CMD = copy
else
	COPY_CMD = cp
endif

.PHONY: all install local

all: install local

install:
	poetry install

local: copyreadme
	poetry run mkdocs serve

copyreadme:
	$(COPY_CMD) README.md docs/project-readme.md
