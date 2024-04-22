# Scratch Pools

We currently use tooling from Flxbl to create Scratch Org Pools

Offical reference: <https://docs.flxbl.io/sfp/pools/overview>

## Our setup

Details about how the scratch pool jobs are working check out [crm-workflows-base](https://github.com/navikt/crm-workflows-base)

Team Platforce hosts two pools `dev` and `ci`:  
`dev` is used by developers and admins.  
`ci` is used by GitHub actions when running ci/cd jobs.

To see the packages installed in a scratch pool check the [sfdx-project.json](https://github.com/navikt/crm-workflows-base/blob/dxAtScale/sfdx-project.json) file in crm-workflows-base

We currently have one job [Replenish Pools - Auto Triggered](https://github.com/navikt/crm-workflows-base/actions/workflows/ciScratchPool.yml) that runs on a shedule creating new scratch orgs. Every night it deletes all unused scratch orgs.

### Schedule

- At every hour from 8:15 CET through 17:15 CET on every day-of-week from Monday through Friday.
- At 4:15 CET every night.

## Access

**Requirement:** DX user, [contact](../team-platforce/contact.md) Team Platforce if you do not have this.

**Permission set:** DX@Scale - Scratch Org Developer
**Public Group access:** Developers