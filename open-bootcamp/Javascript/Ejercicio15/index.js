const nombre = "Emmanuel";

const apellido = "Yapura";

const objetoAlumno = {
    nombre,
    apellido
};

//sessionStorage.setItem("alumno", JSON.stringify(objetoAlumno));

//localStorage.setItem("alumno", JSON.stringify(objetoAlumno));

let horaActual = new Date();

document.cookie = `alumnoCaducidad=${JSON.stringify(objetoAlumno)};expires=${new Date(horaActual.getTime() + 2 * 60000)}`;



