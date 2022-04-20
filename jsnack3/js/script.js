// jsnack3. Calcola la somma e la media dei primi 10 numeri.

const primoNumero = 1
const iterazioni = 10;
// ho scelto di usare un array perché mi permette facilmente di modificare le due variabili qui sopra
// e fare somma e media di una quantità arbitraria di numeri interi consecutivi.

//costruisco un array con i numeri da 1 a 10
const numeri = [];
for (let i = primoNumero; i < iterazioni+primoNumero; i++) {
    numeri.push(i);
}

//inizializziamo la variabile della somma
let somma = 0
//iteriamo l'array appena creato per calcolarne la somma
for (let i = 0; i < numeri.length; i++) {
    somma += numeri[i];
}

// calcoliamo la media dell'array
let media = somma / numeri.length;
console.log(`I numeri dati sono: ${numeri}. Somma: ${somma}. Media: ${media}.`);