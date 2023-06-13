import React from "react";

const User = ({ data, handlerDelete }) => {
  //destructuracion de objetos
  const { id, name, age } = data;

  return (
    <div>
      <p>{`id: ${id}`}</p>
      <p>{`name: ${name}`}</p>
      <p>{`edad: ${age}`}</p>
      {/** ejecutamos la funcion que recibimos como parametro */}
      <button onClick={handlerDelete}>eliminar registro</button>
    </div>
  );
};

export default User;