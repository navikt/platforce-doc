# Install Java

How to install Java on your computer.

## Prerequisites

=== "Windows"

    - [Scoop](install-scoop.md)

=== "macOS"

    - [Homebrew](install-homebrew.md)

## Installation

=== "Windows"

    ```PowerShell
    scoop bucket add java
    scoop install temurin17-jdk
    ```

=== "macOS"

    ```bash
    brew tap homebrew/cask-versions
    brew install --cask temurin17
    ```

### Resources

- [Adoptium](https://adoptium.net/)
