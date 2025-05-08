# Lightning Page Record Assignment

Due to how Salesforce works one need to take care during the activation step of a Lightning Record Page. For the most recent documentation on Lightning record page activation, see the Salesforce documentation.

When a team need to create a new lightning record page they have to activate it using the "App, Record Type and Profile" assignment.

The reason for this is to ensure that data is displayed in a proper way.

## When creating a new custom object

When a new custom object is created an empty lightning record page should be created and it should be set as org default. The page should contain a message telling the user that they need to open the record in the correct app in order to view it.

Then the actual lightning record page should be created and assigned to the correct app,recordtype and profile.

## Exceptions to this rule

For some objects we will only have one record type and it is desired that they are displayed the same way accross all apps. In this case we can use the Org Default setup until we need to use it.
