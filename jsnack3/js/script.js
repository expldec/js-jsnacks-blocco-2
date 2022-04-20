// jsnack3. Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente.

let upperBound = parseInt(prompt('Inserisci il numero più alto che vuoi elevare al cubo'));

while (isNaN(upperBound) || upperBound % 1 !== 0) {
    upperBound = prompt('Inserisci il numero più alto che vuoi elevare al cubo. Deve essere un numero intero');
}


if (upperBound >=0) {
    for (let i = 1; i <= upperBound; i++) {
        console.log(`Il cubo di ${i} è ${i**3}`)
    }
}

// Nel caso fosse un numero negativo
else {
    for (let i = -1; i >= upperBound; i--) {
        console.log(`Il cubo di ${i} è ${i**3}`)
    }
}

