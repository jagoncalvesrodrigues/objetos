// # Ejercicios

// ## EVENTOS

// - Crea un botón con la etiqueta <button> en tu página HTML y añade un evento de click que muestre en la consola 
// el texto que tenga botón al hacer click.

const mainButton = document.getElementById('main-button');
mainButton.addEventListener('click', ()=>console.dir(mainButton.innerText));

// - Crea un h1 con el texto "Soy un título ", al ponerte con el ratón encima del h1, deberá cambiar al texto a 
// "Quita de encima!!!" y al quitarte, deberá volver a poner "Soy un título"

const mainTitle = document.getElementById('main-title');
mainTitle.addEventListener('mouseenter', () => {
    mainTitle.textContent = 'Quita de encima!!!';
});

mainTitle.addEventListener('mouseleave', () => {
    mainTitle.textContent = 'Soy un título';
});;

// - Crea un p con el texto "esperando entrada de teclado..." al pulsar cualquier tecla deberá poner 
// "has pulsado la tecla tal" y al soltarla el <p> volverá a tener el texto "esperando entrada de teclado...".
//  Como reto extra puedes intentar añadir si se ha usado una combinación de teclas con alt, shift o control

const mainParagraph = document.getElementById('paragraph');

document.addEventListener('keydown', (event)=>{
    mainParagraph.textContent= `has pulsado la tecla: ${event.key}`;
});

document.addEventListener('keyup', () => {
    mainParagraph.textContent = 'esperando entrada de teclado...';
});

// - Crea un array con 5 palabras. Añade un h2 a tu HTML y ponle un id. Añade dos botones con el texto previus y next
//  respectívamente. Haz que los botones cambien el texto del h2 con las palabras del array, cuando llegues a la última
//  volverás a la primera si pulsas next y cuando estés en la primera podrás volver a la última dandole a previous.


const array = ['Makhachev','Poirier','Strickland','DiegoLopes','Volk'];
let cont = 0;

const changeName = document.getElementById('words');
const previus = document.getElementById('previus');
const next = document.getElementById('next');

const nextFighter = (array) =>{
    console.log(cont)
    cont++;
    if(cont===array.length){
        cont=0;
    }
    changeName.textContent=array[cont];
}
const previousFighter = (array) =>{
    console.log(cont)
    if(cont === 0){
        cont=array.length-1
    }else{
        cont--
    }
    changeName.textContent=array[cont];
}

next.addEventListener('click',()=>nextFighter(array));
previus.addEventListener('click',()=>previousFighter(array));
