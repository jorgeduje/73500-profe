let productosDelCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

const renderizarProductos = () => {
  let contenedor = document.querySelector(".productos-carrito");
  let htmlCompletoDeProductos = "";

  productosDelCarrito.forEach((producto) => {
    htmlCompletoDeProductos += `
    <div class="producto">
      <h3>${producto.nombre}</h3>
      <h5>${producto.precio}</h5>
      <button onclick="eliminarPorId(${producto.id})">Eliminar al carrito</button>
    </div>
    `;
  });
  contenedor.innerHTML = htmlCompletoDeProductos;
};

renderizarProductos();

let botonLimpiar = document.getElementById("limpiar");

botonLimpiar.addEventListener("click", () => {
  localStorage.removeItem("carrito");
  productosDelCarrito = [];
  renderizarProductos();
});

const eliminarPorId = (id) => {
  let arraySinElDelId = productosDelCarrito.filter(
    (producto) => producto.id !== id
  );
  productosDelCarrito = arraySinElDelId;
  localStorage.setItem("carrito", JSON.stringify(productosDelCarrito));
  renderizarProductos();
};

const obtenerNumero = document.getElementById("obtener");
obtenerNumero.addEventListener("click", () => {
  let inputNumero = document.getElementById("numero").value;
  console.log(Number(inputNumero));
});
