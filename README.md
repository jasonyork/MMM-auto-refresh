# MMM-auto-refresh

This is a module for the [MagicMirror²](https://github.com/MichMich/MagicMirror/).

This module will force a page refresh based on the specified interval.  This can be particularly useful when running in `serveronly` mode and you notice the some modules are not auto updating after long periods.

## Using the module

To use this module, add the following configuration block to the modules array in the `config/config.js` file:
```js
var config = {
    modules: [
        {
            module: 'MMM-auto-refresh',
            config: {
                // See below for configurable options
            }
        }
    ]
}
```

## Configuration options

| Option            | Description
|------------------ |-----------
| `refreshInterval` | *Optional* How often to refresh the page <br><br>**Type:** `int`(milliseconds) <br>Default 8640000000 milliseconds (24 hours)
