const express = require('express');
const app = express()
const routes = require('./routes/index');
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.use((request,response,next)=>{
    console.log(request.url, request.method);
    next()
})

app.use('/api',routes)


app.listen(4000,()=>{
    console.log('servidor escuchando en el puerto 4000')
})