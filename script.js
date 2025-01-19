// Santoral por día (simplificado con algunos datos)
const santoral = {
  "01-01": "María, Madre de Dios",
  "02-01": "Basilio, Gregorio",
  "03-01": "Genoveva",
  // Agrega más días según corresponda
};

// Obtener la fecha actual
const hoy = new Date();
const dia = hoy.getDate().toString().padStart(2, "0");
const mes = (hoy.getMonth() + 1).toString().padStart(2, "0");
const claveFecha = `${dia}-${mes}`;

// Mostrar el santoral del día
const santoralHoy = santoral[claveFecha] || "No hay santos registrados para hoy.";
document.getElementById("santoralHoy").textContent = santoralHoy;
