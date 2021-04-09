var numeroPc = Math.floor(Math.random()*6);
console.log("Il numero generato dal compuer è " + numeroPc);
document.getElementById('iaNumber').innerHTML = ("Il numero generato dal computer è " + numeroPc);

var numeroGiocatore = parseInt(prompt("Inserisci un numero tra 1 e 6"));
console.log("Il tuo numero è " + numeroGiocatore);
document.getElementById('humanNumber').innerHTML = ("Il numero generato dal computer è " + numeroGiocatore);


if  ( numeroPc > numeroGiocatore) {
    console.log("Pc vince")

}

if (numeroGiocatore > numeroPc) {
    console.log("Giocatore umano vince")
}