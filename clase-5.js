// una fabrica de algo, que cada vez que la uso, crea algo nuevo

// CLASS ---> constructores

class Usuario {
  // la construccion de las propiedades
  constructor(nombre, email, password, edad) {
    this.nombre = nombre;
    this.email = email;
    this.password = password;
    this.edad = edad;
  }

  // en la creacion de los metodos
  saludar(uno, dos, tres) {
    console.log(`hola soy ${this.nombre} como estas?`);
  }
}

// instanciar una class

let usuario1 = new Usuario("pepe", "pepe@gmail", "222", 32);
let usuario2 = new Usuario("juan", "juan@gmail", "333", 44);
let usuario3 = new Usuario("maria", "maria@gmail", "444", 22);

let usuarios = [usuario1, usuario2, usuario3];

usuario2.saludar();

// JSON ---> formato ----> "un tipo de dato mas"

// boolean, string, number, null , NaN, object, array, undefined

// formulario html, para que el administrador registre nuevos productos

// una foto
// el nombre
// precio, etc etc etc

let producto = {
  image: "https://laimagen.com",
  nombre: "zapatilla",
  precio: 100,
};
// enviar
const enviarProductoAlBack = (producto) => {
  console.log(producto);
  // transformarlo en un string
  let productoListoParaElBackend = JSON.stringify(producto);
  console.log(productoListoParaElBackend);
};
enviarProductoAlBack(producto);

// const botonEnviar = document.getElementById("btn");
// botonEnviar.addEventListener("click", () => {
//   enviarProductoAlBack(producto);
// });

const productos = [
  {
    id: 1,
    nombre: "Laptop Dell XPS 13",
    precio: 1299.99,
    categoria: "Electrónicos",
    stock: 14,
    descripcion: "Laptop ultraportátil con procesador Intel i7",
  },
  {
    id: 2,
    nombre: "Camiseta Nike Dri-FIT",
    precio: 29.99,
    categoria: "Ropa",
    stock: 50,
    descripcion: "Camiseta deportiva de secado rápido",
  },
  {
    id: 3,
    nombre: "Cafetera Nespresso",
    precio: 189.0,
    categoria: "Hogar",
    stock: 8,
    descripcion: "Cafetera de cápsulas automática",
  },
  {
    id: 4,
    nombre: "Smartphone Samsung Galaxy S24",
    precio: 899.99,
    categoria: "Electrónicos",
    stock: 25,
    descripcion: "Teléfono inteligente con cámara de 50MP",
  },
  {
    id: 5,
    nombre: "Zapatillas Adidas Running",
    precio: 89.99,
    categoria: "Calzado",
    stock: 30,
    descripcion: "Zapatillas para correr con tecnología Boost",
  },
  {
    id: 6,
    nombre: "Auriculares Sony WH-1000XM5",
    precio: 349.99,
    categoria: "Electrónicos",
    stock: 12,
    descripcion: "Auriculares inalámbricos con cancelación de ruido",
  },
  {
    id: 7,
    nombre: "Libro 'Cien años de soledad'",
    precio: 15.99,
    categoria: "Libros",
    stock: 100,
    descripcion: "Novela clásica de Gabriel García Márquez",
  },
  {
    id: 8,
    nombre: "Sartén antiadherente",
    precio: 45.5,
    categoria: "Hogar",
    stock: 20,
    descripcion: "Sartén de 28cm con recubrimiento cerámico",
  },
];

let productosDelBack = JSON.stringify(productos);

const parsearJson = (informacionParaParsear) => {
  JSON.parse("[]"); // []
  JSON.parse("true"); // true
  JSON.parse("{}"); // {}

  let parseados = JSON.parse(informacionParaParsear); // antes --> "[{}{}]" --> ahora [{}{}]
  console.log(parseados);
};

parsearJson(productosDelBack);
