/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global require, define, $, window, navigator,document,FileReader */

/*
* Find the biggest element in the array of numbers. Use function <code>Math.max</code> for this;
*
*
*
*/

var numberArray = [1, 2, 3, 4, 10, 5, 6, 7];


(function () {
    "use strict";
    
    //i am intrested in JS
    var i,
        len = numberArray.length,
        imGreater = 0;
    for (i = 0; i < len; i++) {
        if (imGreater < numberArray[i]) {
            imGreater =  numberArray[i];
        }
    }
    console.log(imGreater);
    
    //OHH ..I want to use Math.max    
    for (i = 0; i < len; i++) {
        imGreater = Math.max(imGreater, numberArray[i]);
    }
    console.log(imGreater);
    
    //hmmmm.. now i know about forEach --:) even the browser Compatibility    
    numberArray.forEach(function (num) {
        imGreater = Math.max(imGreater, num);
    });
    console.log(imGreater);
    
    //oyeee I have x+ years of JS experience -- i too  read MDC and all
    imGreater = Math.max.apply(null, numberArray);
    console.log(imGreater);

}());
/*
* Transform array of numbers to array of functions that will alert that digits;
*
*
*
*/
numberArray = [1, 2, 3, 4, 10, 5, 6, 7];

(function () {
    "use strict";
    var i,
        len = numberArray.length,
        imGreater = 0;
     
    for (i = 0; i < len; i++) {
        (function (num) {
            numberArray[i] = function () {
                return num;
            };
        }(numberArray[i]));
    }
    
}());
