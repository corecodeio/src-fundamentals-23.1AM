//const express = require('express')
const { createServer } = require('http')

const server = createServer((request, response) => {
    console.log(request.url, request.method);
    
    response.writeHead(200)
    response.write('Hello World')
    response.write('hola')
    response.end()
    // [] [] [] [] [] [end] se envian muchos pachetes y cuando se envia end dejar de escuchar
})

//console.log('Hello World')

server.listen(4000,()=>{
    console.log('servidor escuchando en el puerto 4000')
})