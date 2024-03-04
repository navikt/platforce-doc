# Welcome to the Platforce documentation

Platforce Documentation for Developers in NAV on the Salesforce Platform

## Local development

### 1. Install pipx

#### On macOS:

```bash
brew install pipx
pipx ensurepath
```
### On Linux:

```bash
sudo apt update
sudo apt install pipx
pipx ensurepath
```

### On Windows:

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
