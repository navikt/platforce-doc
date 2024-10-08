# Custom Objects

## Rules for Naming

### Object Label

Singular, [Pascal Case](casing-styles.md#pascal-case)

### Object Plural Label

Plural, [Pascal Case](casing-styles.md#pascal-case)

### Object Name (API Name)

Singular, Pascal Case (without underscores beyond the mandatory “__c”)

## Comments

When naming custom objects within Salesforce, adhere to the following rules to ensure clarity and consistency:

1. **Uniqueness:** Custom object names must be **unique** across your organization. Begin each name with an **uppercase letter**.

2. **Descriptive and Whole Words:** Use **descriptive** and **whole words** for object names. Avoid excessive use of acronyms and abbreviations.

3. **Singular Form:** Choose **singular** names (e.g., "Review" instead of "Reviews," or "OrderItem" instead of "Order Items").

4. **No Underscores:** Avoid including underscores ("_") in object names.

5. **Consistent Object Label:** Whenever possible, align the **object label** with the object name. Consistency between the label and name ensures ease of navigation within Salesforce and finding the object in the various setup UIs.

6. **English Language Naming:** All naming conventions should be in **English**.

7. **Norwegian Translation:** When translating labels and user-facing text to Norwegian, **adhere to our organization’s specific terminology**. (***Tip:** Utilize Salesforce’s Translation Workbench for translating labels and user-facing text to Norwegian.*)

Remember, well-defined naming conventions contribute to a streamlined and efficient Salesforce configuration.

## Prefixing

As a general rule, avoid adding team names, application acronyms to object names. Instead use the description field to add team or application ownership to the object. (*Another and better solution will be made for handling this later.*)

## Exceptions

When naming custom objects within Salesforce, consider the following exceptions to enhance clarity and maintain consistency:

1. **Acronyms and Abbreviations:** Widely used and commonly understood acronyms and abbreviations can replace the long form. For instance, "HTTP," "URL," or "NAV" are acceptable.

2. **Underscores for Application Prefix:** Adding an underscore is acceptable when prefixing the object name to denote its association with an application. For example:
   - Correct: **OrderApplication_Order**
   - Correct: **OrderApplication_OrderItem**
   - Note: **OrderItem** does not have any underscores.

Remember, adhering to these exceptions ensures a balance between readability and precision in your naming conventions.

## Wrong Examples

The following are examples of custom object naming that should *not* be used 

| Name (API) | Reason |
|-------------|:--------|
|```CustAsset```| Abbreviations have made this object name hard to understand 
|```Orders``` | Object names should always be singular. 
|```Order_Item``` | Object names should not have underscores. 

## Good Examples

The following are examples of the naming convention that will be used:

| Name (API) | Reason |
|-------------|:--------|
|```CustomerAsset``` | Removing ambiguity from the name will improve readability and maintainability 
|```Order``` |  Making object names singular will ensure a standard naming convention across all objects. 
|```OrderItem``` | Removing all underscores will help keep a standard naming convention as many times there are words that some may separate into two words and other may not. For example: ```Zipcode``` vs. ```Zip Code```.

The following are examples shows valid naming conventions for Object Label, Object Plural Label and Object Name (API):

| Label | Plural Label | Name (API) |
|:-------------|:-------------|:-------------|
|Shipping Invoice | Shipping Invoices | ```ShippingInvoice__c```
|Inclusion Opportunity | Inclusion Opportunities | ```InclusionOpportunity__c```
