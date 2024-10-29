// # Ejercicios

// ## Objetos

// - Con este objeto imprime por consola una pequeña historia del usuario, "Me llamo John Doe, tengo 35 años..."

const user = {
  name: 'John',
  surname: 'Doe',
  age: 25,
  hobbies: ['leer', 'tocar la guitarra', 'pasear con las cabras'],
  pets: [
    { name: 'Max', type: 'perro' },
    { name: 'Whiskers', type: 'gato' }
  ],
  address: {
    street: '123 Main Street',
    city: 'Gotham',
    state: 'California',
    postalCode: '12345',
    country: 'USA'
  },
  phone: '+1234567890',
  email: 'johndoe@example.com',
  occupation: 'Ingeniero de software',
  education: 'Master en ciencia de datos'
};

console.log(`Me llamo ${user.name} ${user.surname}, tengo ${user.age} años`);

// - Dado este objeto, rellena los 5 arrays con el array de numbers. número + 2, número x 2, número / 2, números pares y números impares.


const data = {
  numbers: [10, 32, 31, 67, 9, 2, 51, 4],
  firstFloor: {
    secondFloor: {
      numbersPlus2: []
    },
    thirdFloor: {
      numbersDouble: []
    }
  },
  fourthFloor: {
    numbersDividedBy2: []
  },
  fifthFloor: {
    onlyEven: [],
    onlyOdd: []
  }
};

const numsum = array =>{
    for (const number of array) {
        data.firstFloor.secondFloor.numbersPlus2.push(number+2);
        data.firstFloor.thirdFloor.numbersDouble.push(number*2);
        data.fourthFloor.numbersDividedBy2.push(number/2);
        if(number%2===0){
            data.fifthFloor.onlyEven.push(number);
        }else{
            data.fifthFloor.onlyOdd.push(number);
        }
    }
}
numsum(data.numbers);
console.log(data.firstFloor.secondFloor.numbersPlus2);
console.log(data.firstFloor.thirdFloor.numbersDouble);
console.log(data.fourthFloor.numbersDividedBy2);
console.log(data.fifthFloor.onlyEven);
console.log(data.fifthFloor.onlyOdd);




// - Crea una función que reciba una frase, por ejemplo "Si no estudias acabarás como Enrique", y rellena el objeto con valores que te pide. 
// Revisa la documentación de los strings si hay algo que no sabes obtener.
//   https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String


const data2 = {
  firstFloor: {
    vowels: []
  },
  secondFloor: {
    constants: []
  },

  fourthFloor: {
    asciiCode: []
  },
  fifthFloor: {
    //Cada palabra de la frase será una posición del array
    wordsInUppercase: [],
    wordsInLowercase: []
  },
  sixthFloor: {
    // En este nivel codificarás la frase para que sea un secreto.
    // Si el caracter es una vocal, la sustituirás por un número siendo a-1 e-2 i-3 o-4 u-5
    // Si el caracter es una consonante deberás sustituirlo por su consonante anterior, si fuera una c, sería una b y si fuera una p sería una ñ y si fuera una v sería una t
    // Si el caracter es un espacio lo sustituirás por una letra random del alfabeto
    secretCode: ''
  }
};

const secretPhrase = phrase =>{
    const vocals = 'aeiouAEIOU';

    for (let letter of phrase) {
        if (vocals.includes(letter)) {
            //Se pregunta si la vocal ya esta dentro del array
            if(data2.firstFloor.vowels.includes(letter)===false){
                data2.firstFloor.vowels.push(letter);
            }
            //se introduce la vocal en el secretCode para luego carmbiarla a numero
            data2.sixthFloor.secretCode+=letter;
        }else if(letter !== ' '){
            //Se pregunta si la consonante ya esta dentro del array
            if(data2.secondFloor.constants.includes(letter)===false){
                data2.secondFloor.constants.push(letter);
            }
            
            //Si al bajar una letra esta se convierte en una vocal tendremos que restarle otro numero
            if(['a','e','i','o','u'].includes(String.fromCharCode(letter.charCodeAt(0)-1))){
                //en el caso de que llegue al caracter ` se hace que la letra introucida sea la z
                if(letter.charCodeAt(0)==96){
                    data2.sixthFloor.secretCode+=String.fromCharCode(122);
                }else{
                    //en caso de que el caracter no sea ` restamos 2 con nomralidad ya que te encuentras en una vocal
                    data2.sixthFloor.secretCode+=String.fromCharCode(letter.charCodeAt(0)-2);
                }
            }else{
                //el valor no es una vocal asi que se va a la letra anterior
                data2.sixthFloor.secretCode+=String.fromCharCode(letter.charCodeAt(0)-1);
            }
        }else{
            //si es otro caracter se introduce un valor random
            data2.sixthFloor.secretCode+=String.fromCharCode(Math.floor(Math.random()*(165-33)));
        }
        //se transforma la letra a codigo ascii y se introduce en el respectivo array
        data2.fourthFloor.asciiCode.push(letter.charCodeAt(0));
    }
    
    //se divide la frase en palabras 
    const wordsArray = phrase.split(' ');
    for (const word of wordsArray) {
        //se introducen las palabras en mayusculas y minusculas
        data2.fifthFloor.wordsInUppercase.push(word.toUpperCase());
        data2.fifthFloor.wordsInLowercase.push(word.toLowerCase());
    }
    
    //reemplazamos las vovales en el array de secretCode las cuales se introdujeron directamente
    data2.sixthFloor.secretCode = data2.sixthFloor.secretCode.replaceAll('a', '1').replaceAll('e', '2').replaceAll('i', '3').replaceAll('o', '4').replaceAll('u', '5');

}

secretPhrase('zapato bonito');
console.log(data2.firstFloor.vowels);
console.log(data2.secondFloor.constants);
console.log(data2.fourthFloor.asciiCode);
console.log(data2.fifthFloor.wordsInUppercase);
console.log(data2.fifthFloor.wordsInLowercase);
console.log(data2.sixthFloor.secretCode);

console.log(String.fromCharCode(111));