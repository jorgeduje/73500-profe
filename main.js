// prompt --> para simular un input

// consola --> para simular lo que devuelvo en el html

// prompt("ingresa un numero");
// console.log("hola");
// alert("tu numero es tanto");

// Variables --> son cajas para guardar algo

// let y const
// el iniciador , el nombre , el =  y el valor

// sintaxis
let emaildelusuario = "jorgedu@gmail.com";

let emailDelUsuario = "jorgedu@gmail.com";

let nombre = "pepe";

let password = 123456;

let apellido = "perez";

let edad = 32;

console.log(edad);

console.log(edad);

edad = 33;

apellido = "torres";
console.log(apellido);

// tipos de datos

// strings --> cadena de texto
let palabra = "casa";
let frase = "pepe esta 'cansado' ";

console.log(palabra);
console.log(frase);

// number ---> numeros

let numero = 12;
let numerito = 12.5;

// string
let telefono = "44444444";
let cedula = "213213123";

// booleanos --> que responden a una pregunta de si o no
// true - false
// una variable que guarde si esta logueado el usuario o no

let usuarioLogueado = true;
// let usuarioLogueado = false

// let nombreprompt = prompt("ingresa tu nombre");
// let nombre_prompt = prompt("ingresa tu nombre");

// let nombrePrompt = prompt("ingresa tu nombre");

// // Operadores +

// // concatenar strings

// let saludo = "hola " + nombrePrompt + " como estas?";

// // template literals
// // backsticks --> `` --> alt + 96
// let saludoPro = `hola ${nombrePrompt} como estas? ${edad} hola ${2 + 2}`;

// console.log(saludoPro);
// `das dsad sad sdsa ${} dsad asdsad asd ${} dsad asdsada`

let n1 = 9;
let n2 = 2;

console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);

console.log("--------");

console.log(n1 / n2); // devuelve el resultado de la division
console.log(n1 % n2); // devuelve el resto

// booleanos

let x = 12;
let z = "12";
// operadores de comparacion --> SIEMPRE SIEMPRE SIEMPRE DEVUELVE UN BOOLEANO

console.log(x > z);
console.log(x < z);
console.log(x >= z);
console.log(x <= z);

console.log("-----------");
// comparacion simple
console.log(x != z); // --> FALSE
// console.log(x != z);

// comparacion estricta
// console.log(x === z);

console.log(x !== z); // ---> TRUE
