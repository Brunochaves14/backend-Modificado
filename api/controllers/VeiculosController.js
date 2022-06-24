const database = require('../models')

class VeiculoController {
    static async pegartodasOsVeiculos(req, res) {
        try {
            const todasOsVeiculos = await database.Veiculos.findAll()
            return res.status(200).json(todasOsVeiculos)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmVeiculo(req, res) {
        const { id } = req.params
        try {
            const umVeiculo = await database.Veiculos.findOne({
                where:{
                    id: Number(id)
                }
            })
            return res.status(200).json(umVeiculo)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaVeiculo(req, res){
        const novoVeiculo = req.body
        
        try {
            const novoVeiculoCria = await database.Veiculos.create(novoVeiculo)
            return res.status(200).json(novoVeiculoCria)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaVeiculo(req, res){
        const {id} = req.params
        const novasInfos = req.body
        try {
            await database.Veiculos.update(novasInfos, {
                where:{id:Number(id)}
            })
            const veiculoAtualizada = await database.Veiculos.findOne({
                where:{id:Number(id)}
            })
            return res.status(200).json(veiculoAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async apagaVeiculo(req, res){
        const {id} = req.params

        try {
            await database.Veiculos.destroy({
                where:{id:Number(id)}
            })
            return res.status(200).json({mensagem:`O registro ${id}, foi deletado!`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = VeiculoController