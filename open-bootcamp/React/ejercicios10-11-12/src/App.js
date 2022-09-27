import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('#000000')
  const [tiempo, setTiempo] = useState(0)

  const getColor = () => Math.floor(Math.random() * 256);

  const generadorColor = () => {
    let rojo = getColor()
    let verde = getColor()
    let negro = getColor()

    return `rgb(${rojo}, ${verde}, ${negro})`
  }


  const cambiaColor = () => {
    let nuevoColor = generadorColor()
    setColor(nuevoColor)
  }

  const mouseSobreDiv = () => {
    console.log('dentro del div')
    return setTiempo(setInterval(cambiaColor, 600))
  }

  const mouseFueraDiv = () => {
    console.log('fuera del div')
    return clearInterval(tiempo)

  }

  const detenerColores = () => {
    console.log('doble click')
    return clearInterval(tiempo)
  }

  return (
    <div className="App">
      <div 
      onMouseOver={mouseSobreDiv}
      onMouseLeave={mouseFueraDiv}
      onDoubleClick={detenerColores}
      style={{width: '255px', height: '255px', backgroundColor: color, margin: 'auto' }}
      ></div>
    </div>  
  );
}

export default App;
