// 3. Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

const nomi = ['Silvio', 'Pierluigi', 'Enrico', 'Carlo', 'Giorgia', 'Matteo','Arnaldo','Ludovico','Giulio','Santino','Renato','Bruno','Beppe'];
const cognomi = ['Berlusconi', 'Bersani', 'Letta', 'Calenda', 'Meloni', 'Salvini', 'Renzi','Forlani','Andreotti','Brunetta','Vespa','Grillo'];

const invitati= [];
for (let i = 0; i < 3; i++) {
    thisNome = Math.floor(Math.random() * nomi.length);
    thisCognome = Math.floor(Math.random() * cognomi.length);

    invitati.push(`${nomi[thisNome]} ${cognomi[thisCognome]} `)
    
}

console.log(invitati);

