export function FuncionesContactos({ contacto, cambiaEstado, eliminar} ) {
    return (
        <div>
            <p>Contacto: {contacto.nombre}</p>
            <p>Email: {contacto.email}</p>

            <button 
            style={{backgroundColor: contacto.estado ? 'green' : 'red'}}
            onClick={ () => {
                cambiaEstado(contacto)
            }}
            >
                { contacto.estado ? 'Conectado' : 'Desconectado'}
            </button>

            <button onClick={ () => {eliminar(contacto)}}>
                Borrar
            </button>
        </div>
    )
}