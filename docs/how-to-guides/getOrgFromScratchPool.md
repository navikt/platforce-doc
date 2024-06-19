# Fetch Scratch Org from Pool

**Requirements:**  
[SFP CLI installed locally](./dev-environment/install-flxbl-sfp.md)

Reference: [NAV Scratch Pool setup](../reference/scratchPools.md)

In the examples below, replace `devhub` with the alias of your [NAV Dev Hub alias (user)](../reference/names-and-aliases.md).

## Check access and available scratch orgs

Check that you have access to the pools by running the [list](https://docs.flxbl.io/sfp/command-guide/advanced/pool#flxbl-io-sfp-pool-list) command  

```bash
sfp pool list --tag dev -a --targetdevhubusername devhub
```

If you do not have access [contact](../team-platforce/contact.md) Team Platforce

## Fetch Scratch org

Use the [sfp pool fetch command](https://docs.flxbl.io/sfp/command-guide/advanced/pool#flxbl-io-sfp-pool-fetch) in order to fetch a scratch org.  

:warning: Remember to delete your scratch org when done, in order to free up space in the pool.

Example command:

```bash
sfp pool fetch --tag dev --targetdevhubusername devhub --alias myScratchOrg --setdefaultusername
```

## Delete Scratch org

When you are done with you scratch org delete it by using the delete scratch org command

Example:

```bash
sf org delete scratch --target-org myScratchOrg
```
