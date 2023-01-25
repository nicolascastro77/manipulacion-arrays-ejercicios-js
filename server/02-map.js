//El método map consiste en crear un nuevo array a partir de los elementos originales transformados mediante una función (callback) y es inmutable.

const visitors   = ["🧑", "👽", "🧑", "🧑", "🤖"];


// const letters = ['a','b','c'];

// const newArray=[];
// for (let index = 0; index < letters.length; index++) {
//     const element = letters[index];
//     newArray.push(element + '**');

// }
// console.log(letters);
// console.log(newArray);

//MAP

const newArray = visitors.map (item => item + '**');
console.log(visitors);
console.log(newArray);

export function multiplyElements(array) {
    // Tu código aquí 👈
    const newArray = array.map(item => (item * 2));
    return newArray;
 }
 



 