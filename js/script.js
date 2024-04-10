//test
//alert("ciao");

//creiamo variabile secondi

let seconds = 10;
let happyNewHear = document.getElementById("message");

const countDown = document.getElementById("avvio");

prinTime(seconds)
console.log(seconds);

countDown.addEventListener("click", function(){
let count = setInterval(function(){
    if(seconds > 1){
        seconds--;
        console.log(seconds);
    }else {
        happyNewHear.classList.add("happy");
        seconds = happyNewHear.innerText;
        console.log(seconds);
        //console.log(happyNewHear.innerText);
        clearInterval(count);
        
    }
    prinTime(seconds)
    
   
}, 1000)
})

