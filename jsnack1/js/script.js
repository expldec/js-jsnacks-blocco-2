// jsnack1. Il software deve chiedere per 5 volte all'utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

let somma = 0 

//// versione FOR LOOP
// for (let i = 0; i < 5 ; i++) {
//     let userNumber = parseInt(prompt("inserisci un numero"));
//     somma += userNumber;
// }


//// versione WHILE LOOP con verifica tipo
let userNumber;
let i = 0;
while (i < 5) {
    do {
        userNumber = parseInt(prompt("inserisci un numero"));
    } while (isNaN(parseInt(userNumber)));

    somma += userNumber;
    i++;
}

console.log(`la somma dei numeri che hai inserito è ${somma}`);
