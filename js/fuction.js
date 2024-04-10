/**
 * Description
 * @param {number} s
 */
function prinTime(s) {
    document.getElementById("second").innerText = s;
}


function startCountdown() {
     startCount = setInterval(function(){
    if(seconds > 1){
        seconds--;
        console.log(seconds);
    }else {
        happyNewHear.classList.add("happy");
        seconds = happyNewHear.innerText;
        console.log(seconds, happyNewHear);
        //console.log(happyNewHear.innerText);
        clearInterval(startCount);
        
    }
    prinTime(seconds)
    
   
}, 1000)
}

function restartCountdown() {
    // Ferma il countdown attuale, se esiste
    clearInterval(startCount);

    // Reimposta il valore del countdown
    seconds = 11;

    // Avvia il countdown nuovamente
    startCountdown();
}