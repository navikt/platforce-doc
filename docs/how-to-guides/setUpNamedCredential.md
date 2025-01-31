# Set up a Named Credential

Named Credentials let us authorize against external applications with the
[OAuth 2.0 client credentials flow](https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-client-creds-grant-flow)
without manually having to fetch an access token.

## Set up an External Credential

**Setup ▶ Security ▶ Named Credentials ▶ External Credentials**

The external credential defines the remote app to which you intend to make a
callout. Use the following settings:

#### Authentication Protocol

`OAuth 2.0`

#### Authentication Flow Type

`Client Credentials with Client Secret Flow`

#### Scope

`<app id>/.default`

The remote app. Use either its UUID or, if the app has enabled it, its alias. It
will have the form `cluster:namespace:app`.

#### Identity Provider URL

`https://login.microsoftonline.com/<tenant id>/oauth2/v2.0/token`

The tenant ID may be found in the [Azure portal](https://portal.azure.com) under
**Tenant properties**. For dev environments, log in with your
`trygdeetaten` user, and for production, your `nav` user.

### Set up an associated Principal

The principal defines how we identify ourselves when authorizing against the
external app. This is most likely going to be the client id and client secret
associated with the `salesforce-entra` app in the environment from which you
will make the callout.

### (Optional) set up Custom Headers

If the callout will always contain a given header, you may place it here.

## Set up a Named Credential

**Setup ▶ Security ▶ Named Credentials ▶ Named Credentials**

The named credential defines the URL for the callout. This may be the complete
url

`https://foo.nav.no/bar/baz`

usable like so:
```
HttpRequest req = new HttpRequest();
req.setEndpoint('callout:foo');
```

or a partial url

`https://foo.nav.no`

used like this:
```
HttpRequest req = new HttpRequest();
req.setEndpoint('callout:foo/bar/baz');
```

## Set up permissions

To be able to use the external credential, add access to it in an appropriate
permission set, or create a new one. Use the `External Credential Principal
Access` field.

## TODO

Describe setting up a credential for the JWT bearer / On-Behalf-Of flow.
