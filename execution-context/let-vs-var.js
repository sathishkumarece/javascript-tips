let a = 10;
var b = 10;

// a is not part of global scope however it is part of script scope
// where b is part of global scope
// Conclusion - varible declared with 'var' will be part of global scope

function outer(){
    let x  = 10;
    function middle(){
        let y = 10;
        function inner(){
            let z = 10;
            console.log(z);
            console.log(x); //closure scope
        }
        inner();
        console.log(y);
    }
    middle();
    console.log(x);
}
outer();