// Santoral completo por días y meses
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
  "01-02": "Severiano",
  "02-02": "Presentación del Señor",
  "03-02": "Blas, Oscar",
  "04-02": "Gilberto",
  "05-02": "Agueda",
  "06-02": "Doris, Pablo Miki",
  "07-02": "Gastón",
  "08-02": "Jerónimo Emiliano, Jacqueline",
  "09-02": "Rebeca",
  "10-02": "Escolástica",
  "11-02": "Nuestra Señora de Lourdes",
  "12-02": "Panfilio, Pamela",
  "13-02": "Beatriz",
  "14-02": "Cirilo, Metodio, Valentino",
  "15-02": "Fausto-ino, Jovita",
  "16-02": "Samuel",
  "17-02": "Alexis",
  "18-02": "Bernardita",
  "19-02": "Álvaro",
  "20-02": "Eleuterio, Claudio",
  "21-02": "Pedro Damián, Severino",
  "22-02": "Eleonora, Nora",
  "23-02": "Florencio",
  "24-02": "Rubén, Sergio",
  "25-02": "Néstor",
  "26-02": "Augusto",
  "27-02": "Leandro, Gabriel Dol",
  "28-02": "Román",
  "01-03": "Rosendo",
  "02-03": "Lucio",
  "03-03": "Celedonio",
  "04-03": "Ariel",
  "05-03": "Olivia",
  "06-03": "Elcira",
  "07-03": "Perpétua, Felicidad",
  "08-03": "Juan de Dios",
  "09-03": "Francisca Romana",
  "10-03": "Macario",
  "11-03": "Eulogio",
  "12-03": "Norma",
  "13-03": "Rodrigo",
  "14-03": "Matilde",
  "15-03": "Luisa de Marillac",
  "16-03": "Heriberto",
  "17-03": "Patricio",
  "18-03": "Cirilo",
  "19-03": "José",
  "20-03": "Alejandra",
  "21-03": "Eugenia",
  "22-03": "Lea",
  "23-03": "Dimas",
  "24-03": "Elba, Catalina de Suecia",
  "25-03": "Anunciación",
  "26-03": "Braulio",
  "27-03": "Ruperto",
  "28-03": "Octavio",
  "29-03": "Gladys",
  "30-03": "Artemio",
  "31-03": "Benjamín, Balbina",
  // Continúa añadiendo los días de Abril a Diciembre
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
