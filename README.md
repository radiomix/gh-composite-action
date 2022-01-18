## Composite GH actions

This action creates a file ~/date.txt with the current date.
```
[![use composite action](https://github.com/radiomix/gh-composite-action/actions/workflows/caller-action.yaml/badge.svg)](https://github.com/radiomix/gh-composite-action/actions/workflows/caller-action.yaml)

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

## Clean Pruner Runs
This action cleans up old runs of the pruner itself.
[![Clean up Pruner Runs](https://github.com/radiomix/gh-composite-action/actions/workflows/cleanup-pruner-runs.yaml/badge.svg)](https://github.com/radiomix/gh-composite-action/actions/workflows/cleanup-pruner-runs.yaml)
### Caution: `workflow_id:` MUST BE ACTION FILE NAME!

### Trigger
- run manually `on: workflow_dispatch:`
### Inputs
- NOT NEEDED
### Outputs
- NOT SET
### Example usage
Via github.com Web UI
