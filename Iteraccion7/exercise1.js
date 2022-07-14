const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];

const finderName = (list, word) => {
    if( list.includes(word) ){
        let position = list.indexOf(word) + 1;
        return `Existe esta en la posicion: ${position}`;
    } else{
        return `No existe`;
    }
}

console.log(finderName(nameFinder,'Peggy'));