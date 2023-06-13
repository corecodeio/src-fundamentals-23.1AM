//importacion de librerias y hooks
import { useState } from 'react';
//importacion de componentes
import Contador from './Contador';
import Titulo from './Titulo';

// creacion de componente
function App() {
  // creacion de estados
  const [mostrar, setMostrar] = useState(true);
  const cambio = () =>{
    // modificacion de estados
    setMostrar(!mostrar)
  }
  const detalles = () =>{
    console.log('hola mundo')
  }
  // retorno de componente un html o jsx
  return (
    <div className="App">
      <button onClick={cambio}>
        {mostrar ? "ocultar": "mostrar"}
      </button>
      {mostrar && <Titulo texto='hola mundo' funDetalles={detalles}/>}
      {/* invocamos un componente como un html teniendo en cuenta llamar el componente con la primera letra en Mayusculas  */}
      <Contador cantidad={5}/>
      <Contador cantidad={100}/>
    </div>
  );
}

export default App;