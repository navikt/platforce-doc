## Custom rules

Custom
[PMD](https://developer.salesforce.com/docs/platform/salesforce-code-analyzer/guide/pmd-config.html)
rules can be placed in the `crm-platform-base` repository. They will then be
used by `sf scanner` as part of the Salesforce Code Analyzer suite whenever a
GitHub action runs the validation workflow from this repository.

### Writing
[PMD Designer](https://github.com/pmd/pmd-designer) is a useful tool for writing
rules and getting realtime feedback.

#### Severity/priority

Every `<rule>` in a `<ruleset>` has a `<priority>`; a smaller number means more
severe. As of right now, there is no severity which will cause the validation to
abort the CI process. This may change in the future.

### Adding
To add a rule set to the validation process, place it in a subdirectory of
`pmd-rules/category/`, e.g. `pmd-rules/category/apex/`. The subdirectory is
used to inform `sf scanner` which language to use. The GitHub workflow will then
package each subdirectory into a `jar` and add it to `sf scanner`'s rule set.

### Local testing
If you want to test a single ruleset without adding it, simply run
```sh
sf scanner run --pmdconfig=/path/to/file.xml
```
