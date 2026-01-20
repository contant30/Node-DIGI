const taches = require('../models/taskModel.js')

const service = {

    // récupère toutes les taches
    getAll: async () => {
        return await taches.findAll()
    },

    // récupère une tache par son id
    getById: async (id) => {
        return await taches.findByPk(id)
    },

    // créer une tache
    create: async (tache) => {
        return await taches.create(tache)
    },

    // met à jour une tache
    update: async (id, tache) => {
        return await taches.update(tache, { where: { id: id } })
    },

    // supprime une tache
    delete: async (id) => {
        return await taches.destroy({ where: { id: id } })
    }
}
module.exports = service;