const displayText = document.querySelector("#result");
displayText.value = "Result\n";

function saveInput(e){
    displayText.value += e.target.value +'\n';
}

function debounce(func, timeout = 300){
    let timer;
    //check the timer behavior
    let allTimer = [];
    return (...args) => {
        console.log(allTimer);
        console.log(timer);
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
        //mointor the timer behavior
        allTimer.push(timer);
    };
}
const processChange = debounce((e) => saveInput(e));

const search = document.querySelector('#search');
search.addEventListener("keyup", processChange);

const clear = document.querySelector('#clear');


clear.addEventListener("click", (e) =>{
    displayText.value = "Result\n";
})


