# Set up a Slack alert rule

Instruct our alert bot to send a message to a slack channel based on some
statistics from Grafana fulfilling certain criteria.

## Set up a contact point

### Slack hook

If there already is an appropriate contact point, e.g. `1-line alerts for
Salesforce`, you may skip this step.

If you want to set up a new one, either in order to post to a new channel, or to
use a different message template, head to the slack bot
api <https://api.slack.com/apps/A0191212YPN>
and go to *Incoming Webhooks*. Set up a new hook and save the URL for later.

### Contact point

Go to Contact points and create a new one
<https://grafana.nav.cloud.nais.io/alerting/notifications/receivers/new>. Use
*Integration* type *Slack* and use the previously gotten URL in *Webhook URL*.

Under *Optional Slack settings* edit the *Title* and the *Text body*, and set
them to `brief.title` and `brief.message` respectively, or other templates if
you prefer.

## Set up the alert rule

Head to New alert
<https://grafana.nav.cloud.nais.io/alerting/new/alerting?returnTo=%2Falerting%2Flist>
to create a new rule.

### Define query and alert condition

Set up the query you would like to use. Usually this will begin with `sum by
(foo, bar)`, this will give you an integer value for each row, each being
uniquely defined by a combination of *foo* and *bar*.

### Add folder and labels

Use the *crm* folder.

### Configure notifications

Use the contact point previously configured.

#### Override grouping

If you want to split up the alert in multiple messages, you may use this setting
to do so. E.g. only adding `foo` will place all the alerts with the same `foo`
but different `bar` in a single message.

### Configure notification message

This is what the slack bot will display. Place a brief description of the
problem in *description* and more details in *summary*, e.g. `too many {{ index
$labels "foo" }} of type {{ index $labels "bar" }}`.

For added info, it is possible to use multiple queries and reference them in the
summary. For instance, query A may be a daily report, and query B a weekly
report, where both queries use the same `sum by ...`. Now we can add `{{
$values.B.value }}` to our summary. Make sure to use *Set as alert condition* on
the correct query that you want to trigger the alert.
