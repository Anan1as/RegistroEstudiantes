// Obtener el formulario y el botón
let formulario = document.getElementById("formulario");
let btnGuardar = document.getElementById("btnGuardar");

// Función para crear la tabla
function crearTabla() {
    // Verificar si ya existe una tabla
    let tablaExistente = document.getElementById("tablaEpica");

    // Si la tabla ya existe, no crear otra cabecera
    if (tablaExistente) {
        agregarFila(tablaExistente);
        return;
    }

    // Objetos para la información del formulario
    let name = document.getElementById("name");
    let lastname = document.getElementById("lastname");
    let grupo = document.getElementById("grupo");

    // Validar que si están todos los datos ingresados
    if (name.value === '' || lastname.value === '' || grupo.value === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Crear tabla
    let tabla = document.createElement("table");
    tabla.setAttribute("border", "1");
    tabla.setAttribute("id", "tablaEpica");

    // Encabezados de la tabla
    let encabezados = ["Nombre", "Apellido", "Grupo", "Nota Desarrollo", "Nota Ingles", "Nota Habilidades para la vida", "Nota Review", "Promedio Final", "Editar", "Eliminar"];

    let encabezadosCabecera = document.createElement("tr");

    encabezados.forEach((encabezado) => {
        let th = document.createElement("th");
        th.textContent = encabezado;
        encabezadosCabecera.appendChild(th);
    });

    tabla.appendChild(encabezadosCabecera);

    agregarFila(tabla);

    name.value = '';
    lastname.value = '';
    grupo.value = '';
    notaDesarrollo.value = '';
    notaIngles.value = '';
    notaHabilidades.value = '';
    notaReview.value = '';

    document.body.appendChild(tabla);
}

// Función para agregar fila a la tabla
function agregarFila(tabla) {
    // Objetos para la información del formulario
    let name = document.getElementById("name");
    let lastname = document.getElementById("lastname");
    let grupo = document.getElementById("grupo");
    let notaDesarrollo = document.getElementById("notaDesarrollo");
    let notaIngles = document.getElementById("notaIngles");
    let notaHabilidades = document.getElementById("notaHabilidades");
    let notaReview = document.getElementById("notaReview");
    let promedio = (parseFloat(notaDesarrollo.value) + parseFloat(notaIngles.value) + parseFloat(notaHabilidades.value) + parseFloat(notaReview.value)) / 4;
    
    // Crear fila con los datos del formulario
    let fila = document.createElement("tr");

    let nameCell = document.createElement("td");
    nameCell.textContent = name.value;
    fila.appendChild(nameCell);

    let lastnameCell = document.createElement("td");
    lastnameCell.textContent = lastname.value;
    fila.appendChild(lastnameCell);

    let grupoCell = document.createElement("td");
    grupoCell.textContent = grupo.value;
    fila.appendChild(grupoCell);

    let notaDesarrolloCell = document.createElement("td");
    notaDesarrolloCell.textContent = notaDesarrollo.value;
    fila.appendChild(notaDesarrolloCell);

    let notaInglesCell = document.createElement("td");
    notaInglesCell.textContent = notaIngles.value;
    fila.appendChild(notaInglesCell);

    let notaHabilidadesCell = document.createElement("td");
    notaHabilidadesCell.textContent = notaHabilidades.value;
    fila.appendChild(notaHabilidadesCell);

    let notaReviewCell = document.createElement("td");
    notaReviewCell.textContent = notaReview.value;
    fila.appendChild(notaReviewCell);

    let promedioCell = document.createElement("td");
    promedioCell.textContent = promedio;
    fila.appendChild(promedioCell);

    // Crear celdas para los botones de Editar y Eliminar
    let editarCell = document.createElement("td");
    let eliminarCell = document.createElement("td");

    // Botón Editar
    let editarBtn = document.createElement("button");
    editarBtn.textContent = "Editar";
    editarBtn.addEventListener("click", function () {
        name.value = nameCell.textContent;
        lastname.value = lastnameCell.textContent;
        grupo.value = grupoCell.textContent;
        notaDesarrollo.value = notaDesarrolloCell.textContent;
        notaIngles.value = notaInglesCell.textContent;
        notaHabilidades.value = notaHabilidadesCell.textContent;
        notaReview.value = notaReviewCell.textContent;

        tabla.removeChild(fila);
    });
    editarCell.appendChild(editarBtn);

    // Botón Eliminar
    let eliminarBtn = document.createElement("button");
    eliminarBtn.textContent = "Eliminar";
    eliminarBtn.addEventListener("click", function () {
        tabla.removeChild(fila);
    });
    eliminarCell.appendChild(eliminarBtn);

    fila.appendChild(editarCell);
    fila.appendChild(eliminarCell);

    name.value = '';
    lastname.value = '';
    grupo.value = '';
    notaDesarrollo.value = '';
    notaIngles.value = '';
    notaHabilidades.value = '';
    notaReview.value = '';

    tabla.appendChild(fila);
}

// Evento click del botón
btnGuardar.addEventListener("click", crearTabla);

let cambiarColorBtn = document.getElementById("btnCambiarColor");

cambiarColorBtn.addEventListener("click", function () {
    let filas = document.querySelectorAll("#tablaEpica tr");

    filas.forEach((fila, index) => {
        if (index === 0) return;
        let promedioCell = fila.getElementsByTagName("td")[7];
        let promedioValor = parseFloat(promedioCell.textContent);

        if (promedioValor >= 3) {
            fila.classList.toggle("aprobado");
            fila.classList.remove("desaprobado");
        } else {
            fila.classList.toggle("desaprobado");
            fila.classList.remove("aprobado");
        }
    });
});