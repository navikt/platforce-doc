# Naming Conventions

Naming Conventions for Customization and Configuration in Salesforce is an important consideration when creating custom modifications and applications on the platform.

1. **Descriptive and Specific Names:** When naming custom objects, fields, or other components, choose descriptive and specific names. Avoid overly general terms like “ProductLine,” which may have different meanings depending on context.
2. **Business Alignment:** Opt for names that align with our organization’s terminology. For example, use “IncomeSupportProgram” instead of generic terms to ensure consistency with business processes.

Remember, adhering to these naming conventions enhances readability and facilitates efficient management of our Salesforce environment.

## 1. Language

**Configurable metadata** (such as Custom Objects, Custom Fields, Process Builder, Flows, Apex, etc.) is created and named in the English language. This applies to both labels, API names, and help text. For metadata where labels are visible to the user, these must be translated to Norwegian using the **[Translation Workbench](https://help.salesforce.com/s/articleView?id=sf.workbench_overview.htm&type=5)**. There are two main reasons for this approach:

1. We want to adhere to English names at the **database and backend level**. This enhances the flow and readability of code, especially since English is already extensively used in standard functions and external libraries.
2. External interfaces will face requirements to support multiple languages. By introducing translation functionality via the Translation Workbench at an early stage, adaptations are ready to be translated into multiple languages as needed.

Remember that maintaining consistent naming conventions across different languages is crucial for clarity and maintainability in software development.