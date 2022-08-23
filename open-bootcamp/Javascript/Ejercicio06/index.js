const listaDeCompras = ['verduras', 'leche', 'cereal', 'agua', 'atun'];

//agrega producto (al final)
listaDeCompras.push('aceite de girasol');

//elimina producto (del final)
listaDeCompras.pop();

const peliculasFavoritas = [
    {titulo: "Kunfu Panda 3", director: "Jennifer Yuh Nelson y Alessandro Carloni", fecha: new Date(2016,2,17)},
    {titulo: "Rush Hour 2", director: "Brett Ratner", fecha: new Date(2001,7,3)},
    {titulo: "(500) días con ella", director: "Marc Webb", fecha: new Date(2009,7,7)}
];

//Peliculas post 1ro de Enero de 2010
const peliculasPostEnero = peliculasFavoritas.filter( pelicula => {
    if(pelicula.fecha.getFullYear() < 2010) return false
    else if(pelicula.fecha.getDate() > 1) return true
});

const listaConDirectores = peliculasFavoritas.map(pelicula => pelicula.director);

const listaDeTitulos = peliculasFavoritas.map(pelicula => pelicula.titulo);

const listaConcatenada = listaConDirectores.concat(listaDeTitulos);

const listaConPropagacion = [...listaConDirectores, ...listaDeTitulos];

