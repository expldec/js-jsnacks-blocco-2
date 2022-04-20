// jsnack2. Crea un array vuoto.
// Chiedi per 6 volte all'utente di inserire un numero,
// se è dispari inseriscilo nell'array.

const numeriDispari = []

for (let i = 0; i < 6 ; i++) {
    let userNumber = parseInt(prompt("inserisci un numero"));
    if (userNumber % 2 === 1) {
        numeriDispari.push(userNumber);
    }   
}

console.log(`${numeriDispari.length} numeri dispari. i numeri sono: ${numeriDispari}` );
