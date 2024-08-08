# jsSnippets
Just a variety of nice little JS snippets

## `_getRegionSetting` Function

The `_getRegionSetting` function is designed to retrieve regional settings specific to currency formatting, decimal symbols, digit grouping, list separators, and negative symbols based on the user's locale. This function attempts to determine these settings using the browser's `toLocaleString` method, falling back to default values if necessary.

### Functionality

The `_getRegionSetting` function returns an object with the following properties:

- **currencySymbol**: The symbol used to denote currency in the user's locale (default: `"$"`).
- **decimalSymbol**: The symbol used to separate the integer part from the fractional part in numbers (default: `","`).
- **digitGrouping**: The symbol used to group digits in large numbers (default: `","`).
- **listSeperator**: The symbol used to separate items in a list (default: `","`).
- **negativeSymbol**: The symbol used to denote negative numbers (default: `"-"`).

### Example Object Returned
```javascript
{
  currencySymbol: "$",
  decimalSymbol: ".",
  digitGrouping: ",",
  listSeperator: ",",
  negativeSymbol: "-"
}

### Example Usage
```javascript
const regionSettings = _getRegionSetting();
console.log(regionSettings.currencySymbol);  // Example output: "$"
