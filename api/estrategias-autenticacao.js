const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const usuario = require('./controllers/UsuariosController') //mudar a referencia de acordo com o codigo
const {InvalidArgumentError} = require('../erros')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

function criaTokenJWT(Usuario){
    const payload = {
        id: usuario.id
    }

    const token = jwt.sign(payload, 'senha-secreta')
}

function verificaUsuario(usuario){
    if(!usuario){
        throw new InvalidArgumentError('Nao existe usuario com esse email')
    }
}

async function verificaSenha(senha, senhaHash){
    const senhaValida = await bcryptjs.compare(senha, senhaHash)
    if(!senhaValida){
        throw new InvalidArgumentError('E-mail ou senha invalida')
    }
    
}

passport.use(
    new LocalStrategy({
        usernameField: 'email',
        passwordField: 'senha',
        session: false
    }, async (email, senha, done)=>{
        try {
            const Usuario = await Usuario.buscarPorEmail(email)
            verificaUsuario(usuario)
            verificaSenha(senha, usuario.senhaHash)
            done(null, usuario)
        } catch (erro) {
            done(erro)
            
        }
    })
)