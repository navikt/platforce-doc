# Welcome to the Platforce documentation

Platforce Documentation for Developers in NAV on the Salesforce Platform

## Local development

### Prerequisites

Please note the following requirements to be able to run below steps for local development.

- Python 3.11 or later - [Download Python](https://www.python.org/downloads/).

#### on macOS

- [Homebrew](https://brew.sh/)

#### on Windows

- [Scoop](https://scoop.sh/)

### 1. Install pipx

#### On macOS

```bash
brew install pipx
pipx ensurepath
```

#### On Linux

```bash
sudo apt update
sudo apt install pipx
pipx ensurepath
```

#### On Windows

```bash
scoop install pipx
pipx ensurepath
```

### 2. Install Poetry

```bash
pipx install poetry
```

### 2. Install dependencies

```bash
make install
```

### 3. Serve the documentation locally

```bash
make local
```

### 4. All

One command to do step 2 and 3; Install dependencies and serve the documentation locally.

```bash
make all
```

### Utility commands

The following commando will copy the project README.md file to the docs folder as project-readme.me to include  it in the documentation.

This is also rune as part of the `make local` command.

```bash
make copyreadme
```

## Useful links and resources

Here you will fins a list of useful links and resources that are used to create this documentation project.

### Documentation tools

- [MkDocs](https://www.mkdocs.org/)
- [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)
- [PyMdown Extensions](https://facelessuser.github.io/pymdown-extensions/)
- [Pygments](https://pygments.org/)
- [mkdocs-git-revision-date-localized-plugin](https://timvink.github.io/mkdocs-git-revision-date-localized-plugin/)
- [MkDocs Awesome Pages Plugin](https://github.com/lukasgeiter/mkdocs-awesome-pages-plugin)

### Project and Build tools

- [GNU Make (Makefile)](https://www.gnu.org/software/make/)
- [Makefile Tutorial](https://makefiletutorial.com/)
- [Python](https://www.python.org/)
- [Poetry](https://python-poetry.org/)
- [pipx](https://pipx.pypa.io/stable/)
