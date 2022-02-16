'use strict'

function outer(){
    let x = 10;
    var y = 20;

    function middle(){
        let x = 30;
        var y = 40;

        function inner(){
            console.log(x);
            console.log(y);
        }
        inner();

        //To test the closure with the name
        function middle(){
            let i = 100;
            var j = 200;
            function inner(){
                console.log(x);
                console.log(y);
                console.log(i);
                console.log(j);
            }
            inner();
        }
        middle();
    }
    middle();
}
outer();