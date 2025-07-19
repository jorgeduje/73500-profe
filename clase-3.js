// undefined;
// NaN; --> not a number
// null;
// []
// {}
let x;

console.log(x);

x = "pepe";

console.log(x);

let num = 3 / 3;

let esUnNaN = isNaN(num);
console.log(esUnNaN);

// truthy --> true - "hola" - [] - 12 - {}
// fasly ---> false - null - undefined - NaN - "" - 0

let userName = undefined; // --> "pepe"

if (userName) {
  console.log("ingreso");
} else {
  console.log("no ingreso");
}

// FUNCIONES
// 1 --> reutilizar codigo
// 2 --> dejar codigo listo para ser ejecutado cunado yo quiera
// 3 --> hacer cosas dinamicas
// let elNombre = prompt("ingresa tu nombre");
// funcion declarada
function saludar(nombre) {
  console.log(`bienvenid@ ${nombre}`);
}

saludar();

// parametros
function sumar(n1, n2) {
  let resultado = n1 + n2;
  console.log(resultado);
}

// argumento
sumar(5, 7);
sumar(12, 7);
sumar(2, 2);

// function multiplicar(parametro) {
//   if (parametro && typeof parametro === "") {
//     console.log(parametro * 5);
//   } else {
//     console.log("no te olvides el numero");
//   }
// }

// let dameUnNumero = Number(prompt("dame un numero y te lo multiplico por 5"));
function multiplicar(parametro) {
  let resultadoFinal;

  if (parametro || parametro === 0) {
    if (typeof parametro === "number") {
      resultadoFinal = parametro * 5;
    } else {
      resultadoFinal = "por favor ingresa un dato numerico";
    }
  } else {
    resultadoFinal = "no te olvides el numero";
  }

  return resultadoFinal;
}

// multiplicar(dameUnNumero);
multiplicar(7);
multiplicar("7");
multiplicar();

// funcion restar
// proceso interno que puede tener una entra y una salida
function restar2(n1, n2) {
  let resultado = n1 - n2;

  // explicito o implicito // return undefined
  return resultado;
}

let res = restar2(5, 3); // La ejecucion de una funcion, se transforma en lo que la funcion retorna
console.log(res);
// let resultadoHtml = document.getElementById("resultado");
// resultadoHtml.textContent = res;

function dividir(a = 1, b = 5) {
  return a / b;
}

let resultadoDivision = dividir(undefined, 1);
console.log(resultadoDivision);

algo("pepe", 25);
function algo(y, x) {
  console.log(`el nombre es ${y} y la edad es ${x}`);
}

// SCOPE --> las variables se pueden utilizar en el ambiente que fueron creadas
// o en ambientes internos a donde fueron creadas
let nombreUsuario = " juana";
if (true) {
  if (true) {
    console.log(nombreUsuario);
  }
}

// funciones expresadas  o ANONIMAS
const saludarDos = function (x, z) {
  console.log(x);
  return z;
};

saludarDos(12, 15);

// FUNCION --> anonima de tipo flecha

// function sumarDeclarada(){}
// const sumaExpresadaComun = function(){}
const sumaFlecha = (a, b) => {
  let resultado = a + b;
  return resultado;
};

let resultadoFlecha = sumaFlecha(5, 3);
console.log(resultadoFlecha);
