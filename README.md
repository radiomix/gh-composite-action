## Composite GH actions
[![use composite action](https://github.com/radiomix/gh-composite-action/actions/workflows/caller-action.yaml/badge.svg)](https://github.com/radiomix/gh-composite-action/actions/workflows/caller-action.yaml)

This action creates a file ~/date.txt with the current date.

### Inputs

### `fileName`
**Required** The name of the file. Default `"~/date.txt"`.

### Outputs

### `fileContent`
The time take by 'date'.

### Example usage
```yaml
uses: radiomix/gh-composite-action
with:
  fileName: 'date.txt'
```


## Clean Pruner Runs
[![Workflow Run Pruner](https://github.com/radiomix/gh-composite-action/actions/workflows/cleanup-runs.yaml/badge.svg)](https://github.com/radiomix/gh-composite-action/actions/workflows/cleanup-runs.yaml)

This action cleans up old runs of the pruner itself.
### Caution: `workflow_id:` MUST BE ACTION FILE NAME!

### Trigger
- run manually `on: workflow_dispatch:`
### Inputs
- NOT NEEDED
### Outputs
- NOT SET
### Example usage
Via github.com Web UI
