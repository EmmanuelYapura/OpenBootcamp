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

//Soluciones del Bootcamp

async function damePromesa() {
    return setTimeout(() => console.log("Hola soy una promesa"), 5000)
}

function* idsPares() {
    let id = 0
    while(true) {
        yield id += 2
    }
}