const service = require('../service/taskService');

// permet de gérer les erreurs et l'appel au service

const controller = {

    // Récupérer toutes les tâches
    getAll: (req, res) => {
        try{
            const listeTaches = service.getAll()
            res.send(listeTaches)
        }catch(err){
            res.status(500).send(err.message)
        }
    },

    // récupères une tâche par son id
    getById: (req, res) => {
        try{
            const listeTaches = service.getById(req.params.id)
            res.send(listeTaches)
        }catch(err){
            res.status(500).send(err.message)
        }
    },

    // créer une tâche
    create: (req, res) => {
        try{
            const listeTaches = service.create(req.body)
            res.send(listeTaches)
        }catch(err){
            res.status(500).send(err.message)
        }
    },

    // mettre à jour une tâche
    update: (req, res) => {
        try{
            const listeTaches = service.update(req.params.id, req.body)
            res.send(listeTaches)
        }catch(err){
            res.status(500).send(err.message)
        }
    },

    // supprimer une tâche
    delete: (req, res) => {
        try{
            const listeTaches = service.delete(req.params.id)
            res.send(listeTaches)
        }catch(err){
            res.status(500).send(err.message)
        }
    }
}
module.exports = controller;