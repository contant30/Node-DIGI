const List = require('../models/listModel');

const service = {
    getAll: async () => {
        return await List.findAll();
    },
    getById: async (id) => {
        return await List.findByPk(id);
    },
    create: async (list) => {
        return await List.create(list);
    },
    update: async (id, list) => {
        return await List.update(list, { where: { id } });
    },
    delete: async (id) => {
        return await List.destroy({ where: { id } });
    }
}

module.exports = service