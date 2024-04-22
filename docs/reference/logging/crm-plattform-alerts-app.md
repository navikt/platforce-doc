# Sending logs to Slack channels

We utilize a slack app named crm-plattform-alerts-app for posting Application Logs to Slack Channels

Application Log Setting: Custom Metadata Type that contains information about the Slack Hook and the criteria for when to post to the slack hook
crm-plattform-alerts-app: Slack app that contains all the web hooks

## The general flow is as follows

1. An application log record is created
2. The record matches the criteria in a Application Log Setting
3. Message is posted in the defined slack channel

Important: The slack hook is a secret so the Application Log Setting needs to be created manually in each org.

To set this up see  the How To guide [Post Application Log to Slack Channel](../../how-to-guides/postApplicationLogToSlack.md)
