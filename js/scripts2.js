// # Ejercicios

// ## DOM

// - Partiendo de el HTML selecciona en JavaScript el h3 y 
// utilizándolo como punto de partida imprime la información de todos los elementos que hay en formato 
// "familia": Soy un h3 con el id... y la clase... mi padre es un header con.... mi hermano es un h1 con....

const h3 = document.getElementById('start-point');
const header = document.getElementById('header');

console.log(`"familia": Soy un h3 con el id ${h3.id} y la clase ${h3.className}
     mi padre es un header con el id ${h3.parentElement.id} y la clase ${h3.parentElement.className}
     mi hermano es un h1 con el id ${header.children[0].id} y la clase ${header.children[0].className}
     `);

