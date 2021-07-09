//Polyfill for array filter

Array.prototype.myFilter = function(cb){

    //Check object is not null
    if(this == null){
        throw new Error("this is not null or undefined");
    }

    //Check callback function is valid function
    if(typeof cb !== 'function'){
        throw new Error("callback is not valid function");
    }

    let newArray = [];
    for(let i=0; i<this.length; i++){
        let result = cb(this[i], i, this); //Filter will accept three parameters 1.Current value, 2.Index, 3.Entire array
        if(result){
            newArray.push(this[i]);
        }
    }
    return newArray;
}

const myArray = [1,2,3,4,5];
//Print only odd numbers
console.log(myArray.myFilter( val => val % 2 !== 0));