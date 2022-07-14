
const numbers = [1,2,3,5,45,37,58];

let acc = 0;

const sumAll = number => {
    for (const value of number) {
        acc += value;
    }
    return acc;
};

console.log(sumAll( numbers ));