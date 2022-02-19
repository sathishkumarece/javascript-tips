/**
 * Implementing the quick sort algorithm in Javascript
 * Three key points to remember for quick sort
 * 1. Choose the pivot
 * 2. Partition the array
 * 3. Recursive action
 */
'use strict'

/**
 * Quicksort function
 * @param {*} array 
 * @param {*} lowIndex 
 * @param {*} highIndex 
 */
function quicksort(array, lowIndex = 0, highIndex = array.length-1){
    //Stop the recursion if array size is one or lesser
    if(lowIndex >= highIndex) return;

    //Perform the partition
    const pointer = partition(array, lowIndex, highIndex);

    //Recursive the quicksort for the left and right of sorted pivot element
    quicksort(array, lowIndex, pointer-1);
    quicksort(array, pointer+1, highIndex);
}

/**
 * Function to partition the input array based on indices and swap the record
 * @param {*} array 
 * @param {*} lowIndex 
 * @param {*} highIndex 
 * @param {*} pivot 
 */
function partition(array, lowIndex, highIndex){

    //Choose the last index value as pivot
    const pivot = array[highIndex];

     //Declaring the pointers
     let leftPointer = lowIndex;
     let rightPointer = highIndex;
 
     while(leftPointer < rightPointer){
         while(array[leftPointer] <= pivot && leftPointer < rightPointer){
             leftPointer++;
         }
         while(array[rightPointer] >= pivot && leftPointer < rightPointer){
             rightPointer--;
         }
         //Swap the value as leftPointer value is larger than rightPointer value
         [array[leftPointer],array[rightPointer]] = [array[rightPointer],array[leftPointer]];
     }
     //swap the pointer value and pivot value
     [array[leftPointer],array[highIndex]] = [array[highIndex],array[leftPointer]];

     return leftPointer;
}

//Validating the quicksort algorithm

//Generating the random 10 number between 1 and 100
const len = 10;
const min = 1;
const max = 100;
const input = [];
for(let i=0; i<len; i++){
    input.push(Math.floor(Math.random() * (max - min))+min);
}
//Printing the value before sort
console.log(input);

//Applying quick sorting algorithm
quicksort(input);

//Printing the value after sort
console.log(input);
