const database = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/auth');
const bcryptjs = require('bcryptjs');

class LoginController{
    
    
    async index(req, res){
        const {email, senha} = req.body;
        
            const userExist = await database.Usuarios.findOne({where:{email}})
            if(!userExist){
                return res.status(400).json({
                    error: true,
                    message: "Usuario não existe"
                })
            }
    
            if(!(await bcryptjs.compare(senha, userExist.senha))){
                return res.status(400).json({
                    error: true,
                    message: "Senha invalida"
                })
            }
    
            return res.status(200).json({
                usuario: {
                    email: userExist.email
                },
                token: jwt.sign(
                    {id: userExist.id}, 
                    config.secret,
                    {expiresIn: config.expireIn})
            })
        
            
          
    }
}

module.exports = new LoginController();