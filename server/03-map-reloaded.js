const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ]
  
//  const newArray = orders.map(item => item.total);



 //agregar - copiar
 const newArray2 = orders.map((item) => {
    return {
        ...item,
        tax: .19
    };
 });
 console.log("edit", newArray2);
 console.log("original",orders);




 export function addNewAttr(array) {
  // Tu código aquí 👈
  return array.map((item) => {
    return {
      ...item,
      taxes: Math.trunc(item.price * 0.19),
    }
  });
}


const arrayPrueba = [
  {
    name: "Product 1",
    price: 1000,
    stock: 10
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20
  }
]

addNewAttr(arrayPrueba);


