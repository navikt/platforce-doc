# Experience Cloud

External users can access Salesforce through Experience Cloud.

## Auth. privder

All Experience Cloud users must authenticate with ID-Porten.
An Experience Cloud site must be configured with one external authentication provider.

`Experience Cloud Config: Administration - Login & Registration - Login Page Setup`

Choose between:

- ID-porten (idporten-loa-substantial)
- ID-porten Level 4 (idporten-loa-high)
  Depending on the required [security level in ID-porten](https://docs.digdir.no/docs/idporten/oidc/oidc_guide_english.html).

:warning: Remember to uncheck NAV username and password.

The Experience Cloud's callback url must be included in the redirect_uris claim in the Maskinporten configuration: [dev client](https://github.com/navikt/nav-maskinporten/blob/master/clients/dev/salesforce/salesforce.yaml) or [prod client](https://github.com/navikt/nav-maskinporten/blob/master/clients/prod/salesforce/salesforce.yaml).

The callback url is
https://[experience-cloud-url]/services/authcallback/ID_porten or
https://[experience-cloud-url]/services/authcallback/ID_porten_Level4

## Single Signon

To ensure a seamless login experience between nav.no and Experience Cloud sites, we are depending on [ID-porten SSO](https://docs.digdir.no/docs/idporten/oidc/oidc_func_sso.html).

## Front-channel logout

When a user clicks on the Logout button at nav.no or an Experience Cloud site, a [front channel call](https://docs.digdir.no/docs/idporten/oidc/oidc_func_sso.html#2-h%C3%A5ndtere-utlogging-fra-id-porten-front-channel-logout) is triggered to ensure the user is logged out from nav.no and all Experience Cloud sites. ID-Porten calls https://communitylogout.nav.no/logout with ID-Porten's session ID (SID) as a parameter. The [sf-logut](https://github.com/navikt/sf-logout) pp is responsible for deleting all users with the related SID's active Salesforce sessions.

A user's session at ID-Porten lasts for 30 minutes. The user needs to reauthenticate at ID-Porten within 30 minutes if they haven't already logged out. If the user hasn't reauthenticated for more than 30 minutes, ID-Porten will not trigger a front channel logout call to https://communitylogout.nav.no/logout because ID-Porten considers this user logged out due to inactivity. The consequence will be that the user might click on the logout button at nav.no or an Experience Cloud site but will only be logged out from nav.no, not from any of the Experience Cloud sites.

To handle this issue, a scheduled job runs every five minutes and deletes all Experiene Cloud sessions that have lasted for more than 24 minutes. This will force the user to reauthenticate with ID-Porten the next time they navigate in the Experience Cloud site. Due to Single Sign-On in ID-Porten, the user should be reauthenticated without noticing anything.

It's possible to force reauthentication before 24 minutes. This can be useful when the user is navigating to an input form. To force reauthentication, redirect the user to https://[experience-cloud-domain]/IdPortenTokenRefresh?redirectUrl=[url the user should be redirected to after reauthentication].

## Login flow

After the user has logged in to an Experience Cloud site, a login flow will run.
Firstly, the user will reauthenticate with ID-Porten, so Salesforce receives the ID-token from ID-Porten to be able to fetch the user's ID-Porten session ID (SID). The SID is used by the [sf-logut](https://github.com/navikt/sf-logout) app to handle the logut.

Secondly, the user will be redirected to https://login.nav.no/oauth2 to set a cookie on the nav.no domain. This allows nav.no's decorator (header and footer() to be directly integrated into Experience Cloud sites. The cookie is necessary to display the user's name in the decorator.

## Subdomains

All Experience Cloud sites must have a subdomain at nav.no. The team that owns the Experience Cloud site decides on the subdomain and must request it via #platforce in Slack. Platforce will handle the DNS configuration and issue certificates for the subdomain. Ordering a new certificate typically takes about two weeks.

## Permission assignment

Each Experience Cloud site might have its own permission sets and permission set groups. The permissions will be assigned in the user registration handler. Currently, the Platforce team is responsible for the permission configuration.
