import React, { Component, useEffect, useState } from 'react'

const clock = () => {

    const propiedades = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Emmanuel',
        apellido: 'Yapura'
    }

    const [usuario, setUsuario] = useState(propiedades)

    useEffect( () => {
        const intervalo = setInterval ( () => {
            actualizarUsuario()
        }, 1000);

        return () => { clearInterval(intervalo)}
    })

    const actualizarUsuario = () => {
        return setUsuario({
            fecha: usuario.fecha,
            edad:   usuario.edad + 1,
            nombre: usuario.nombre,
            apellido: usuario.apellido
        })
    }

    return(
        <div>
            <h2>
                Hora Actual: {usuario.fecha.toLocaleString()}
            </h2>
            <h3>
                {usuario.nombre} {usuario.apellido}
            </h3>
            <h1>Edad: {usuario.edad}</h1>
        </div>
    )
}

export default Clock;