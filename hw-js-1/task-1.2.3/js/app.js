    'use strict';

var x = prompt("enter x");
var xNumber = parseInt(x);

var y = prompt("enter y");
var yNumber = parseInt(y);

if ((x < 0 && y < 0 && x + y < -2) || (Math.sqrt(x * x + y * y) <= 1)) {
    console.log("Point falls into area");
} else {
    console.log("The point misses the area");
}
