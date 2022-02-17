'use strict';

function testClosure() {
    let a = 10;
    var b = 20;
    
    setTimeout(function (){
        console.log(a);
        console.log(b);
    }, 2000);
}

testClosure();