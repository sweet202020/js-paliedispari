//L’utente sceglie pari o dispari
const userChoice = prompt('scegli pari o dispari');
console.log (userChoice);
//inserisce un numero da 1 a 5.
const userNumber = Number(prompt('scegli un numero da 1 a 5'));
console.log(userNumber);
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function botNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

const range = botNumber(1,5);
console.log(range)
//Sommiamo i due numeri
const somma = userNumber+range
console.log(somma);
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function pariDisapri (numero){
    if (numero % 2 == 0){
       return true
       
    }
    return false
}
const parametroPariDispari = pariDisapri(somma)



//Dichiariamo chi ha vinto.

if ((pariDisapri(somma) && userChoice==='pari') || ((userChoice==='dispari') && pariDisapri(somma)==false)){
    console.log("ha vinto l'utente")
} 
else{
    console.log('ha vinto il bot');
}