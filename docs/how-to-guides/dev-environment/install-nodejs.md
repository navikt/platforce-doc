# Install NodeJS

How to install NodeJS on your computer.

## Prerequisites

=== "Windows"

    - [Scoop](install-scoop.md)

=== "macOS"

    - [Homebrew](install-homebrew.md)

## Installation without NVM

=== "Windows"

    ```PowerShell
    scoop install nodejs-lts
    ```

=== "macOS"

    ```bash
    brew install node
    ```

### Installation with NVM

#### Prerequisites

- [Node Version Manager (NVM)](install-nvm.md)

#### Steps

=== "Windows"

    ```PowerShell
    nvm install --lts
    nvm use --lts
    ```

=== "macOS"

    ```bash
    nvm install --lts
    nvm use --lts
    ```

### Resources

- [NodeJS](https://nodejs.org/)
