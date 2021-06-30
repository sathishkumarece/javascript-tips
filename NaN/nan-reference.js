

// Creating a object
const obj1 = {'foo':'bar'};
console.log(obj1);
//Assing the object to another variable
const obj2 = obj1;
obj2.foo = 'hello';
console.log(obj1);
console.log(obj2);
console.log(obj1 === obj2) //true, because it refers to same memory location

// Creating an array
const arr1 = ['foo','bar'];
console.log(arr1);
//Assing the array to another variable
const arr2 = arr1;
arr2.push('hello');
console.log(arr1);
console.log(arr2);
console.log(arr1 === arr2) //true, because it refers to same memory location

//Way to get NaN value
const num1 = parseInt('Hello');
console.log(num1)
//Assign the NaN to another variable 
const num2 = num1;
console.log(num2)

console.log(num1 === num2) //false. why???