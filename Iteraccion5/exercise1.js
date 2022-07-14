
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

const averageWord = listMixedElements => {
    let accString = 0;
    let accNumbers = 0;
    for (let value of listMixedElements) {
        if( typeof value === "number"){
            accNumbers += value;
        } else {
           accString += value.length;
        }
    }
    return `Total de numeros: ${accNumbers}\ntotal de letras ${accString}`;
}

console.log(averageWord( mixedElements ));