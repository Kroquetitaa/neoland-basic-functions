

const numbers = [12,21,38,5,45,37,6];

const average = listNumber => {
    let acc = 0;
    for (const value of listNumber) {
        acc += value;
    }
    return acc / listNumber.length;
}

console.log( average( numbers ));
