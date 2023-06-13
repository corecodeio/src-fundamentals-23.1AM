import React from 'react'

const Titulo = ({texto='title default', funDetalles}) => {
  return (
    <>
    <h1>{texto}</h1>
    <button onClick={funDetalles}>+ Info</button>
    </>
  )
}

export default Titulo