## Composite GH actions

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

## Clean old runs
This action cleans up old runs of itself.
https://github.com/radiomix/gh-composite-action/blob/6cd188308060a3e64b82eec1b5c8224a2085ef59/.github/workflows/run-pruner.yaml#L6-L64
### Trigger
- run manually `on: workflow_dispatch:`
### Inputs
- NOT NEEDED
### Outputs
- NOT SET
### Example usage
Via github.com Web UI