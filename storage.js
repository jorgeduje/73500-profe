let modoClaro = JSON.parse(localStorage.getItem("modoClaro") || "true");
// con html y js ---> podemos cambiar el valor

// con js y css ---> podemos hacer estilos dinamicos en base a esa variable

let interruptor = document.getElementById("btn-dark");
interruptor.addEventListener("click", () => {
  modoClaro = !modoClaro;
  localStorage.setItem("modoClaro", JSON.stringify(modoClaro));
  console.log(modoClaro);
});

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

// storage

// guardar info
// localStorage.setItem("carrito", JSON.stringify(productos));

// leer info
// let productosDelCarrito = JSON.parse(localStorage.getItem("carrito"));
// console.log(productosDelCarrito);

// actualizar info --> volviendo a crear
// localStorage.setItem("nombreDelUsuario", "juan");

// eliminar una info en particular
// localStorage.removeItem("carrito");

// limpiar toda la info del storage
// localStorage.clear();

// let x = JSON.parse(localStorage.getItem("pepito") || "true");
// console.log(x);
