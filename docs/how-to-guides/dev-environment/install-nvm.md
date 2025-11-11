# Install NVM

How to install Node Version Manager on your macOS computer.

## Prerequisites

=== "Windows"

    - [Scoop](install-scoop.md)

=== "macOS"

    No prerequisite needed.

## Installation

=== "Windows"

    `scoop install main/nvm`

=== "macOS"

    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh
    ```

After installation, restart your terminal and run:

    ```bash
    nvm install --lts
    ```
    
### Resources

- [Node Version Manager](https://github.com/nvm-sh/nvm)
- [NVM on Windows](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows#install-nvm-windows-nodejs-and-npm)
