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
"10-05": "Antonino-a, Solange",
"11-05": "Estela",
"12-05": "Pancracio, Nereo, Aquiles",
"13-05": "Nuestra Señora de Fátima",
"14-05": "Matías",
"15-05": "Isidro, Denise",
"16-05": "Honorato",
"17-05": "Pascual Bailón",
"18-05": "Érica, Corina",
"19-05": "Yvo-ne",
"20-05": "Bernardino de Siena",
"21-05": "Constantino",
"22-05": "Rita",
"23-05": "Desiderio",
"24-05": "María Auxiliadora, Susana",
"25-05": "Beda, Gregorio, Ma. Magdalena de Pazzi",
"26-05": "Mariana",
"27-05": "Emilio, Agustín de Cantorbery",
"28-05": "Germán",
"29-05": "Maximiano, Hilda",
"30-05": "Fernando/Hernán, Juana de Arco, Lorena",
"31-05": "Visitación",
"31-05": "Visitación",
"01-07": "Ester",
"02-07": "Gloria",
"03-07": "Tomás",
"04-07": "Isabel, Eliana, Liliana",
"05-07": "Antonio-María, Berta",
"06-07": "María Goretti",
"07-07": "Fermín",
"08-07": "Eugenio",
"09-07": "Verónica",
"10-07": "Elías",
"11-07": "Benito",
"12-07": "Filomena",
"13-07": "Teresa de los Andes, Enrique, Joel",
"14-07": "Camilo de Lelis",
"15-07": "Buenaventura, Julio/a",
"16-07": "Carmen",
"17-07": "Carolina",
"18-07": "Federico",
"19-07": "Arsenio",
"20-07": "Marina",
"21-07": "Daniel",
"22-07": "María Magdalena",
"23-07": "Brígida",
"24-07": "Cristina",
"25-07": "Santiago",
"26-07": "Joaquín, Ana",
"27-07": "Natalia",
"28-07": "Celso",
"29-07": "Marta",
"30-07": "Abdón y Senén",
"31-07": "Ignacio de Loyola",
"01-08": "Alfonso María de Ligorio",
"02-08": "Eusebio",
"03-08": "Lydia",
"04-08": "Juan María Vianney",
"05-08": "Osvaldo, Nieves",
"06-08": "Transfiguración",
"07-08": "Sixto, Cayetano",
"08-08": "Domingo de Guzmán",
"09-08": "Justo",
"10-08": "Lorenzo",
"11-08": "Clara de Asís",
"12-08": "Laura",
"13-08": "Víctor",
"14-08": "Maximiliano Kolbe, Alfredo",
"15-08": "Asunción de la Virgen María",
"16-08": "Esteban de Hungría, Roque",
"17-08": "Jacinto",
"18-08": "Alberto Hurtado, Elena, Nelly, Leticia",
"19-08": "Mariano",
"20-08": "Bernardo",
"21-08": "Pío X, Graciela",
"22-08": "María Reina",
"23-08": "Donato",
"24-08": "Bartolomé",
"25-08": "Luis (rey), José Calasanz",
"26-08": "Teresa de Jesús Jornet e Ibars, César",
"27-08": "Mónica",
"28-08": "Agustín",
"29-08": "Juan Bautista, Sabina",
"30-08": "Rosa de Lima",
"31-08": "Ramón",
"01-09": "Arturo",
"02-09": "Moisés",
"03-09": "Gregorio Magno",
"04-09": "Irma",
"05-09": "Victorino",
"06-09": "Eva, Evelyne",
"07-09": "Regina",
"08-09": "Natividad de la Virgen",
"09-09": "Sergio y Omar",
"10-09": "Nicolás de Tolentino, Adalberto",
"11-09": "Orlando, Rolando",
"12-09": "María",
"13-09": "Juan Crisóstomo",
"14-09": "Imelda",
"15-09": "Nuestra Señora de Dolores",
"16-09": "Cornelio, Cipriano",
"17-09": "Roberto Belarmino",
"18-09": "José de Cupertino",
"19-09": "Jenaro",
"20-09": "Amelia, Andrés Kim y Pablo Tung",
"21-09": "Mateo",
"22-09": "Mauricio",
"23-09": "Lino y Tecla",
"24-09": "Nuestra Señora de la Merced",
"25-09": "Aurelio",
"26-09": "Cosme y Damián",
"27-09": "Vicente de Paul",
"28-09": "Wenceslao",
"29-09": "Miguel, Gabriel y Rafael",
"30-09": "Jerónimo",
"01-10": "Teresa del Niño Jesús",
"02-10": "Ángeles Custodios",
"03-10": "Gerardo",
"04-10": "Francisco de Asís",
"05-10": "Flor",
"06-10": "Bruno",
"07-10": "Nuestra Señora del Rosario",
"08-10": "Nuestra Señora de Begoña",
"09-10": "Dionisio, Juan Leonardi",
"10-10": "Francisco de Borja",
"11-10": "Soledad",
"12-10": "Nuestra Señora del Pilar",
"13-10": "Eduardo",
"14-10": "Calixto",
"15-10": "Teresa de Ávila",
"16-10": "Eduvigis, Margarita María Alacoque",
"17-10": "Ignacio de Antioquía",
"18-10": "Lucas",
"19-10": "Pablo de la Cruz, Renato",
"20-10": "Irene",
"21-10": "Úrsula",
"22-10": "Sara",
"23-10": "Juan Capistrano, Remigio",
"24-10": "Antonio María Claret",
"25-10": "Olga",
"26-10": "Darío",
"27-10": "Gustavo",
"28-10": "Simón, Judas",
"29-10": "Narciso",
"30-10": "Alonso",
"31-10": "Quintín",
"01-11": "Todos los Santos",
"02-11": "Todos los Fieles Difuntos",
"03-11": "Martín de Porres",
"04-11": "Carlos Borromeo",
"05-11": "Silvia",
"06-11": "Leonardo",
"07-11": "Ernesto-ina",
"08-11": "Ninfa, Godofredo",
"09-11": "Teodoro",
"10-11": "León Magno",
"11-11": "Martín de Tours",
"12-11": "Cristián",
"13-11": "Diego",
"14-11": "Humberto",
"15-11": "Alberto Magno",
"16-11": "Margarita, Gertrudis",
"17-11": "Isabel de Hungría",
"18-11": "Elsa",
"19-11": "Andrés Avelino",
"20-11": "Edmundo",
"21-11": "Presentación de la Virgen",
"22-11": "Cecilia",
"23-11": "Clemente, Columbano",
"24-11": "Flora, Andrés Dung-Lac",
"25-11": "Catalina Labouré",
"26-11": "Delfina",
"27-11": "Virgilio",
"28-11": "Blanca",
"29-11": "Saturnino",
"30-11": "Andrés",
"01-12": "Florencia",
"02-12": "Viviana",
"03-12": "Francisco Javier",
"04-12": "Juan Damaceno, Bárbara",
"05-12": "Ada",
"06-12": "Nicolás",
"07-12": "Ambrosio",
"08-12": "Inmaculada Concepción",
"09-12": "Jessica",
"10-12": "Nuestra Señora de Loreto, Eulalia",
"11-12": "Dámaso",
"12-12": "Nuestra Señora de Guadalupe",
"13-12": "Lucía",
"14-12": "Juan de la Cruz",
"15-12": "Reinaldo",
"16-12": "Alicia",
"17-12": "Lázaro",
"18-12": "Sonia",
"19-12": "Urbano",
"20-12": "Abraham, Isaac, Jacob",
"21-12": "Pedro Canisio",
"22-12": "Fabiola",
"23-12": "Victoria",
"24-12": "Adela",
"25-12": "Natividad del Señor (Noel, Noelia)",
"26-12": "Esteban",
"27-12": "Juan",
"28-12": "Santos Inocentes",
"29-12": "Tomás Becket, David",
"30-12": "Rogelio",
"31-12": "Silvestre",
};

