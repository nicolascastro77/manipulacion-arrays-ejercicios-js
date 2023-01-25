//reduce El método reduce es inmutable y consiste retornar un solo valor del array iterado a partir de una función (callback) que indica de qué manera se itera cada elemento para reducirlo.
const numbers = [1,2,3,5,89,4,78,5,9,85,52,49,15,4,84,54,5,5,5,5,4,5,1,55,5,2,1,5,98];

// let sum = 0;

// for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//     sum = sum + element;
// }

// console.log(sum);


const rta = numbers.reduce((sum,element)=> sum + element,0);
console.log (rta);

const rta2 = numbers.reduce((obj,item) =>{
    if (!obj[item]){
        obj[item]=1;
    } else {
        obj[item] = obj [item]+1;
    }
    return obj;
}, {});

console.log(rta2);


const levels = [
    {
      customerName: "Nicolas",
      level: "hight",
      delivered: true,
    },
    {
      customerName: "Zulema",
      level: "hight",
      delivered: false,
    },
    {
      customerName: "Santiago",
      level: "low",
      delivered: true,
    },
    {
      customerName: "Valentina",
      level: "medium",
      delivered: true,
    },
  ]

  const rta3= levels.map(item => item.level)
  .reduce((obj,item) =>{
    if (!obj[item]){
        obj[item]=1;
    } else {
        obj[item] = obj [item]+1;
    }
    return obj;
}, {});

console.log (rta3);


