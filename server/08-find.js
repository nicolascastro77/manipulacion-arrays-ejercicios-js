//find 
// Los métodos find y findIndex consisten en encontrar el primer elemento de un array que cumpla con la condición especificada en la función (callback).}

const numbers = [1, 30, 41, 29, 50, 60]

let respuesta = undefined
for (let i=0; i < numbers.length; i++){
    const element = numbers[i]
    if (element >= 40) {
        respuesta = element;
        break
    }
}

console.log(respuesta) // 41


const rta2 = numbers.find (element => element === 305);
console.log (rta2);


const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];


  const rta3 = products.find (element => element.id === '🍕');
console.log (rta3);


const rta4 = products.findIndex (element => element.id === '🍕');
console.log (rta4);