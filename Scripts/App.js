document.addEventListener("DOMContentLoaded", function () {
  const botonEnviar = document.getElementById("enviar");
  if (botonEnviar) {
    botonEnviar.addEventListener("click", agregarGasto);
  }
});

const agregarGasto = (e) => {
  e.preventDefault();
  const nombre = document.getElementById("inputNombre").value;
  const gasto = document.getElementById("inputGasto").value;

  console.log(nombre);
  console.log(gasto);
};
