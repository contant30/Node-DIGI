const Book = require('../models/booksModel');
const { sequelize, Sequelize } = require('../db/db');  
const { Op } = require('sequelize');


// mise en place des services
const service = {

    getAll: async () => {
        return await Book.findAll();
    },

    getById: async (id) => {
        return await Book.findByPk(id);
    },

    // Recherche par titre, auteur ou isbn
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

    // Affiche les stats
    getStats: async () => {
        // retourne le nombre total de livres
        const total = await Book.count();

            // retourne le nombre de livres par annee
        const parAnnee = await Book.findAll({
            attributes: [
                'publication_year',
                [sequelize.fn('COUNT', sequelize.col('id')), 'count']
            ],
            group: ['publication_year'],
            order: [['publication_year', 'DESC']]
        });

        // retourne le nombre de livres par auteur
        const parAuteur = await Book.findAll({
            attributes: [
                'author',
                [sequelize.fn('COUNT', sequelize.col('id')), 'count']
            ],
            group: ['author'],
            order: [[sequelize.fn('COUNT', sequelize.col('id')), 'DESC']]
        });

    return { total, parAnnee, parAuteur };
  },



    // Création d'un livre
    create: async (book) => {
        return await Book.create(book);
    },

    // Mise à jour d'un livre
    update: async (id, book) => {
        const existingBook = await Book.findByPk(id);
        if (!existingBook) {
            throw new Error('Book not found');
        }
        return await existingBook.update(book);
    },

    // Suppression d'un livre
    delete: async (id) => {
        const existingBook = await Book.findByPk(id);
        if (!existingBook) {
            throw new Error('Book not found');
        }
        return await existingBook.destroy();
    }
}

module.exports = service;