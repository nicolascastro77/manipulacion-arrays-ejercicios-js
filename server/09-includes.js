//includes
//El método includes determina si un array o string incluye un determinado elemento. Devuelve true o false, si existe o no respectivamente.


const pets = [ "cat", "dog", "bat" ]

let includeInArray = false
for (let i = 0; i < pets.length; i++){
    const item = pets[i]
    if (item === "cat"){
        includeInArray = true
        break
    }
}

const rta = pets.includes("dog");
console.log(rta)