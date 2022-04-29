const express = require('express')
const path = require('path')
const app = express()
const routes = require('./routes/router')

require('./database/config')

app.use(express.json())
app.use(express.urlencoded({extended: false}))

routes(app)

app.listen(80, ()=>{
    console.log('server connected');
})