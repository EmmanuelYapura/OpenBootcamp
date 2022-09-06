import PropTypes from 'prop-types';
import { useState } from 'react';
import { Contacto } from './ComponentA'

const ComponentB = ({ contact }) => {
    const [estado, setEstado] = useState(contact.conectado);

    const cambiarEstado = () => {
        setEstado(!estado)
        console.log(estado)
    }

    return (
        <div>
            <h2>
                Nombre: {contact.nombre}
            </h2>
            <h3>
                Apellido: {contact.apellido}
            </h3>
            <h4>
                Email: {contact.email}
            </h4>
            <h5>
                Conectado: {estado ? 'Contacto en linea' : 'Contaco no disponible'}
            </h5>
            <button onClick={cambiarEstado}>Cambiar Estado</button>
        </div>
    );
};

ComponentB.propTypes = {
    contact: PropTypes.instanceOf(Contacto)
};

export default ComponentB;
