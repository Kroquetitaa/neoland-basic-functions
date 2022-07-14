// Iteraccion-1
const sum = ( numberOne, numberTwo ) => {
    if( numberOne > numberTwo){
        return `El ${numberOne} es mayor que el ${numberTwo}`;
    } else {
        return `El ${numberOne} es menor que el ${numberTwo}`;
    }
}

console.log(sum(11,12));