// Iteraccion-2

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

let buscarPalabra = ( list ) => {
    console.log(list.reduce((acc, val) => acc.length > val.length ? acc : val, ''));
}

// buscarPalabra( avengers );

// Ejercicio 
// Recorrer todos los avengers
// el primero que encuentra es el mas largo porque no hay ninguno
// comparo el que tengo con el siguiente
// si el siguiente es mas largo lo cambio

const findLongestWord = list => {
    let longestWord = '';
    list.forEach( element => {
        ( element.length > longestWord.length) ? longestWord = element : longestWord;
    });
    return `El mas largo es ${longestWord}`;
};

console.log(findLongestWord( avengers ));

