const service = require('../service/listService.js');


const listController = {

    //recupere toutes les listes
    getAll: async (req, res) => {
        try{
            const listeListes = await service.getAll()
            res.send(listeListes)
        }catch(err){
            res.status(500).send(err.message)
        }
    },
    
    //recupere une liste par son id
    getById: async (req, res) => {
        try{
            const listeListes = await service.getById(req.params.id)
            res.send(listeListes)
        }catch(err){
            res.status(500).send(err.message)
        }
    },
    
    create: async (req, res) => {
        try{
            const listeListes = await service.create(req.body)
            res.send(listeListes)
        }catch(err){
            res.status(500).send(err.message)
        }
    },
    
    update: async (req, res) => {
        try{
            const listeListes = await service.update(req.params.id, req.body)
            res.send(listeListes)
        }catch(err){
            res.status(500).send(err.message)
        }
    },
    
    delete: async (req, res) => {
        try{
            const listeListes = await service.delete(req.params.id)
            res.send(listeListes)
        }catch(err){
            res.status(500).send(err.message)
        }
    }   

}

module.exports = listController
