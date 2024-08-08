var _getRegionSetting = function() {
  var result = {
    currencySymbol: "$",
    decimalSymbol: ",",
    digitGrouping: ",",
    listSeperator: ",",
    negativeSymbol: "-"
  };
 
  try {
    result.currencySymbol = (function currencySymbol() {
      var n = "$100.00";
      n = n.toLocaleString().match(/\D/)[0];
      return n;
    })() || result.currencySymbol;
  } catch(e) { }

  try {
    result.decimalSymbol = (function decimalSymbol() {
      var n = 1.1;
      n = n.toLocaleString().match(/\D/)[0];
      return n;
    })() || result.decimalSymbol;
  } catch(e) { }

  try {
    result.digitGrouping = (function digitGrouping() {
      var n = 10000;
      n = n.toLocaleString().match(/\D/)[0];
      return n;
    })() || result.digitGrouping;
  } catch(e) { }
  
  try {
    result.listSeperator = (function listSeparator() {
      var n = [1,2,3,4,5];
      n = n.toString().toLocaleString().match(/\D/)[0];
      return n;
    })() || result.listSeperator;
  } catch(e) { }

  try {
    result.negativeSymbol = (function negativeSymbol() {
      var n = -1;
      n = n.toLocaleString().match(/\D/)[0];
      return n;
    })() || result.negativeSymbol;
  } catch(e) { }
   
  return result;
};

_getRegionSetting();