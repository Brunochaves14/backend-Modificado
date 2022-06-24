const { Router } = require('express')

const VeiculoController = require('../controllers/VeiculosController')

const router = Router()

router.get('/veiculo', VeiculoController.pegartodasOsVeiculos)
router.get('/veiculo/:id', VeiculoController.pegaUmVeiculo)
router.post('/veiculo', VeiculoController.criaVeiculo)
router.put('/veiculo/:id', VeiculoController.atualizaVeiculo)
router.delete('/veiculo/:id', VeiculoController.apagaVeiculo)

module.exports = router