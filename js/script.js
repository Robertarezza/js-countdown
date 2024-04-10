//test
//alert("ciao");

//creiamo variabile secondi

let seconds = 10;
let happyNewHear = document.getElementById("message");

const countDown = document.getElementById("avvio");

document.getElementById("second").innerHTML = seconds;
console.log(seconds);

countDown.addEventListener("click", function(){
let count = setInterval(function(){
    if(seconds > 1){
        seconds--;
    }else {
        happyNewHear.classList.add("happy");
        seconds = happyNewHear.innerText;
        //console.log(happyNewHear.innerText);
        clearInterval(count);
        
    }
    
    document.getElementById("second").innerText = seconds;
   
}, 1000)
})

