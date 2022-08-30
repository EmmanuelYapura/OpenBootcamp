const btn = document.getElementById('btn-alert');

btn.addEventListener("click", () => {
    alert("click en el boton")
})

$( () => {
    $('#btn-alert').click( () => {
        console.log("Estoy utilizando jQuery")
    })
})