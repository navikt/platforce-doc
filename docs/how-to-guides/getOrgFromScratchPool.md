# Fetch Scratch Org from Pool

**Requirements:**  
[Sfp CLI installed locally](https://docs.flxbl.io/sfp/getting-started/install-sfp)

Reference: [NAV Scratch Pool setup](../reference/scratchPools.md)

In the examples below, replace `devhub` with the alias of your DX User.

## Check access and available scratch orgs

Check that you have access to the pools by running the [list](https://docs.flxbl.io/sfp/command-guide/advanced/pool#flxbl-io-sfp-pool-list) command  
`sfp pool list --tag dev -a --targetdevhubusername devhub`

If you do not have access [contact](../team-platforce/contact.md) Team Platforce

## Fetch Scratch org

Use the [sfp pool fetch command](https://docs.flxbl.io/sfp/command-guide/advanced/pool#flxbl-io-sfp-pool-fetch) in order to fetch a scratch org.  

:warning: Remember to delete your scratch org when done, in order to free up space in the pool.

Example command:  
`sfp pool fetch --tag dev --targetdevhubusername devhub --alias myScratchOrg --setdefaultusername`

## Delete Scratch org

When you are done with you scratch org delete it by using the delete scratch org command

Example:  
`sf org delete scratch --target-org myScratchOrg`
