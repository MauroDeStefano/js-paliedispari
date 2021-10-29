// **Palidroma**
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// **Pari e Dispari**
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

function checkPalindrome(str) {

  const len = str.length;

  for (let i = 0; i < len / 2; i++) {

      if (str[i] !== str[len - 1 - i]) {
          return 'not è palindromo';
      }
  }
  return 'è palindromo';
}

let prova = "palindrordnilap"

let risultato = checkPalindrome(prova);

console.log(risultato);

let risultatoDadi = PariODispari("dispari", 4);

console.log(risultatoDadi);

function PariODispari(scelta, numero){
   
  sceltaLet = "pari";

  if(scelta === "dispari"){
    sceltaLet = "dispari";
    console.log(sceltaLet);
  }else if (sceltaLet != "dispari" && sceltaLet != "pari"){
    alert("scrivere Pari o Dispari, la scelta effettuata non corrisponde");
    console.log(sceltaLet);
  }


}


