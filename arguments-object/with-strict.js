'use strict'

function printMe(val){
    arguments[0] = 10; //Assign the new value to arguments object
    console.log(val); // Passed value (5) will be printed as value willn't be changed in strict mode
}

printMe(5);