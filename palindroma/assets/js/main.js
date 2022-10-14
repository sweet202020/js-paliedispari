//Chiedere all’utente di inserire una parola
const userWord = prompt('scrivi una parola e ti dirò se è palindroma')
//Creare una funzione per capire se la parola inserita è palindroma

//utilizzo il metodo split per suddividere la parola in lettere
const splitWord = userWord.split("");
console.log(splitWord);
/* const str = splitWord.toString()
console.log(str) */


//utilizzo il reverse per cambiare l'ordine delle lettere
const reverse = splitWord.reverse()
const str = reverse.join('')
console.log(str)

//if per confrontare i due valori
if (str==userWord){
    console.log('la parola è palindroma')
}else{
    console.log('la parola non è palindroma');
}

