'use strict'
/**
 * Merge sort algorithm
 *  Three points to remember
 *  1. Split the array based on mid position of the Array
 *  2. Sort the array and merge them into a single
 *  3. Recursive action
 */

/**
 * Function which split the array and do recursive call until sort
 * @param {*} array 
 * @returns 
 */
function mergeSort(array) {
    if(array.length < 2){
        return array;
    }
    const mid = Math.floor(array.length / 2);
    const leftArr = array.slice(0,mid);
    const rightArr = array.slice(mid);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

/**
 * Merge the given array based on sorting
 * @param {*} leftArr - Array which left to mid position
 * @param {*} rightArr - Array which right to mid position
 * @returns 
 */
function merge(leftArr, rightArr) {
    const result = [];
    let leftPointer = 0;
    let rightPointer = 0;

    while(leftPointer < leftArr.length && rightPointer < rightArr.length) {
        if(leftArr[leftPointer] <= rightArr[rightPointer]) {
            result.push(leftArr[leftPointer]);
            //Increment the left pointer
            leftPointer++;
        }else{
            result.push(rightArr[rightPointer]);
            //Increment the right pointer
            rightPointer++;
        }
    }
    return result.concat(leftArr.slice(leftPointer), rightArr.slice(rightPointer));
}

//Validating the merge sort algorithm

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

//Applying merge sorting algorithm
const output = mergeSort(input);

//Printing the value after sort
console.log(output);