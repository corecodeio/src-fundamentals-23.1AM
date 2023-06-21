const express = require('express');
const app = express()
const routes = require('./routes/index');
const cors = require('cors')
const config = require('./config/index') // {server_port:4000}

app.use(cors())
app.use(express.json())

app.use((request,response,next)=>{
    console.log(request.url, request.method);
    next()
})

app.use('/api',routes)


app.listen(config.server_port,()=>{
    console.log(`servidor escuchando en el puerto ${config.server_port}`)
})