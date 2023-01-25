//El método somees inmutable y consiste retornar un valor lógico verdadero si existe al menos un elemento que cumpla la condición establecida en la función (callback).
const numbers = [1,5,3,9];

let respuesta = false;

for (let i=0; i < numbers.length; i++){
    const element = numbers[i]
    if (element % 2 === 0) {
        respuesta = true;
        break
    }
}

console.log(respuesta);



const rta2 = numbers.some(item => item % 2 ===0);
console.log(rta2);



const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: false,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: false,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ]

  const ordenDeCompra = orders.some(item => item.delivered);
  console.log(ordenDeCompra);


  const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];

  const newAppointment = {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 1, 21),
  };


  const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

  const isOverlap= (newDate) =>{
    return dates.some(date=> {
        return areIntervalsOverlapping (
            {start: date.startDate, end: date.endDate},
            {start: newDate.startDate, end: newDate.endDate},
        )
    })
  }


  console.log(isOverlap(newAppointment))
