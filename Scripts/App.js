let montos = []
let saldos = {}

let detalle = document.getElementById("detalle");
let totalGrupo = document.getElementById("totalGrupo");
let totalPersona = document.getElementById("totalPersona");
let deudores = document.getElementById("deudores");
let acreedores = document.getElementById("acreedores");

const gastos = [];  

function agregarGasto(){
    
  // Cada vez que se agrega un gasto, se borra el detalle y los saldos anteriores
  detalle.innerHTML = ""
  deudores.innerHTML = ""
  acreedores.innerHTML = ""

  // Se agregan los datos y se muestran en la sección Detalle
  let nInput = document.getElementById("inputNombre").value;
  let nombre = nInput.charAt(0).toUpperCase() + nInput.slice(1);
  let monto = parseFloat(document.getElementById("inputMonto").value);

  if (nombre && monto) {
      if (gastos.some((gasto) => gasto.nombre == nombre)) {
        gastos.forEach((gasto) => {
          if (gasto.nombre == nombre) {
            gasto.monto += monto;
          }
        })
      } else {
        gastos.push({ nombre, monto });


      }
  }

  montos.push(monto);
  
  // Armamos un nuevo detalle de gastos por persona
  for(i of gastos){
      let n = i.nombre
      let m = i.monto
      let elemento1 = document.createElement("li")
      elemento1.innerHTML = `${n} gastó $${m}`
      elemento1.classList.add('list-group-item')
      detalle.appendChild(elemento1)
  }
  
  
  // Sumamos todo y re-calculamos el total por persona
  let total = (montos.reduce((a, b) => a + b, 0))
  let totalPna = Math.round(total/gastos.length*100)/100

  totalGrupo.innerHTML = `Total: $${total}`
  totalPersona.innerHTML = `Total por persona: $${totalPna}`
  
  // Calculamos el saldo de cada persona 
  for(i of gastos){
      let n = i.nombre
      let m = i.monto
      let saldo = m-totalPna
      saldos[n] = Math.round(saldo*100)/100
  }

  // Clasificamos a cada uno como 'deudor' o 'acreedor'
  for(n of Object.keys(saldos)) {
      if(saldos[n]<0){
          let elemento2 = document.createElement("li")
          elemento2.innerHTML = `${n} debe $${saldos[n]}`
          elemento2.classList.add('list-group-item')
          deudores.appendChild(elemento2)
      }else if(saldos[n]>0){
          let elemento3 = document.createElement("li")
          elemento3.innerHTML = `${n} tiene saldo a favor por $${saldos[n]}`
          elemento3.classList.add('list-group-item')
          acreedores.appendChild(elemento3)
      }

  }

}
