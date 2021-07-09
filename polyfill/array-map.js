//Polyfills for array maps

Array.prototype.myMap = function(cb){

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
        newArray.push(cb(this[i], i, this)); //Maps will accept three parameters 1.Current value, 2.Index, 3.Entire array
    }
    return newArray;
}

const myArray = [1,2,3,4,5];
console.log(myArray.myMap((val,index) => val * (index+1)));