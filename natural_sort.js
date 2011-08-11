// http://www.overset.com/2008/09/01/javascript-natural-sort-algorithm-with-unicode-support/


function naturalSort(a,b)
// setup temp-scope variables for comparison evauluation
var x=a.toString().toLowerCase()||'',y=b.toString().toLowerCase()||'',
nC=String.fromCharCode(0),
xN=x.replace(re,nC+'$1'+nC).split(nC),
yN=y.replace(re, nC + '$1' + nC).split(nC),
xD=(new Date(x)).getTime(),
if(xD)yD=(new Date(y)).getTime(); //no point in getting yD if xD is not a date

// natural sorting of dates
if(xD&&yD){ // check for valid dates only once
if(xDyD)return 1;
}

// natural sorting through split numeric strings and default strings
var cLoc,numS=Math.max(xN.length,yN.length);
for(cLoc=0;cLoc<numS;cLoc++){
// instead of performing these next 6 operations in the if
// and the same 6 operations in the else if, just do them once
// so we can reuse results instead of computing twice
xNcL=xN[cLoc];
yNcL=yN[cLoc];
FxNcL=parseFloat(xNcL);
FyNcL=parseFloat(yNcL);
oFxNcL=FxNcL||xNcL;
oFyNcL=FyNcL||yNcL;

if(oFxNcLoFyNcL)return 1;
}
return 0;
}
/*
 * Natural Sort algorithm for Javascript - Version 0.6 - Released under MIT license
 * Author: Jim Palmer (based on chunking idea from Dave Koelle)
 * Contributors: Mike Grier (mgrier.com), Clint Priest, Kyle Adams, guillermo
 */
function naturalSort (a, b) {
	var re = /(^-?[0-9]+(\.?[0-9]*)[df]?e?[0-9]?$|^0x[0-9a-f]+$|[0-9]+)/gi,
		sre = /(^[ ]*|[ ]*$)/g,
		dre = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
		hre = /^0x[0-9a-f]+$/i,
		ore = /^0/,
		// convert all to strings and trim()
		x = a.toString().replace(sre, '') || '',
		y = b.toString().replace(sre, '') || '',
		// chunk/tokenize
		xN = x.replace(re, '\0$1\0').replace(/\0$/,'').replace(/^\0/,'').split('\0'),
		yN = y.replace(re, '\0$1\0').replace(/\0$/,'').replace(/^\0/,'').split('\0'),
		// numeric, hex or date detection
		xD = parseInt(x.match(hre)) || (xN.length != 1 && x.match(dre) && Date.parse(x)),
		yD = parseInt(y.match(hre)) || xD && y.match(dre) && Date.parse(y) || null;
	// first try and sort Hex codes or Dates
	if (yD)
		if ( xD < yD ) return -1;
		else if ( xD > yD )	return 1;
	// natural sorting through split numeric strings and default strings
	for(var cLoc=0, numS=Math.max(xN.length, yN.length); cLoc < numS; cLoc++) {
		// find floats not starting with '0', string or 0 if not defined (Clint Priest)
		oFxNcL = !(xN[cLoc] || '').match(ore) && parseFloat(xN[cLoc]) || xN[cLoc] || 0;
		oFyNcL = !(yN[cLoc] || '').match(ore) && parseFloat(yN[cLoc]) || yN[cLoc] || 0;
		// handle numeric vs string comparison - number < string - (Kyle Adams)
		if (isNaN(oFxNcL) !== isNaN(oFyNcL)) return (isNaN(oFxNcL)) ? 1 : -1;
		// rely on string comparison if different types - i.e. '02' < 2 != '02' < '2'
		else if (typeof oFxNcL !== typeof oFyNcL) {
			oFxNcL += '';
			oFyNcL += '';
		}
		if (oFxNcL < oFyNcL) return -1;
		if (oFxNcL > oFyNcL) return 1;
	}
	return 0;
}
// Simple numerics
['10',9,2,'1','4'].sort(naturalSort)
['1',2,'4',9,'10']

// Floats
['10.0401',10.022,10.042,'10.021999'].sort(naturalSort)
['10.021999',10.022,'10.0401',10.042]

// Float & decimal notation
['10.04f','10.039F','10.038d','10.037D'].sort(naturalSort)
['10.037D','10.038d','10.039F','10.04f']

// Scientific notation
['1.528535047e5','1.528535047e7','1.528535047e3'].sort(naturalSort)
['1.528535047e3','1.528535047e5','1.528535047e7']

// IP addresses
['192.168.0.100','192.168.0.1','192.168.1.1'].sort(naturalSort)
['192.168.0.1','192.168.0.100','192.168.1.1']

// Filenames
['car.mov','01alpha.sgi','001alpha.sgi','my.string_41299.tif'].sort(naturalSort)
['001alpha.sgi','01alpha.sgi','car.mov','my.string_41299.tif'

// Dates
['10/12/2008','10/11/2008','10/11/2007','10/12/2007'].sort(naturalSort)
['10/11/2007', '10/12/2007', '10/11/2008', '10/12/2008']

// Money
['$10002.00','$10001.02','$10001.01'].sort(naturalSort)
['$10001.01','$10001.02','$10002.00']

// Movie Titles
['1 Title - The Big Lebowski','1 Title - Gattaca','1 Title - Last Picture Show'].sort(naturalSort)
['1 Title - Gattaca','1 Title - Last Picture Show','1 Title - The Big Lebowski'].sort(naturalSort)