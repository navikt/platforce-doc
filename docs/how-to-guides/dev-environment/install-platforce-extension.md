# Install Platforce Salesforce Extension Pack

How to install Platforce Salesforce Extension Pack for your Visual Studio Code.

## Prerequisites

=== "Windows"

    - [Visual Studio Code](install-vscode.md)

=== "macOS"

    - [Visual Studio Code](install-vscode.md)

## Installation

=== "Windows"

    ```PowerShell
    Invoke-WebRequest 'https://github.com/navikt/platforce-sf-ext-pack/releases/download/1.0.0/platforce-sf-ext-pack-1.0.0.vsix' -OutFile 'platforce-sf-ext-pack.vsix';
    code --install-extension platforce-sf-ext-pack.vsix;
    Remove-Item -Path 'platforce-sf-ext-pack.vsix'
    ```

=== "macOS"

    ```bash
    curl --location 'https://github.com/navikt/platforce-sf-ext-pack/releases/download/1.0.0/platforce-sf-ext-pack-1.0.0.vsix' --output 'platforce-sf-ext-pack.vsix' &&
    code --install-extension platforce-sf-ext-pack.vsix &&
    rm platforce-sf-ext-pack.vsix
    ```

### Alternative Installation

=== "Windows"

    - TODO: Add steps and images

=== "macOS"

    - TODO: Ateps and images

### Resources

- [Platforce Salesforce Extension Pack](https://github.com/navikt/platforce-sf-ext-pack/releases/latest)
