document.addEventListener("DOMContentLoaded", function () {
  const botonEnviar = document.getElementById("enviar");
  if (botonEnviar) {
    botonEnviar.addEventListener("click", agregarGasto);
  }
});

const gastos = [];

const agregarGasto = (e) => {
  e.preventDefault();
  const nombre = document.getElementById("inputNombre").value;
  const monto = parseFloat(document.getElementById("inputMonto").value);

  if (nombre && monto) {
    if (gastos.some((gasto) => gasto.nombre == nombre)) {
      gastos.forEach((gasto) => {
        if (gasto.nombre == nombre) {
          gasto.monto += monto;
        }
      });
    } else {
      gastos.push({ nombre, monto });
    }

    console.log(gastos);
  }
};
