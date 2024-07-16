# Prettier

Offical reference: <https://prettier.io/>


Used locally and in CI validation jobs.

## Upgrading from 2.8.8
Many of our packages use prettier 2.8.8 or earlier, which doesn't handle the
null coalescing operator (`??`). To fix this, upgrade prettier to at least 3.0.0

`npm i prettier@3.0.0`

along with the apex plugin

`npm i prettier-plugin-apex@2.1.0`

You will also need to add this to your `.prettierrc`:

```
 {
+    "plugins": ["prettier-plugin-apex"],
     "trailingComma": "none",
     "printWidth": 120,
     ...
```
