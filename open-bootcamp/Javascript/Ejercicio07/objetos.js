const misDatos = {
    nombre: "Emmanuel",
    apellido: "Yapura",
    edad: 25,
    altura: 175,
    eresDesarrollador: true
};

const miEdad = misDatos.edad;

const mejorAmigo1 = {
    nombre: "Facundo",
    apellido: "Chocobar",
    edad: 28,
    altura: 165,
    eresDesarrollador: false
};

const mejorAmigo2 = {
    nombre: "Kevin",
    apellido: "Aramayo",
    edad: 27,
    altura: 171,
    eresDesarrollador: false
};

const lista = [{...misDatos}, {...mejorAmigo1}, {...mejorAmigo2}];

const listaOrdenada = lista.sort((a,b) => b.edad - a.edad)
