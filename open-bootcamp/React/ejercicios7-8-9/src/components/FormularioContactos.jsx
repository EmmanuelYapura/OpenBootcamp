import { useRef } from "react";

export function FormularioContactos({agregarContacto}){

    const name = useRef('');
    const email = useRef('');

    function creaContacto(e){
        e.preventDefault();

        const nuevoContacto = {nombre: name.current.value, email: email.current.value, conectado: true};

        agregarContacto(nuevoContacto)
        name.current.value = '';
        email.current.value = '';
    }

    return(
        <form onSubmit={creaContacto}>
            <p>Agregar contacto</p>
            <input ref={name} placeholder='Nombre'  />
            <input ref={email} type='email' placeholder='Email'  />
            <button onClick={creaContacto} type='submit'>
                Agregar
            </button>
        </form>
    )

}