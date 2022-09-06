import './App.css';
import { Contacto } from './components/ComponentA';
import ComponentB from './components/ComponentB';

function App() {
  const contacto = new Contacto('Emmanuel','Yapura', 'eyapura96@gmail.com', true)
  return (
    <div className="App">
      <ComponentB contact={contacto}/>
    </div>
  );
}

export default App;