// Mostrar el santoral del día actual
function obtenerSantoralDelDia() {
  const hoy = new Date();
  const dia = hoy.getDate().toString().padStart(2, "0");
  const mes = (hoy.getMonth() + 1).toString().padStart(2, "0");
  const claveFecha = `${dia}-${mes}`;
  return santoral[claveFecha] || "No hay santos registrados para hoy.";
}

function mostrarSantoral() {
  document.getElementById("santoralHoy").textContent = obtenerSantoralDelDia();
}

// Navegación por fechas
function mostrarSantoralPorFecha() {
  const fechaInput = document.getElementById("fechaSelector").value;
  if (!fechaInput) return;
  const [year, month, day] = fechaInput.split("-");
  const claveFecha = `${day.padStart(2, "0")}-${month.padStart(2, "0")}`;
  const resultado = santoral[claveFecha] || "No hay santos registrados para esta fecha.";
  document.getElementById("santoralFechaSeleccionada").textContent = resultado;
}

// Búsqueda por nombre del santo
function buscarSanto() {
  const nombre = document.getElementById("nombreSanto").value.toLowerCase();
  const resultados = Object.entries(santoral).filter(([fecha, santos]) =>
    santos.toLowerCase().includes(nombre)
  );
  const listaResultados = document.getElementById("resultadosBusqueda");
  listaResultados.innerHTML = resultados.length
    ? resultados.map(([fecha, santos]) => `<li>${fecha}: ${santos}</li>`).join("")
    : "<li>No se encontraron resultados.</li>";
}

