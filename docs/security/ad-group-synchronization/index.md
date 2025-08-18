# AD Group Synchronization

Access to "skjermet", "fortrolig", and theme groups (such as PEN, FAM, BID) is managed through the following Active Directory (Entra ID) groups:

- 0000-GA-Egne_ansatte
- 0000-GA-Fortrolig_Adresse
- 0000-GA-TEMA_XXX

Each of these AD groups has a corresponding Public Group in Salesforce:

- Skjermet
- Fortrolig
- Tema_XXX

Additionally, there are Public Groups in Salesforce for combined access groups:

- Skjermet_XXX (Example: Skjermet_PEN)
- Fortrolig_XXX (Example: Fortrolig_PEN)
- Fortrolig_Skjermet_XXX (Example: Fortrolig_Skjermet_PEN)

All Public Groups are maintained in the [crm-access-control](https://github.com/navikt/crm-platform-access-control/tree/main/force-app/LoginFlow/groups) repository.
The mapping between AD groups and Salesforce Public Groups is defined in custom metadata, as shown in these [records](https://github.com/navikt/crm-platform-access-control/tree/main/force-app/LoginFlow/customMetadata).

The [AD group sync](https://github.com/navikt/crm-platform-access-control/blob/main/force-app/LoginFlow/classes/AdGroupSyncService.cls) runs for each employee user every time they log in to Salesforce.
The sync is triggered by a [Login Flow](https://github.com/navikt/crm-platform-access-control/blob/main/force-app/LoginFlow/classes/DefaultLoginFlowController.cls).
