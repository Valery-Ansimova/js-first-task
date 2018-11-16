    'use scrict';

    var x = prompt("enter x");
    var xNumber = parseInt(x);

    var y = prompt("enter y");
    var yNumber = parseInt(y);

    if (yNumber > 0 && xNumber + yNumber < 4 && xNumber + yNumber > 0) {
        console.log("Point falls into area");
    } else {
        console.log("The point misses the area");
    }
