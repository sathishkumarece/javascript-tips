/**
 * 
 * Print X in x pattern
 * 
 * Ex 1: 
 * Input: 1
 * Output: x
 * 
 * Ex 2: 2D table with rows and columns as 3
 * Input: 2
 * output: x_x
 *         _x_
 *         x_x
 * 
 * Ex 2: 2D table with rows and columns as 3
 * Input: 3
 * output: x___x
 *         _x__x_
 *         __x__
 *         _x__x_
 *         x___x
 */

function printXPatters(num){

    //Return x is num is 1
    if(num === 1){
        return 'x';
    }
    //Get the rows and columns size
    //In order to obtain multiple the num by 2 and subtract with 1
    num = (num * 2) - 1;
    let result = '';
    for(let i=0;i<num;i++){
        for(let j=0;j<num;j++){
            if(i === j || i === (num-1-j)){
                result += 'x'
            }else{
                result += '_'
            }
        }
        result += '\r\n'
    }
    return result;
}

console.log(printXPatters(1));
console.log(printXPatters(2));
console.log(printXPatters(3));
console.log(printXPatters(10));