const jwt = require('jsonwebtoken')
const config = require('./config/auth')
const { promisify } = require('util')

module.exports = async(req, res, next) =>{
    const auth = req.headers.authorization

    if(!auth){
        return res.status(401).json({
            error: true,
            code: 130,
            message: "o token de autenticação não existe!"
        })
    }


    const [, token] = auth.split(' ')
    
    try {
        const decode = await promisify(jwt.verify)(token, config.secret)
        
        if(!decode){
            return res.status(401).json({
                error: true,
                code: 130,
                message: "o token esta expirado"
            })
        }else{
            req.usuarios = decode.id
            next();
        }
    } catch (error) {
        return res.status(401).json({
            error: true,
            code: 130,
            message: "o token esta invalido"
        })
    }
}