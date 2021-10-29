// **Palidroma**
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// **Pari e Dispari**
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// 

function checkPalindrome(str) {

  const len = str.length;

  for (let i = 0; i < len / 2; i++){

      if (str[i] !== str[len - 1 - i]) {
          console.log(str[i]);
        return 'not è palindromo';
        
      }
  }
  return 'è palindromo';
}


let prova = "otto";

let risultato = checkPalindrome(prova);

console.log(risultato);


//esercizio PARI O DISPARI


let sceltaPoD = prompt("Scegli tra pari o dispari");
let scletaNum = prompt("scegli un numero tra uno o 5")

let risultatoDadi = pariODispari(sceltaPoD, scletaNum, randomNumber(5,1));

console.log("hai scelto", sceltaPoD);


console.log("risultato", risultatoDadi);

function pariODispari(choiceUser, numUser, numPc){

  
  if((choiceUser != "pari") && (choiceUser != "dispari")){
    alert("INSERISCI UNA SCELTA VALIDA");
    return "ricarica la pagina";
  }else{

    if((numUser + numPc) % 2){
      if(choiceUser === "dispari")
      return "hai vinto"; 
    }else {
      return "hai perso";
    }

  }

};

function randomNumber(max, min){
  num = Math.floor(Math.random(1*max) + min);
};
