var _getRegionSetting = function() {
  var result = {
    currencySymbol: (() => {
                      try {
                        return "$100.00".toLocaleString().match(/\D/)[0];
                      } catch(e) { }
                    })() || "$",

    decimalSymbol: (() => {
                      try {
                        var n = 1.1;
                        return n.toLocaleString().match(/\D/)[0];
                      } catch(e) { }
                    })() || ",",

    digitGrouping: (() => {
                      try {
                        var n = 10000;
                        return n.toLocaleString().match(/\D/)[0];
                      } catch(e) { }
                    })() || ",",

    listSeperator: (() => {
                      try {
                        var n = [1,2,3,4,5];
                        return n.toString().toLocaleString().match(/\D/)[0];
                      } catch(e) { }
                    })() || ",",

    negativeSymbol: (() => {
                      try {
                        var n = -1;
                        return n.toLocaleString().match(/\D/)[0];
                      } catch(e) { }
                    })() || "-"
    };
 
  return result;
};

_getRegionSetting();