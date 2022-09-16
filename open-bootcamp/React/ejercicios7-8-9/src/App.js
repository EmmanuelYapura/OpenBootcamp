import { useState } from 'react';
import './App.css';
import { FormularioContactos } from './components/FormularioContactos';
import { FuncionesContactos } from './components/FuncionesContactos';

function App() {
  const contactoAleatorio = [
    {nombre: 'Emmanuel', email: 'eyapura96@gmail.com', conectado: true}
  ]

  const [ contactos, setContactos ] = useState(contactoAleatorio)

  function cambiarEstado(contacto){
    const index = contactos.indexOf(contacto)
    const tempContacto = [...contactos]

    tempContacto[index].estado = !tempContacto[index].estado
    setContactos(tempContacto)
  }

  function eliminarContacto(contacto){
    const index = contactos.indexOf(contacto)
    const tempContacto = [...contactos]
    tempContacto.splice(index,1)
    setContactos(tempContacto)
  }

  function agregarNuevoContacto(contacto){
    const tempContacto = [...contactos]
    tempContacto.push(contacto)
    setContactos(tempContacto)
  }

  return (
    <div className="App">
        <h1>
        Mi formulario de contacto
        </h1>
      <div>
        {contactos.map( (contacto, index) => {
          return(
            <FuncionesContactos key={index} contacto={contacto} cambiaEstado={cambiarEstado} eliminar={eliminarContacto}/>
          )
        })}
      <FormularioContactos agregarContacto={agregarNuevoContacto}/>
      </div>
    </div>
  );
}

export default App;
