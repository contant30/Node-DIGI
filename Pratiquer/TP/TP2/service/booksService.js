const Book = require('../models/booksModel');
const { Op } = require('sequelize');

// mise en place des services
const service = {

    getAll: async () => {
        return await Book.findAll();
    },

    getById: async (id) => {
        return await Book.findByPk(id);
    },

    getBySearch: async (search) => {
        if (!search) return [];
    
    return await Book.findAll({
        where: {
            [Op.or]: [  
                { title: { [Op.like]: `%${search}%` } },     
                { author: { [Op.like]: `%${search}%` } },
                { isbn: { [Op.like]: `%${search}%` } },
                { publication_year: search }                  
            ]
        }
    });
},

    create: async (book) => {
        return await Book.create(book);
    },

    update: async (id, book) => {
        const existingBook = await Book.findByPk(id);
        if (!existingBook) {
            throw new Error('Book not found');
        }
        return await existingBook.update(book);
    },

    delete: async (id) => {
        const existingBook = await Book.findByPk(id);
        if (!existingBook) {
            throw new Error('Book not found');
        }
        return await existingBook.destroy();
    }
}

module.exports = service;