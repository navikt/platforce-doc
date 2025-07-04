# Exposing an App in FSS to Salesforce via Saas-Proxy

## 1. Make the API Visible to GCP
To make an API of a NAIS app in FSS accessible to Salesforce, the app owner needs to configure an ingress that is visible to GCP. 
This is typically achieved using a special pub.nais.io ingress. For detailed instructions, refer to the NAIS documentation [here](https://doc.nais.io/workloads/explanations/migrating-to-gcp/?h=pub.nais.io#how-do-i-reach-an-application-found-on-premises-from-my-application-in-gcp)

## 2. Grant Access to Saas-Proxy
The app owner must grant access to Saas-Proxy in the app's access policies. Below is an example configuration:
```
  accessPolicy:
    inbound:
      rules:
        - application: saas-proxy
          namespace: teamcrm
          cluster: <dev/prod-gcp>
```

## 3. Configure Saas-proxy
Follow the instructions provided in the [Saas-proxy documentation](https://github.com/navikt/saas-proxy/blob/master/README.md) to configure the proxy to redirect traffic to the configured ingress.