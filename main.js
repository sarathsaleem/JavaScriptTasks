/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global require, define, $, window, navigator,document,FileReader */

/*
* Find the biggest element in the array of numbers. Use function <code>Math.max</code> for this;
*
*
*
*/

if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (fn, scope) {
        var i,
            len;
        for (i = 0, len = this.length; i < len; ++i) {
            fn.call(scope, this[i], i, this);
        }
    };
}
if (!Object.keys) {
    Object.keys = function (o) {
        if (o !== Object(o))
        throw new TypeError('Object.keys called on a non-object');
        var k = [],
            p;
        for (p in o) if (Object.prototype.hasOwnProperty.call(o, p)) k.push(p);
        return k;
    }
}


var numberArray = [1, 2, 3, 4, 10, 5, 6, 7];


(function () {
   
    //i just want the output
    var i,
        len = numberArray.length,
        imGreater = numberArray[0];//let set the greater as the first element
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
   
    var i,
        len = numberArray.length;
    /*for (i = 0; i < len; i++) {
        var num = numberArray[i];
        numberArray[i] = function () {
            return num;
        };
    }*/
 
    for (i = 0; i < len; i++) {
        (function (num) {
            numberArray[i] = function () {
                return num;
            };
        }(numberArray[i]));
    }
    
}());
console.log(numberArray);
/*
* Sort array of objects by number of object properties;
*
*
*/

var objectArray = [{a : 'a', b : 'b'}, {a : 'a'}, {a : 'a', b : 'b', c : 'c'}];



objectArray.sort(function (a, b) {
    
    return Object.keys(a).length - Object.keys(b).length;

});

console.log(objectArray);

/*
* Write a function which will return you first two times 1, then 2, then 3, then 5 and so on (Fibonacci numbers).
* Don’t use any global variables.
*
*
*/
var fibonacci = (function () {
	var arr = [0, 1];
    return function () {
        var num = arr[arr.length - 1],
            len = arr.length;
		arr.push(arr[len - 1] + arr[len - 2]);
        return num;
    };
}());

//test
var i;
for (i = 0; i < 10; i++) {
    console.log(fibonacci());
}

/*
* Make this syntax possible: var a = (5).plus(3).minus(6); //2
*
*
*/

Number.prototype.plus = function (n) {
    return this + n;
};
Number.prototype.minus = function (n) {
    return this - n;
};

//Test
console.log("Number  ", (5).plus(3).minus(1));

/*
* Make this syntax possible: var a = add(2)(3); //5
*
*
*/

var add = function (a) {
    return function (b) {
        return a + b;
    };
};

//Test

console.log("Number  ", add(2)(3));