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
  "15-02": "Faustino, Jovita",
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

  "01-04": "Hugo",
  "02-04": "Sandra, Francisco de Paula",
  "03-04": "Ricardo",
  "04-04": "Isidoro",
  "05-04": "Vicente Ferrer",
  "06-04": "Edith",
  "07-04": "Juan Bautista de La Salle",
  "08-04": "Constanza",
  "09-04": "Demetrio",
  "10-04": "Ezequiel",
  "11-04": "Estanislao",
  "12-04": "Arnoldo, Julio",
  "13-04": "Martín, Aída",
  "14-04": "Máximo",
  "15-04": "Crescente",
  "16-04": "Flavio",
  "17-04": "Leopoldo, Aniceto",
  "18-04": "Wladimir",
  "19-04": "Ema",
  "20-04": "Edgardo",
  "21-04": "Anselmo",
  "22-04": "Karina",
  "23-04": "Jorge",
  "24-04": "Fidel",
  "25-04": "Marcos",
  "26-04": "Cleto, Marcelino",
  "27-04": "Zita, Toribio de Mogrovejo",
  "28-04": "Valeria",
  "29-04": "Catalina de Siena",
  "30-04": "Amador, Pío V",

  "01-05": "José Obrero",
  "02-05": "Atanasio, Boris",
  "03-05": "Santa Cruz",
  "04-05": "Felipe y Santiago",
  "05-05": "Judit",
  "06-05": "Eleodoro",
  "07-05": "Domitila",
  "08-05": "Segundo",
  "09-05": "Isaías",
  "10-05": "Antonino, Solange",
  "11-05": "Estela",
  "12-05": "Pancracio, Nereo, Aquiles",
  "13-05": "Nuestra Señora de Fátima",
  "14-05": "Matías",
  "15-05": "Isidro, Denise",
  "16-05": "Honorato",
  "17-05": "Pascual Bailón",
  "18-05": "Érica, Corina",
  "19-05": "Yvone",
  "20-05": "Bernardino de Siena",
  "21-05": "Constantino",
  "22-05": "Rita",
  "23-05": "Desiderio",
  "24-05": "María Auxiliadora, Susana",
  "25-05": "Beda, Gregorio, María Magdalena de Pazzi",
  "26-05": "Mariana",
  "27-05": "Emilio, Agustín de Canterbury",
  "28-05": "Germán",
  "29-05": "Maximiano, Hilda",
  "30-05": "Fernando, Juana de Arco",
  "31-05": "Visitación",

  "01-06": "Justino, Juvenal",
  "02-06": "Marcelino, Erasmo",
  "03-06": "Maximiliano, Carlos Lwanga",
  "04-06": "Frida",
  "05-06": "Bonifacio, Salvador",
  "06-06": "Norberto",
  "07-06": "Claudio",
  "08-06": "Armando",
  "09-06": "Efrén",
  "10-06": "Paulina",
  "11-06": "Bernabé, Trinidad",
  "12-06": "Onofre",
  "13-06": "Antonio",
  "14-06": "Eliseo",
  "15-06": "Leonidas, Manuela, Micaela",
  "16-06": "Aurelio",
  "17-06": "Ismael",
  "18-06": "Salomón",
  "19-06": "Romualdo",
  "20-06": "Florentino",
  "21-06": "Raúl, Rodolfo, Luis Gonzaga",
  "22-06": "Tomás Moro",
  "23-06": "Marcial",
  "24-06": "Juan Bautista",
  "25-06": "Guillermo",
  "26-06": "Pelayo",
  "27-06": "Cirilo",
  "28-06": "Ireneo",
  "29-06": "Pedro y Pablo",
  "30-06": "Adolfo"
};

// Fecha bonita
function obtenerFechaFormateada() {
  const hoy = new Date();
  const dias = ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"];
  const meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
  return `${dias[hoy.getDay()]} ${hoy.getDate()} de ${meses[hoy.getMonth()]}`;
}

// Obtener santoral del día
function obtenerSantoralDelDia() {
  const hoy = new Date();
  const dia = String(hoy.getDate()).padStart(2, "0");
  const mes = String(hoy.getMonth() + 1).padStart(2, "0");
  return santoral[`${dia}-${mes}`] || "No hay santos registrados para hoy.";
}

// Mostrar santoral en pantalla
function mostrarSantoral() {
  const elemento = document.getElementById("santoralHoy");
  if (!elemento) return;

  elemento.innerHTML = `
    <strong>Santoral del día | ${obtenerFechaFormateada()}</strong><br>
    ${obtenerSantoralDelDia()}
  `;
}

// Buscar santo
function buscarSanto() {
  const nombre = document.getElementById("nombreSanto").value.toLowerCase();
  const resultados = Object.entries(santoral).filter(([_, santos]) =>
    santos.toLowerCase().includes(nombre)
  );

  const lista = document.getElementById("resultadosBusqueda");
  lista.innerHTML = resultados.length
    ? resultados.map(([f, s]) => `<li>${f}: ${s}</li>`).join("")
    : "<li>No se encontraron resultados.</li>";
}

// Buscar por fecha
function mostrarSantoralPorFecha() {
  const fecha = document.getElementById("fechaSelector").value;
  if (!fecha) return;

  const [_, mes, dia] = fecha.split("-");
  const clave = `${dia}-${mes}`;
  const resultado = santoral[clave] || "No hay santos registrados";

  document.getElementById("santoralFechaSeleccionada").textContent = resultado;
}

// Modo oscuro
function toggleModoOscuro() {
  document.body.classList.toggle("modo-oscuro");
}

// Ejecutar al cargar
document.addEventListener("DOMContentLoaded", mostrarSantoral);
