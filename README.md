# Composite GH actions 

This action creates a file ~/date.txt with the current date.


## Inputs

## `fileName`

**Required** The name of the file. Default `"~/date.txt"`.

## Outputs

## `fileContent`

The time take by 'date'.

## Example usage
```yaml
uses: radiomix/gh-composite-action
with:
  fileName: 'date.txt'
```
