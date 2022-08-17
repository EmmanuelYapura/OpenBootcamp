const fechaNacimiento = new Date('November 3, 1996')

const anioPublicacion = new Date()
anioPublicacion.setFullYear(1948)


const libroFavorito = {
    titulo: 'El túnel',
    autor: 'Ernesto Sábato',
    fechaPub: anioPublicacion.getFullYear(),
    url: 'https://drive.google.com/file/d/1r5DhFShaJvW8Hl0N7eC2pBBlByW0Fdqy/view'
}


const miLista = ["Emmanuel", 25, true, fechaNacimiento,  libroFavorito]
console.log(miLista)