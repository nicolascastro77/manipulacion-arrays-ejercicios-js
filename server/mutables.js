
//El método push agrega uno o varios elementos al final del array original. 

const array = [1,2,3]
array.push(4,5)
console.log(array) // [ 1, 2, 3, 4, 5 ]


//l método unshift agrega uno o varios elementos al inicio del array original. 

const array2 = [3,4,5]
array.unshift(1,2)
console.log(array) // [ 1, 2, 3, 4, 5 ]


// El método pop extrae el elemento del final del array original. El método no recibe ningún argumento. Retorna

const array3 = [1,2,3,4]
const lastElement = array.pop()
console.log(lastElement) // 4
console.log(array) // [ 1, 2, 3 ]

// El método shift extrae el elemento del inicio del array original. El método no recibe ningún argumento. 


const array4 = [1,2,3,4]
const firstElement = array.shift()
console.log(firstElement) // 1
console.log(array) // [ 2, 3, 4 ]


// El método splice extrae uno o varios elementos del array original a partir del índice y los reemplaza con otro elemento especificado como argumento.

/*array.splice(índice, cantidad, items)
array.splice(índice, cantidad, item1, item2, ..., itemN)
*/

const array5 = [1,2,3,4]
const elements = array.splice(2,1,"tres")
console.log(elements) // [3]
console.log(array) // [ 1, 2, 'tres', 4 ]

const array6 = [1,2,3,4]
const elements2 = array.splice(1,2,"dos", "tres")
console.log(elements) // [ 2, 3 ]
console.log(array) // [ 1, 'dos', 'tres', 4 ]










const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const product = products.find(item => item.id ==='🍔');
if (product) {
    myProducts.push(product);
}

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));