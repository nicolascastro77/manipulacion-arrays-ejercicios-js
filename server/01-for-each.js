const letters = ['a','b','c'];

for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log(element);
    
}


letters.forEach(item => console.log(item));


const tareas = [
    {id: 1, titulo: 'Diseño practico', estado: Realizado, descripcion: "Diseñar un sitio web practico"},
    {id: 2, titulo: 'Desarrollo', estado: Realizado, descripcion: "Desarrollar un sitio web"},
    {id: 3, titulo: 'Implementar', estado: Incompleto, descripcion: "Implementar interaccion de un sitio web"},
];

const todo = document.getElementById('todo');
tareas.forEach(tareas =>{
    app.innerHTML += `<li> ${tareas.id} ${tareas.titulo} - ${tareas.estado} - ${tareas.descripcion} <input type="checkbox">  </li>`;
});