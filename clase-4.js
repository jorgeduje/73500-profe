// tipos de datos primitivos

// strings -numbers - booleanos - null - undefined - NaN

// tipodes de datos
// estructuras de datos

// Objetos y Arrays

// objetos literal -- > diccionarios

// estan compuesto por propiedades ( describir a mi objeto ) y
// metodos ( son cosas que puede ejecutar el objeto )

let producto = {
  // por un par de clave : valor
  nombre: "telefono",
  precio: 201,
  esImporatdo: false,
  stock: 13,
  direccion: { calle: "italia", numero: "225" },
};

// DOT NOTATION
console.log(producto.esImporatdo);
console.log(producto.stock);

// manipular un objeto

producto.stock = 5;
producto.direccion.numero = "144";

console.log(producto);

producto.descuento = 50;

const descontarStock = () => {
  //   producto.stock -= 1;
  producto.stock = producto.stock - 1;
};
// metodos siempre siempre siempre con la palabrita function

const funcionSaludar = function () {
  console.log(`hola soy ${this.nombre}`);
};

let usuario = {
  nombre: "pepe",
  email: "pepe@gmail.com",
  password: "1234356",
  edad: 32,
  saludar: funcionSaludar,
};

let usuarioDos = {
  nombre: "juan",
  email: "pepe@gmail.com",
  password: "1234356",
  edad: 32,
  saludar: funcionSaludar,
};
let usuarioTres = {
  nombre: "maria",
  email: "pepe@gmail.com",
  password: "1234356",
  edad: 32,
  saludar: funcionSaludar,
};

usuario.saludar();
usuarioDos.saludar();
usuarioTres.saludar();

// ARRAY ---> coleccion
// TYPESCRIPT

let numerosDeLaSuerte = [15, 16, 66];

console.log(numerosDeLaSuerte);
console.log(numerosDeLaSuerte[0].nombre);

numerosDeLaSuerte.push(80, 90, 32);
console.log(numerosDeLaSuerte);

// productos.push({ nombre: "pepe" });
// console.log(productos);
console.log(numerosDeLaSuerte.includes(32));

console.log(numerosDeLaSuerte.indexOf(88));

const productos = [
  {
    nombre: "Laptop Gaming MSI",
    precio: 1299.99,
    categoria: "Electrónicos",
    stock: 15,
  },
  {
    nombre: "Cafetera Expresso Deluxe",
    precio: 89.5,
    categoria: "Electrodomésticos",
    stock: 32,
  },
  {
    nombre: "Zapatillas Running Nike",
    precio: 129.0,
    categoria: "Deportes",
    stock: 28,
  },
  {
    nombre: "Smartphone Samsung Galaxy",
    precio: 699.99,
    categoria: "Electrónicos",
    stock: 12,
  },
  {
    nombre: "Mesa de Comedor Roble",
    precio: 449.0,
    categoria: "Muebles",
    stock: 8,
  },
  {
    nombre: "Auriculares Bluetooth Sony",
    precio: 199.99,
    categoria: "Electrónicos",
    stock: 45,
  },
  {
    nombre: "Perfume Eau de Toilette",
    precio: 75.0,
    categoria: "Belleza",
    stock: 67,
  },
  {
    nombre: "Bicicleta de Montaña Trek",
    precio: 899.0,
    categoria: "Deportes",
    stock: 6,
  },
];

const sumarStock = () => {
  for (let i = 0; i < productos.length; i++) {
    productos[i].stock += 10;
  }
};

sumarStock();

console.log(productos);

// let palabras = ["pepe", "juan", "carmen", "maria"];

// for (let i = 0; i < palabras.length; i++) {
//   console.log(palabras[i]);
//   console.log("----------------");
// }

const construirIds = () => {
  for (let i = 0; i < productos.length; i++) {
    productos[i].id = i + 1;
  }
};

construirIds();

console.log(productos);
