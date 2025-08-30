// const obtenerPosteos = ()=>{

//     // disparar una peticion http por defecto hace un get
//     fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "GET",
//         body: // lugar en donde yo mando info del front al back,
//         headers :{
//             token,
//             tipo dato ,
//         }
//     })

// }
const obtenerPosteos = async () => {
  let contenedor = document.getElementById("container");
  try {
    // disparar una peticion http por defecto hace un get
    const posteos = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posteosListos = await posteos.json();

    let htmlPosteos = "";
    posteosListos.forEach((posteo) => {
      htmlPosteos += `<h2>${posteo.title}</h2>`;
    });

    contenedor.innerHTML = htmlPosteos;
  } catch (error) {
    console.log(error);
    contenedor.innerHTML = "<div><h2>Algo salio mal</h2></div>";
  }
};

obtenerPosteos();
// const obtenerPosteosDos = () => {
//   let contenedor = document.getElementById("container");

//   const posteos = fetch("https://jsonplaceholder.typicode.com/posts");
//   posteos
//     .then((respuesta) => respuesta.json())
//     .then((posteosListos) => {
//       let htmlPosteos = "";
//       posteosListos.forEach((posteo) => {
//         htmlPosteos += `<h2>${posteo.title}</h2>`;
//       });

//       contenedor.innerHTML = htmlPosteos;
//     })
//     .catch((error) => {
//       console.log(error);
//       contenedor.innerHTML = "<div><h2>Algo salio mal</h2></div>";
//     });
// };

// obtenerPosteosDos();

// JSON.parse(variable) // ---> variable.json()
// JSON.stringify()

const crearPosteo = async () => {
  // harcodeado
  try {
    let nuevoPosteo = {
      title: "pepe",
      body: "este es el mejor postp",
      userId: 1,
    };

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/possts",
      {
        method: "POST",
        body: JSON.stringify(nuevoPosteo),
      }
    );
    const responseParseada = await response.json();
    console.log(responseParseada);
    alert("producto creado con exito");
  } catch (error) {
    console.log(error);
    alert("no se pudo crear el producto");
  }
};

let btnCrear = document.getElementById("btn");
btnCrear.addEventListener("click", crearPosteo);

// UX / UI ---> User experience  y user interface

const actualizarPosteo = async () => {
  // harcodeado
  try {
    // let nuevoPosteo = {
    //   title: "juan",
    // };

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/3",
      {
        method: "DELETE",
        // body: JSON.stringify(nuevoPosteo),
      }
    );
    const responseParseada = await response.json();
    console.log(responseParseada);
    // alert("producto creado con exito");
  } catch (error) {
    console.log(error);
    // alert("no se pudo crear el producto");
  }
};

let btnActualizar = document.getElementById("btnUpdate");
btnActualizar.addEventListener("click", actualizarPosteo);
