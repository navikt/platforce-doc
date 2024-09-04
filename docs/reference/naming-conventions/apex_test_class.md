# Apex Test Classes

Naming standards for Apex Test Classes.

## Rules for Naming

### Capitalization

[PascalCase](casing-styles.md#pascal-case)

### Name

```<Class Being Tested>Test```

## Comments

We should NOT use underscore ```_``` in the Test class name.
This takes an unnecessary character and do not give any meaningful clarity to highlighting a Test class.

## Wrong Examples

| Name | Reason |
|------|:-------|
| ```SBCPT_CustomerAssessmentController_Test``` | Does use an underscore before "Test". |

## Good Examples

| Name | Reason |
|------|:-------|
| ```SBCPT_CustomerAssessmentControllerTest``` | Does not use an underscore before "Test". |
