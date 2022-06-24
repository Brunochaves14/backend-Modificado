const { Router } = require('express')

const VagaController = require('../controllers/VagaController')

const router = Router()

router.get('/vaga', VagaController.pegartodasAsVagas)
router.get('/vaga/:id', VagaController.pegaUmaVaga)
router.post('/vaga', VagaController.criaVaga)
router.put('/vaga/:id', VagaController.atualizaVaga)
router.delete('/vaga/:id', VagaController.apagaVaga)

module.exports = router