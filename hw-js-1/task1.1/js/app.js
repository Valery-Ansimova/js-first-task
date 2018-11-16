    'use scrict';

    var a = 3;
    var b = 9;
    var x;
    if (a > b) {
        x = a-b/2*4;
    } else if (a == b) {
        x = 400;
    } else if (a < b)  {
        x = a - b + 2/b*4;
    }
    console.log('a<b' + x);


