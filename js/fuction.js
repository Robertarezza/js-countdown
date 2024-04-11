/**
 * Description: stampa 
 * @param {number} s
 */
function prinTime(s) {
    document.getElementById("second").innerText = s;
}




/**
 * Description: fai ripartire il count down
 */
function restartCountdown() {
    // Ferma il countdown attuale, se esiste
    //clearInterval(startCount);

    // Reimposta il valore del countdown
    seconds = 11;

    // Avvia il countdown nuovamente
    startCountdown();
}