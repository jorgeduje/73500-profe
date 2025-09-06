// console.log(new Date().getHours());
// console.log(new Date().getMinutes());
// console.log(new Date().getMonth() + 1);

// day js
// moment js

// const miInput = ----> elemento html
// Yup --> Zod

// peticiones
// axios

// const axios = require("axios")
// import axios from "axios"

const axiosCustom = axios.create({
  baseURL: "https://fakestoreapi.com",
  //   timeout: 10000,
  headers: { Authorization: "barer-dashdahd123213dsahdsahdsada" },
});

const obtenerProductos = async () => {
  let nuevoProducto = {};
  // "https://fakestoreapi.com/products"

  //   const res = await fetch("https://fakestoreapi.com/products", {
  //     method: "POST",
  //     body: JSON.stringify(nuevoProducto),
  //     headers: {
  //       Authorization: "barer-dashdahd123213dsahdsahdsada",
  //     },
  //   });
  // const response = await res.json()
  //   console.log(response);

  const res = await axiosCustom.get("/products");
  console.log(res.data);
};

obtenerProductos();

const renderToast = (text, callback) => {
  Toastify({
    text: text,
    close: true,
    duration: 5000,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: "steelblue",
    },
    onClick: callback,
  }).showToast();
};

const crearProducto = async () => {
  try {
    let nuevoProducto = {};
    const res = await axiosCustom.post("/products", nuevoProducto);
    console.log(res);
    renderToast("hola", () => {
      console.log("primer callback");
    });
    renderToast("chau", () => {
      console.log("segundo callback");
    });
  } catch (error) {
    console.log(error);
  }
};

const btnCrear = document.getElementById("crear");
btnCrear.addEventListener("click", crearProducto);

const limpiarCarrito = () => {
  Swal.fire({
    title: "Seguro quieres limpiar carrito ?",
    showDenyButton: true,
    confirmButtonText: "Si, limpiar",
    denyButtonText: `No, me arrepentir`,
    // timer: 3000,
  }).then((res) => {
    // isConfirmed: true, isDenied: false
    if (res.isConfirmed) {
      Swal.fire({
        title: "Carrito limpiado",
        icon: "success",
      });
    } else if (res.isDenied) {
      Swal.fire({
        title: "Carrito queda como estaba",
        icon: "info",
      });
    }
  });
};

const btnLimpiar = document.getElementById("limpiar");
btnLimpiar.addEventListener("click", limpiarCarrito);

// Ux UI

// tostify
// sweetAlert2
