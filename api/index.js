const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express()
app.use(bodyParser.json())
app.use(cors())
const routes = require('./routes')



routes(app)

// LISTEN

app.listen(4002, () => console.log('Servidor rodando na porta 4002: localhost:4002'))

module.exports = app;