const words = ['pedro' ,'manzana' ,'caca' ,'elveneco'];

const newArray =[];
for (let index = 0; index < words.length; index++) {
    const element = words[index];
    if(element.length >=6){
        newArray.push(element);
    }
}
console.log("newarray",newArray);
console.log("original",words);


const filter = words.filter(item => item.length>=6)
console.log("filter",filter);
console.log("original",words);


//example

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
  
  const ordentrue = orders.filter(item => item.delivered && item.total>=100);
//   console.log(ordentrue);


  const search = (query) =>{
    return orders.filter (item => {
        return item.customerName.includes(query);
    })
  }

  console.log(search("Nico"));




 function filterByLength(array) {
  // Tu código aquí 👈
//   const filtro = array.filter(item => item.lenght > 1);

//   return filtro;

const filter = array.filter(item => item.length>=4)
  console.log(filter);
}

arrayPrueba = ['rosa', 'gol', 'pez', 'día', 'gafas'];

filterByLength(arrayPrueba);
