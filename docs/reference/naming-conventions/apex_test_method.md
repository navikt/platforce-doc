# Apex Test Methods

Naming standards for Apex Test Methods.

## Rules for Naming

### Capitalization

[camelCase](casing-styles.md#camel-case)

## Comments

- Name the tests as if you were describing the scenario in it to a non-programmer familiar with the problem domain.
- Don’t include the name of the method under test in the test name.

## Naming Convention Methods

### Feature to be tested

Simply write the feature to be tested, and omit the "test" part of the method name as it is anyway using annotations to identify method as test methods.

#### Wrong Examples

| Name | Reason |
|------|:-------|
| ```testIsNotAnAdultIfAgeLessThan18()``` |  |
| ```testFailToWithdrawMoneyIfAccountIsInvalid()``` |  |
| ```studentIsNotAdmittedIfMandatoryFieldsAreMissing()``` |  |

#### Good Examples

| Name | Reason |
|------|:-------|
| ```isNotAnAdultIfAgeLessThan18()``` |  |
| ```failToWithdrawMoneyIfAccountIsInvalid()``` |  |
| ```studentIsNotAdmittedIfMandatoryFieldsAreMissing()``` |  |

### should_ExpectedBehavior_When_StateUnderTest

#### Good Examples

| Name | Reason |
|------|:-------|
| ```should_ThrowException_When_AgeLessThan18()``` |  |
| ```should_FailToWithdrawMoney_ForInvalidAccount()``` |  |
| ```should_FailToAdmit_IfMandatoryFieldsAreMissing()``` |  |

### when_StateUnderTest_Expect_ExpectedBehavior

#### Good Examples

| Name | Reason |
|------|:-------|
| ```when_AgeLessThan18_Expect_isAdultAsFalse()``` |  |
| ```when_InvalidAccount_Expect_WithdrawMoneyToFail()``` |  |
| ```when_MandatoryFieldsAreMissing_Expect_StudentAdmissionToFail()``` |  |

### given_Preconditions_When_StateUnderTest_Then_ExpectedBehavior

This approach is based on a naming convention developed as part of Behavior-Driven Development (BDD). The idea is to break down the tests into three part such that one could come up with preconditions, state under test and expected behavior to be written in the above format.

You can read more about the Given When Then approach here on Martin Fowler's article about [Given When Then](https://martinfowler.com/bliki/GivenWhenThen.html).
You can read more about Behavior-Driven Development (BDD) in the two article [Introducing BDD](https://dannorth.net/introducing-bdd/) and [BDD Makes Application Logic More Transparent](https://dzone.com/articles/java-bdd-simple-and-clear-with-examples).

#### Good Examples

| Name | Reason |
|------|:-------|
| ```given_UserIsAuthenticated_When_InvalidAccountNumberIsUsedToWithdrawMoney_Then_TransactionsWillFail()``` |  |
