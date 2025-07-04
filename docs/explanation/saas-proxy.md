# Saas-proxy

Saas‑proxy is a secure API gateway that enables Salesforce to talk to internal NAIS-hosted services without exposing them publicly. It enforces Entra ID-based authentication and strict, configurable whitelisting of allowed API paths. Once requests are approved, the proxy routes them into NAV’s cloud infrastructure (via GCP or pub.nais.io), returning responses back to Salesforce.

## Flow

```mermaid
sequenceDiagram
participant SF as Salesforce (external)
participant Entra as Microsoft Entra ID
participant Proxy as saas-proxy
participant AppCloud as NAV App (Google Cloud)
participant PubNais as pub.nais.io → on-prem app

    SF->>Entra: Fetch access token
    SF->>Proxy: Send request with token
    Proxy->>Entra: Validate token

    alt App in Google Cloud
        Proxy->>AppCloud: Forward request
        AppCloud-->>Proxy: Response
    else App on-prem via pub.nais.io
        Proxy->>PubNais: Forward request
        PubNais-->>Proxy: Response
    end

    Proxy-->>SF: Return response
```

## Usage

See the [navikt/saas-proxy](https://github.com/navikt/saas-proxy) repository on GitHub for configuration instructions.