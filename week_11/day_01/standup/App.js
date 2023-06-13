import React, { useState } from "react";

const App = () => {
  //crear un estado con un objeto
  const [data, setData] = useState({
    nombre: "first name",
    apellido: "last name",
    edad: 0,
  });
  //crear un estado con un booleano
  const [detalles, setDetalles] = useState(false);

  const cambiarNombre = () => {
    //cambia el estado del objeto, sin afectar los demas valores
    setData({ ...data, nombre: "leonardo" });
  };

  const cambiarDetaller = () => {
    //cambia el estado del booleano a su contrario
    setDetalles(!detalles);
  }

  return (
    <div>
      <h1>{`Hola ${data.nombre} ${data.apellido} como estas`}</h1>
      <button onClick={cambiarNombre}>cambiar nombre</button>
      <h1>Titulo</h1>
      {/**si detalles es true, muestra el parrafo */}
      {detalles && (
        <p>
          Mauris commodo convallis elit, eu bibendum turpis suscipit ac.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Quisque efficitur rhoncus quam ut tincidunt.
          Donec scelerisque ex ac elit blandit, in bibendum mauris eleifend.
        </p>
      )}
      {/**si detalles es false, cambia el texto del boton */}
      <button onClick={cambiarDetaller}>{detalles?"ocultar":"mostrar mas info"}</button>
    </div>
  );
};

export default App;