# Access Control

We are using [Salesforce data sharing](https://help.salesforce.com/s/articleView?id=sf.security_data_access.htm&type=5) capabilties for access control in our Salesforce org.

## Object- and Field-Level Security

Access to object and fields are granted through Permission Sets and Permission Set Groups. Permisson sets is configured by each teams and inccluded in their resepctive packages. Permission sets and Permission Set Groups that can't be a part of unlocked packages should be deployed through [crm-platform-unpackaged](https://github.com/navikt/crm-platform-unpackaged).

Permission Set Group is used to assi

## Record-Level Security
