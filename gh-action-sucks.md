## Second time in two days, that GH actions docu does NOT match the behavior!

You can't call a local action like explained in:
- https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-using-an-action-in-the-same-repository-as-the-workflow

```
<quote>
Example: Using an action in the same repository as the workflow

./path/to/dir
```

The path to the directory that contains the action in your workflow's repository. You must check out your repository before using the action.
```
jobs:
  my_first_job:
    steps:
      - name: Check out repository
        uses: actions/checkout@v2
      - name: Use local my-action
        uses: ./.github/actions/my-action
```

You can´t set env variables with punctuation, preciesly: 
- you can do so, but they woun't get echoed, though they exist in GH action context

## action/checkout can ONLY checkout the repo the WF file lives in: its own repo.
- checking out another repo fails, even under the same GH organization.
- SEE: https://github.com/actions/checkout/issues/417

>  Error: fatal: repository 'https://github.com/tectonic/infrastructure-helm/' not found
>  Error: The process '/usr/bin/git' failed with exit code 128
> This happened at around Jan 5, 2021, 7:05 PM PST. The issue seems to have gone away now, but I just wanted to add some extra information in case if it's useful.

Seems GHA chanded permissions for `GITHUB_TOKEN`. ;-/

# GHA maks an environment variable the value of which equals a GHA secret
#### Create workflow to show GH secrets/variable with same value
This workflow shows, how GHA incorrectly masks environment variables 
**IF** the value of the variables equals the value of the secret. We do this:
  - add GH_SECRET with value "VERYSECRET"
  - set an env variable with the same value "VERYSECRET"
  - echo both

See any GHA run output for [Workflow mask variables](https://github.com/radiomix/gh-composite-action/actions/workflows/incorretly-mask-env-variables.yaml):
```
Run echo " GH_SECRET '***' GH_VARIABLE '***'"
 GH_SECRET '***' GH_VARIABLE '***'
```

for this workflow code sniped
https://github.com/radiomix/gh-composite-action/blob/e5f57f7344a7d1335913ff365757574ebb5fc9e2/.github/workflows/incorretly-mask-env-variables.yaml#L25-L27
