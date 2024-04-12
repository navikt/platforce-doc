# Apex Classes

Naming standards for Apex Classes.

## Rules for Naming

### Capitalization

[PascalCase](../casing-styles/#pascal-case)

### Name

```<Namespace>_<Class Name><Optional Suffix>```

## Comments

- **Namespace:** optional. Short, often an acronym. Use only for classes that are exclusive to a single app/project, and sure to stay that way over time. Don't confuse this with the namespace as used in packages or dev orgs!
- **Class name:** nouns, describing the class's functional purpose. Avoid acronyms and abbreviations.
- **Suffix:** indicates common class types - Controller, Extension, Handler, Utilities, TriggerHandler.

## Wrong Examples

| Name | Reason |
|------|:-------|
| ```CustomerAssessment``` | Lacks project namespace + suffix; not obvious what it does. |
| ```SmallBusinessConfigureAndPricingTool_CustomerAssessmentController``` | Namespace too long. Use acronym instead. |
| ```SBCPTCustomerAssessmentController``` | Where does namespace end and class name start? Use underscore. |
| ```SBCPT_Customer_Assessment_Controller``` | Uses underscores within the class name. |

## Good Examples

| Name | Reason |
|------|:-------|
| ```SBCPT_CustomerAssessmentController``` | |
