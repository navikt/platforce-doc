# Access Control

We are using [Salesforce data sharing](https://help.salesforce.com/s/articleView?id=sf.security_data_access.htm&type=5) capabilties for access control in our Salesforce org.
Profiles specify the license type and are not used for access control. A user can only have one profile. The profiles are represented in Identrutina, and users are assigned a profile using the standard Salesforce integration in Azure AD.
Roles specify which area the user belongs to. The role is set by a trigger based on the Department field in the user record.

## Object- and Field-Level Security

Access to object and fields are granted through Permission Sets and Permission Set Groups. Permisson sets is configured by each teams and inccluded in their resepctive packages. Permission sets and Permission Set Groups that can't be a part of unlocked packages should be deployed through [crm-platform-unpackaged](https://github.com/navikt/crm-platform-unpackaged).

Permission Set Group Specifies which objects and fields are standard within the product area. The user is assigned a permission set group using a trigger in Salesforce, based on Department, group membership, or profile.

Permission Sets should be assigned to users through a Permission Set Group. A Permission Set should only be assigned for access needs that apply to a few specific groups of users, such as reports, courses, and quick texts. It must be set manually by an administrator.

## Record-Level Security

Record sharing is based on public groups. The user is automatically added to the group corresponding to the user's Department, which is set in a trigger in Salesforce.
Special Access: Internal employees, code 6 and 7, are granted access via the Identity routine and synchronized to AD groups. The members of the AD groups must be synchronized to groups in Salesforce. Internal employees should have one AD group per area in Salesforce. For Code 6 and 7, AD groups is shared to all applications in NAV are used."
