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
```

### Example Usage
```javascript
const regionSettings = _getRegionSetting();
console.log(regionSettings.currencySymbol);  // Example output: "$"
```


## `noNegZero` Method

The `noNegZero` method is an extension of the JavaScript `Number` prototype that ensures a variable holding a potentially negative zero (`-0`) is converted to a non-negative zero (`0`). This method is particularly useful in scenarios where `-0` can cause unexpected behavior in comparisons or calculations.

### Functionality

The `noNegZero` method operates on any number and returns:

- **`0`** if the original number is `-0`.
- **The original number** if it is any other value, including positive zero (`0`), positive numbers, or negative numbers.

### Example Usage

```javascript
// Direct usage on a number literal
console.log((-0).noNegZero()); // Outputs: 0
console.log((0).noNegZero());  // Outputs: 0
console.log((5).noNegZero());  // Outputs: 5
console.log((-5).noNegZero()); // Outputs: -5

// Usage with a variable
var value = -0;
if (value.noNegZero() == 0) {
    console.log("The value is non-negative zero"); // This will execute
}

value = 3.14;
console.log(value.noNegZero()); // Outputs: 3.14
```
