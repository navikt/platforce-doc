# Install NodeJS

How to install NodeJS on your computer.

## Prerequisites

=== "Windows"

    - [Scoop](install-scoop.md)

=== "macOS"

    - [Homebrew](install-homebrew.md)

## Installation

=== "Windows"

    ```PowerShell
    scoop install scoop install nodejs-lts
    ```

=== "macOS"

    ```bash
    brew install node
    ```

### Advanced Installation

#### Additional Prerequisites

=== "macOS"

    - [Node Version Manager (NVM)](install-nvm.md)

#### Steps

=== "macOS"

    ```bash
    nvm install --lts
    nvm use --lts
    ```

### Resources

- [NodeJS](https://nodejs.org/)
