# Audit Logging

All operations involving records related to a person ident (fødselsnummer) should be logged in ArcSight, which is Nav’s centralized system for audit logging (Snokeloggen).

1. A [NAIS job](https://github.com/navikt/sf-audit-logging/blob/main/.nais/job.yaml) is scheduled to run at 4 AM every day.
2. All [Lightning URI events](https://developer.salesforce.com/docs/atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_lightningurievent.htm) from the previous day will be fetched.
3. Irrelevant records are filtered out.
4. Person idents are fetched using the record IDs in the Lightning URI events.
5. Logs are transferred to ArcSight.

!!! info "New NAIS app"

    This documentation describes sf-audit-logging, which is not yet live. sf-audit will be replaced by sf-audit-logging during the summer 2025.

## Maintain the list of objects to be logged

Only records with object types listed in [objects.yaml](https://github.com/navikt/sf-audit-logging/blob/main/src/main/resources/objects.yaml) are included in the audit logs.
The object list contains the API name of each object and specifies which field contains the associated person ident.
Platforce is responsible for the NAIS app and transferring logs to ArcSight.
Each team is responsible for including all relevant objects in [objects.yaml](https://github.com/navikt/sf-audit-logging/blob/main/src/main/resources/objects.yaml) to ensure that all relevant records are logged.

### Enable audit logging for new object types

1. Grant View All Data access for the object in the [Integration Audit Logs](https://github.com/navikt/crm-platform-unpackaged/blob/main/force-app/main/default/permissionsets/Integration_AuditLogs.permissionset-meta.xml) permission set, and give access to the field related to the Account.
2. Add the object’s API name to [objects.yaml](https://github.com/navikt/sf-audit-logging/blob/main/src/main/resources/objects.yaml) and specify the field containing the associated person ident.

## Monitoring

A [Grafana board](https://grafana.nav.cloud.nais.io/d/fekgqpvnx2qkgd/audit-logs?orgId=1&from=now-7d&to=now&timezone=browser) shows the number of logs transferred each day, grouped by object name.
It is recommended to monitor the board to ensure that all relevant object types are transferred to ArcSight.
