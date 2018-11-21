    'use strict';

    var x = prompt("enter x");
    var xNumber = parseInt(x);

    var y = prompt("enter y");
    var yNumber = parseInt(y);

    if (Math.abs(y) >= Math.abs(x) && Math.abs(x) + Math.abs(y) <= 1) {
        console.log("Point falls into area");
    } else {
        console.log("The point misses the area");
    }
