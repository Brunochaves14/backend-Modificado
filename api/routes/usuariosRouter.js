const { Router } = require('express')
const LoginController = require('../controllers/LoginController')
const midle = require('../Midlewares')
const UsuariosController = require('../controllers/UsuariosController')

const router = Router()

router.get('/usuario', UsuariosController.pegartodasOsUsuarios)
router.get('/usuario/:id', UsuariosController.pegaUmUsuario)
router.get('/usuario-email/:email', UsuariosController.buscarUsuarioPorEmail)
router.post('/usuario', UsuariosController.criaUsuario)
router.put('/usuario/:id', UsuariosController.atualizaUsuario)
router.delete('/usuario/:id', UsuariosController.apagaUsuario)


router.post('/usuarioLogin', LoginController.index)

module.exports = router