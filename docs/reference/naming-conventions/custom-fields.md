# Custom Fields

## Rules for Naming

### Field Label

- Use a descriptive label that clearly conveys the purpose of the field.
- Capitalize the first word and any subsequent words (e.g., “Contact Email,” “Product Description”).
- Avoid excessive abbreviations or acronyms unless they are widely recognized (e.g., HTTP, URL).

### Field Name (API Name)

- Pascal Case (without spaces or underscores beyond the mandatory “__c”)
- Custom fields must have **unique names** within the same object.

#### For example

If your custom object is labeled “Issue,” the API name for a custom field called “Priority” would be ```Issue__c.Priority__c```.

### Field Descriptions

- Provide a meaningful description for each custom field.
- Describe the purpose, expected data, and any relevant context.
- Help users understand the field’s significance.

### Help Text

**Condition:** If visible on page layouts.

- If the field’s purpose isn’t immediately clear to all users, add helpful explanatory text.
- Ensure that users understand how to use the field effectively.
- If the field has multipurpose functionality direct the user to where he or she can find the needed information/help text for the context it is used in.

### Uniqueness

- Specify whether a custom field should contain unique values across all records of the same custom object type.
- Uniqueness can be either case-sensitive or case-insensitive.
- In the API, you can check if a field is unique by inspecting the attributes:
- If unique is set to true, values must be unique across all records of that custom object type.
- If caseSensitive is true, uniqueness is case-sensitive (e.g., “ABC” and “abc” are distinct).
- If caseSensitive is false, “ABC” and “abc” are considered the same value.
- For Boolean (“Checkbox”) fields, the API name should start with “Is” or “IsCan” .

## Exceptions

Widely used and commonly understood acronyms and abbreviations can be used instead of the long form. For example HTTP or URL or ACMA.

## Wrong Examples

The following are examples of custom field naming that should not be used 

| Name (API) |  Reason |
|-------------------|:--------|
```C``` | Ambiguous names will cause confusion. Description was not completed. 
```Zip_Code``` | Field names should not have underscores. 

## Good Examples

The following are examples of the naming convention that will be used 

| Name (API) | Reason 
|-------------------|:--------|
```CountryCode``` | A succinct description of the object using whole words. Description is not required since the name is a commonly understood term. 
```ZipCode``` | Removing all underscores will help keep a standard naming convention as many times there are words that some may separate into two words and other may not. Description is not required since the name is a commonly understood term. 
```CompletionDate``` | Date that the order process was completed. Should only be set once payment is received and order was fulfilled. Even though the name seems to make sense, there are business rules that need to be explained, and as such, a longer description was needed.
