// acceso a los elementos
// nodos ---> html

let titulo = document.getElementById("title");
let contenedorDeProductos = document.querySelector(".productos");
let categorias = document.querySelectorAll(".categoria");

// manipulacion de lo elementos
// prompt("decime el color");
// titulo.style.color = "red";
titulo.textContent = "Hola este es un nuevo texto";
contenedorDeProductos.innerHTML = `
<div class="producto">
    <h2>Un producto</h2>
</div>
<div class="producto">
    <h2>Un producto</h2>
</div>
<div class="producto">
    <h2>Un producto</h2>
</div>

`;

// titulo.classList.add("dark");

// titulo.classList.remove("dark");

let btnAgregarClase = document.getElementById("btn-agregar-clase");

btnAgregarClase.addEventListener("click", () => {
  titulo.classList.add("dark");
  contenedorDeProductos.style.border = "2px solid red";
});

let btnQuitarClase = document.getElementById("btn-quitar-clase");

btnQuitarClase.addEventListener("click", () => {
  titulo.classList.remove("dark");
});
