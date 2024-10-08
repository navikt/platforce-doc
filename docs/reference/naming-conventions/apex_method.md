# Apex Methods

Naming standards for Apex Methods.

## Rules for Naming

### Capitalization

[camelCase](casing-styles.md#camel-case)

### Name

```<Verb(s)><(optional) Noun Set>```

## Comments

- **Verbs:** describe the actions being performed: get, save, check, etc.
- **Noun set:** describes what the verbs are acting on.

## Wrong Examples

| Name | Reason |
|------|:-------|
| ```parentAccount()``` | Missing verb. What action is being performed on the parent account? |
| ```GetParentAccount()``` | Starts with capital letter. |

## Good Examples

| Name | Reason |
|------|:-------|
| ```getParentAccount()``` |  |
