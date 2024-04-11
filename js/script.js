//test
//alert("ciao");


//creiamo variabile secondi

let seconds = 10;
let happyNewHear = document.getElementById("message");
let startCount = null;
const countDown = document.getElementById("avvio");

prinTime(seconds)
console.log(seconds);

countDown.addEventListener("click", startCountdown);

/**
 * Description: start al countdown

 */
function startCountdown() {
    //this.style.pointerEvents = "none";
    if (startCount === null){
        startCount = setInterval(function(){
        console.log("creo interval", startCount);
    //this.removeEventListener("click", startCountdown );
    
   if(seconds > 1){
       seconds--;
       console.log(seconds);
   }else {
       happyNewHear.classList.add("happy");
       seconds = happyNewHear.innerText;
       console.log(seconds, happyNewHear);
       //console.log(happyNewHear.innerText);
       clearInterval(startCount);
       startCount = null
       
    }
   prinTime(seconds)
   
  
}, 1000)
}else {
    console.log("intervallo gia attivo");
}
}

    
countDown.addEventListener("click", restartCountdown);

