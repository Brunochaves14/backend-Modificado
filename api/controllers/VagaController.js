const database = require('../models')

class VagaController {
    static async pegartodasAsVagas(req, res) {
        try {
            const todasAsVagas = await database.Vagas.findAll()
            return res.status(200).json(todasAsVagas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaVaga(req, res) {
        const { id } = req.params
        try {
            const umaVaga = await database.Vagas.findOne({
                where:{
                    id: Number(id)
                }
            })
            return res.status(200).json(umaVaga)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaVaga(req, res){

       
        const novaVaga = req.body
        try {
            const novaVagaCria = await database.Vagas.create(novaVaga)
            return res.status(200).json(novaVagaCria)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaVaga(req, res){
        const {id} = req.params
        const novasInfos = req.body
        try {
            await database.Vagas.update(novasInfos, {
                where:{id:Number(id)}
            })
            const vagaAtualizada = await database.Vagas.findOne({
                where:{id:Number(id)}
            })
            return res.status(200).json(vagaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async apagaVaga(req, res){
        const {id} = req.params

        try {
            await database.Vagas.destroy({
                where:{id:Number(id)}
            })
            return res.status(200).json({mensagem:`O registro ${id}, foi deletado!`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = VagaController