// Generar calendario interactivo
function generarCalendario() {
  const contenedor = document.getElementById("calendarioContainer");
  const hoy = new Date();
  const mesActual = hoy.getMonth(); // Mes actual (0 indexado, es decir, enero = 0)
  const diasEnMes = new Date(hoy.getFullYear(), mesActual + 1, 0).getDate(); // Días del mes actual

  // Generar el calendario
  let calendarioHTML = "<table border='1' style='width: 100%; text-align: center;'>";
  calendarioHTML += "<thead><tr><th colspan='7'>Días del Mes</th></tr></thead>";
  calendarioHTML += "<tbody><tr>";

  // Variables para organizar la estructura semanal
  const primerDiaSemana = new Date(hoy.getFullYear(), mesActual, 1).getDay(); // Primer día del mes (0=domingo)
  const diasSemana = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

  // Agregar encabezados de los días de la semana
  calendarioHTML += diasSemana.map((dia) => `<th>${dia}</th>`).join("");
  calendarioHTML += "</tr><tr>";

  // Rellenar días vacíos antes del primer día del mes
  for (let i = 0; i < primerDiaSemana; i++) {
    calendarioHTML += "<td></td>";
  }

  // Agregar los días del mes
  for (let dia = 1; dia <= diasEnMes; dia++) {
    const claveFecha = `${String(dia).padStart(2, "0")}-${String(mesActual + 1).padStart(2, "0")}`;
    calendarioHTML += `
      <td onclick="mostrarSantoralPorFechaCalendario('${claveFecha}')" style="cursor: pointer;">
        ${dia}
      </td>
    `;
    // Si es el último día de la semana, cerrar fila y abrir una nueva
    if ((primerDiaSemana + dia) % 7 === 0) {
      calendarioHTML += "</tr><tr>";
    }
  }

  // Rellenar los días vacíos al final del mes
  const diasRestantes = (primerDiaSemana + diasEnMes) % 7;
  if (diasRestantes !== 0) {
    for (let i = diasRestantes; i < 7; i++) {
      calendarioHTML += "<td></td>";
    }
  }

  calendarioHTML += "</tr></tbody></table>";

  // Insertar el calendario en el contenedor
  contenedor.innerHTML = calendarioHTML;
}

// Función para mostrar el santoral de una fecha seleccionada en el calendario
function mostrarSantoralPorFechaCalendario(claveFecha) {
  const resultado = santoral[claveFecha] || "No hay santos registrados para esta fecha.";
  alert(`Santoral del ${claveFecha}: ${resultado}`);
}

// Llamar a la función al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  generarCalendario();
});
