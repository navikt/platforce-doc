# Create a DX user

In order to create a DX user contact Team Platforce. Only the Platforce team should have access to create and modify DX users.

## What is a DX User

A DX user is a Salesforce user created for developers in order to work with scratch orgs and Unlocked Packages.

This means that a developer might have up to three users in Salesforce. **1)** A personal user with access to Experience Cloud. **2)** An admin user where they can log into production as an administrator. **3)** A DX user that they can use to create scratch orgs, promote packages etc.

To make it easier to distinguish the DX users when navigating in the production org we add (DX) at the end of the users name and `.dx` at the end of the username.

## How to create a DX user

1. Go to create a new user in Production
2. Create a new user
    * **License:** Salesforce Limited Access - Free
    * **Profile:** NAV DX Developer Free
    * **Username:**  The Nav email with the postfix ".dx"
    * **Last name:** The last name and add " (DX)" in the end
3. Assign the following permission sets
    * DX - Create Second Generation Packages
    * DX - Promoter Pakker
    * DX@Scale - Scratch Org Developer
4. Add to this public group
    * Developers
