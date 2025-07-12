// CONDICIONALES --> estructuras de control
// IF / ELSE  --- TERNARIO --- SWITCH - CASE

let edad = 20;

let inicioSession = false;

console.log("empieza");

if (2 > 4) {
  console.log("entro en el if");
} else {
  console.log("entro en el else");
}

console.log("termina");

// SISTEMA POR ROLES

// ROL ---> tiene ciertos permisos
// peticion al back
let rol = "vendedor";

// acceso a todo al admin
// acceso a una parte al vendedor
// y muy poco acceso al comprador

if (rol === "admin") {
  console.log(" acceso a todo");
} else if (rol === "vendedor") {
  console.log("acceso a una parte");
} else if (rol === "comprador") {
  console.log("acceso a casi nada");
}

// sistema que deje pasar a los usuarios si son mayor de edad y compraron entrada
// si son menor y compraron entrada ,tienen que venir acompañados
// si no compraron entrada, no entran
// si son menor y no vienen acompañados no entran.
let edadUsuario = 16;
let esMayor = edadUsuario >= 18;
let tieneEntrada = true;
let vieneAcompañado = true;

if (tieneEntrada && esMayor) {
  console.log("podes pasar por que tenes entrada y sos mayor");
} else if (tieneEntrada && vieneAcompañado) {
  console.log(
    "podes pasar porque tenes entrada , sos menor , pero venis con alguien"
  );
} else if (tieneEntrada === false) {
  console.log("no podes pasar por que no tenes entrada");
} else if (esMayor === false && vieneAcompañado === false) {
  console.log("no podes necesitas alguien que te acompañe ");
}

//

// Si llueve salgo con paraguas
// si no , no hace falta

let clima = "sol";

if (clima === "lluvioso") {
  console.log("si, lleva paraguas");
} else {
  console.log("no hace flata");
}

// condicion ? el bloque verdadero : el bloque falso
clima === "lluvioso" ? console.log("si") : console.log("no");

// sistema que determine el valor del impuesto de un auto
// el impuesto base es de 200
// VW sumar 100
// audi sumar 150
// bmw sumar 200
// mercedes sumar 250
// ford sumar 50
// bla bla bl 50

// impuesto = impuesto + 200
// impuesto += 200

let impuesto = 200;

// let marcaAuto = prompt("decime que auto tenes");
let marcaAuto = "vw";

switch (marcaAuto) {
  case "vw":
    impuesto = impuesto + 100;
    break;
  case "audi":
    impuesto += 150;
    break;
  case "volvo":
    impuesto += 150;
    break;
  case "bmw":
    impuesto += 150;
    break;
  case "mercedes":
    impuesto += 150;
    break;
  case "ford":
    impuesto += 150;
    break;
  default:
    impuesto = "tu auto esta excento de impuesto";
}

console.log(
  `Gracias por usar nuestro sistema , el impuesto total que debes pagar es ${impuesto}`
);

// CLICOS --- Estructuras de repetecion
// ciclos - loop - bucles
// FOR --- WHILE --- DO WHILE

// X --> loop infinito.
console.log("empieza el ciclo");
// inicializacion ; la condicion ; el modificador

// impuesto = impuesto + 1
// impuesto += 250
// impuesto ++

for (let i = 1; i <= 10; i++) {
  console.log("hola");
}

console.log("termina el ciclo");

// pedir por prompt el numero
// y mostrar la tabla de multiplicar de dicho numero

let numero = Number(prompt("ingresa el numero")); // siempre lo que llega del navegador
// llega como string
console.log(typeof numero);
// Number("12") --> 12

for (let i = 1; i < 11; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}

// WHILE
console.log(" ---------------- ");

// let i = 12;
// while (i < 11) {
//   console.log(`${numero} x ${i} = ${numero * i}`);

//   i++;
// }

// let i = 12;
// do {
//   console.log(`${numero} x ${i} = ${numero * i}`);

//   i++;
// } while (i < 11);
