# Flow Elements

Naming standards for Flow Elements.

## Rules for Naming

### Capitalization

[Natural Text](../casing-styles/#natural-text)

### Name

#### Get Records

```Get <Optional Adjective\> <Object Name\>```

#### Screen

```<Verb\> <Short Description\>```

#### Subflow/Action

```<Label or brief description of Flow/Action being referenced\>```

#### Assignment

```Set <Variable Name\> to <Value\>```

#### Decision

```<Question\>```

#### Decision Outcome

```<Answer\>```

#### Loop

```Loop Through <Collection Variable Name\>```

## Comments

Ideally limit to 35 characters.

## Wrong Examples

| Name | Reason |
|------|:-------|
| ```Find Records``` | Does not include object; not descriptive enough. |
| ```Find all Contact records that have a matching first name and last name``` | Too long; does not capitalize principal words. |

## Good Examples

### Get Records

| Name | Reason |
|------|:-------|
| ```Get Related Contacts``` ||

### Screen

| Name | Reason |
|------|:-------|
| ```Collect Contact Details``` ||

### Subflow

| Name | Reason |
|------|:-------|
| ```Get Record Type ID``` ||

### Action

| Name | Reason |
|------|:-------|
| ```Send Email to Opportunity Owner``` ||

### Assignment

| Name | Reason |
|------|:-------|
| ```Set Discount to 10%``` ||

### Decision

| Name | Reason |
|------|:-------|
| ```Update or Create Contact?``` ||

### Decision Outcome

| Name | Reason |
|------|:-------|
| ```Update Existing Contact``` ||

### Loop

| Name | Reason |
|------|:-------|
| ```Loop Through Child Contacts``` ||
