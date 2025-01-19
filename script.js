// Santoral completo (añade más días según sea necesario)
const santoral = {
  "01-01": "María, Madre de Dios",
  "02-01": "Basilio, Gregorio",
  "03-01": "Genoveva",
  "04-01": "Yolando, Rigoberto",
  "05-01": "Emilia",
  "06-01": "Wilma, Melanio",
  "07-01": "Raimundo",
  "08-01": "Luciano, Eladio",
  "09-01": "Lucrecia",
  "10-01": "Gonzalo",
  "11-01": "Alejandro",
  "12-01": "Julián",
  "13-01": "Hilario",
  "14-01": "Félix",
  "15-01": "Raquel, Mauro",
  "16-01": "Marcelo",
  "17-01": "Antonio, Guido",
  "18-01": "Prisca - Priscila",
  "19-01": "Mario",
  "20-01": "Sebastián, Fabián",
  "21-01": "Inés",
  "22-01": "Laura Vicuña, Vicente",
  "23-01": "Virginia",
  "24-01": "Francisco de Sales",
  "25-01": "Elvira",
  "26-01": "Timoteo, Tito, Paula - Paola",
  "27-01": "Ángela Merici",
  "28-01": "Tomás de Aquino",
  "29-01": "Valerio",
  "30-01": "Martina",
  "31-01": "Juan Bosco, Marcela",
  // Continúa añadiendo más días para otros meses
};

// Función para obtener el santoral del día actual
function obtenerSantoralDelDia() {
  // Obtener la fecha actual
  const hoy = new Date();
  const dia = hoy.getDate().toString().padStart(2, "0");
  const mes = (hoy.getMonth() + 1).toString().padStart(2, "0");
  const claveFecha = `${dia}-${mes}`;

  // Buscar el santoral correspondiente
  const santoralHoy = santoral[claveFecha] || "No hay santos registrados para hoy.";
  return santoralHoy;
}

// Mostrar el santoral del día en el elemento correspondiente
function mostrarSantoral() {
  const elementoSantoral = document.getElementById("santoralHoy");
  if (elementoSantoral) {
    elementoSantoral.textContent = obtenerSantoralDelDia();
  }
}

// Ejecutar la función al cargar la página
document.addEventListener("DOMContentLoaded", mostrarSantoral);

