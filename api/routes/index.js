const express = require('express')
const pessoas = require('./pessoasRouter')
const veiculo = require('./veiculoRouter')
const vaga = require('./vagaRouter')
const usuario = require('./usuariosRouter')

module.exports = app =>{
    app.use(express.json())
    app.use(pessoas)
    app.use(veiculo)
    app.use(vaga)
    app.use(usuario)
}