# Add new package to monorepo

This is a high level intro into how we do it in the Platforce monorepo, read the sfp docs in order to have the details.

Create a new folder with and add the structure you want for the package.

``` title="Example project structure"
sf-platform/
├── config/
|   ├── poolMatrixdef.json
|   ├── project-scratch-def.json  # Configuration file for defining scratch orgs
|   ├── releaseconfig.yml
│   └── sf-ci-platform-pool-def.json
├── force-app/ (2)
│   ├── default  # This folder is added to .gitignore, used for temporary files from scratch orgs
│   │   └── main/
│   │       ├── classes/
│   │       └── ...  # Placeholder for other Salesforce metadata types
│   ├── platform-data-model/ # Datamodel package
│   ├── platforce-admin/ # Toplevel package
│   ├── integration/
│   │   ├── my-integration-package A/  # Integration-specific package
│   │   └── my-integration-package B/  # Another integration package
│   └── utility/
│       ├── my-util-package A/  # Utility-specific package
│       └── my-util-package B/  # Another utility package
├── README.md  # Project documentation
└── sfdx-project.json  # Salesforce DX project configuration file
```

Example of the structre within a package

``` title="Example package structure"
my-package A/
├── main/
│   ├── classes/
│   │   ├── MyClass.cls
│   │   └── AnotherClass.cls
│   └── ...
├── test/
│   ├── classes/
│   │   ├── MyClassTest.cls
│   │   └── AnotherClassTest.cls
│   └── ...
└── README.md
```

Update the `sfdx-project.json` file with the new package. Refer to the sfp docs in order to view the different package types.
