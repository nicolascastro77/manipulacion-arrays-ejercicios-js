const elements = ["hola", null, "como", "estas"]

const resultado = elements.join("/")

console.log(resultado) // 'hola//como/estas'


const cadena = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web."

const resultado2 = cadena.split(" ");

console.log(resultado2) // 'hola//como/estas'

const resultado3 = resultado2.join("*").toLowerCase

console.log(resultado3);

export function parseToURL(title) {
    // Tu código aquí 👈
    return title.split(" ").join("-").toLowerCase();
  }
  