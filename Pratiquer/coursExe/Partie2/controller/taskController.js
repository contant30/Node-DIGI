const service = require('../service/taskService.js');

// permet de gérer les erreurs et l'appel au service

const controller = {

    // Récupérer toutes les tâches
    getAll: async (req, res) => {
        try{
            const listeTaches = await service.getAll()
            res.send(listeTaches)
        }catch(err){
            res.status(500).send(err.message)
        }
    },

    // récupères une tâche par son id
    getById:    async (req, res) => {
        try{
            const listeTaches = await service.getById(req.params.id)
            res.send(listeTaches)
        }catch(err){
            res.status(500).send(err.message)
        }
    },

    // créer une tâche
    create: async (req, res) => {
        try{
            const listeTaches = await service.create(req.body)
            res.send(listeTaches)
        }catch(err){
            res.status(500).send(err.message)
        }
    },

    // mettre à jour une tâche
    update:     async (req, res) => {
        try{
            const listeTaches = await service.update(req.params.id, req.body)
            res.send(listeTaches)
        }catch(err){
            res.status(500).send(err.message)
        }
    },

    // supprimer une tâche
    delete:     async (req, res) => {
        try{
            const listeTaches = await service.delete(req.params.id)
            res.send(listeTaches)
        }catch(err){
            res.status(500).send(err.message)
        }
    }
}
module.exports = controller;