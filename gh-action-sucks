# Second time in two days, that GH actions docu does NOT match the behavior!

You can't call a local action like explained in:
# https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#example-using-an-action-in-the-same-repository-as-the-workflow

<quote>
Example: Using an action in the same repository as the workflow

./path/to/dir

The path to the directory that contains the action in your workflow's repository. You must check out your repository before using the action.

jobs:
  my_first_job:
    steps:
      - name: Check out repository
        uses: actions/checkout@v2
      - name: Use local my-action
        uses: ./.github/actions/my-action
</quote>


You can´t set env variables with punctuation, preciesly: 
- you can do so, but they woun't get echoed, though they exist in GH action context

# action/checkout can ONLY checkout the repo the WF file lives in: its own repo.
# checking out another repo fails, even under the same GH organization.
# SEE: https://github.com/actions/checkout/issues/417
<quote>
  Error: fatal: repository 'https://github.com/tectonic/infrastructure-helm/' not found
  Error: The process '/usr/bin/git' failed with exit code 128
This happened at around Jan 5, 2021, 7:05 PM PST. The issue seems to have gone away now, but I just wanted to add some extra information in case if it's useful.
</quote>

Seems GHA chanded permissions for GITHUB_TOKEN. ;-/
