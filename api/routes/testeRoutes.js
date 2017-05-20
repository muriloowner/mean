'use strict'

const express = require('express')
const router  = express.Router()

router.get('/nome', (req, res) => {
 const objetoTeste = {
  nome: 'Murilo',
  sobrenome:'Marchi'
 }
 res.json(objetoTeste)
})

router.get('/nome/:id', (req, res) => {
 const id = req.params.id
 const obj = { meu:id }
 res.json(obj)
})

router.post('/cadastro', (req, res) => {

 const body = req.body
 const obj = {
  mensagem: "Olá meu nome é " + body.nome +
            " eu tenho " + body.idade + " anos " +
            " meu email é " + body.email
 }
 res.json(obj)

})


module.exports =  router