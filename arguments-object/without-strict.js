
function printMe(val){
    arguments[0] = 10; //Assign the new value to arguments object
    console.log(val); // New vaule (10) will be printed
}

printMe(5);