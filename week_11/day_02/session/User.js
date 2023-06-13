import React from "react";

const User = ({ data }) => {
  //destructuracion de objetos
  const { id, name, age } = data;

  return (
    <div>
      <p>{`id: ${id}`}</p>
      <p>{`name: ${name}`}</p>
      <p>{`edad: ${age}`}</p>
    </div>
  );
};

export default User;
