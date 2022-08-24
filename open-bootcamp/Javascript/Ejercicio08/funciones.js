function retornarTrue() {
    return true;
}


const miPromesa = new Promise(resolve => {
    setTimeout(resolve, 5000);
})

miPromesa
    .then(() => console.log('Hola soy una promesa'))
    .catch(() => console.log('Hubo un error'))


function* generadorIndicesPares() {
    let id = 0;
    while (true) {
        id = id + 2;
        yield id;
    }
}
