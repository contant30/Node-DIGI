const bookService = require('../service/booksService');

// mise en place des controleurs
const controller = {

    getAll: async (req, res) => {
        try{
            const books = await bookService.getAll();
            res.send(books);
        }catch(err){
            res.status(500).send(err.message);
        }
    },

    getStats: async (req, res) => {
        try{
            const stats = await bookService.getStats();
            res.send(stats);
        }catch(err){
            res.status(500).send(err.message);
        }
    },

    getById: async (req, res) => {
        try{
            const book = await bookService.getById(req.params.id);
            res.send(book);
        }catch(err){
            res.status(500).send(err.message);
        }
    },

    getBySearch: async (req, res) => {
    try {
        const { search } = req.params;  
        if (!search) return res.status(400).json({ error: 'search requis' });
        
        const books = await bookService.getBySearch(search);
        res.json(books); 

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
},

    create: async (req, res) => {
        try{
            const book = await bookService.create(req.body);
            res.send(book);
        }catch(err){
            res.status(500).send(err.message);
        }
    },

    update: async (req, res) => {
        try{
            const book = await bookService.update(req.params.id, req.body);
            res.send(book);
        }catch(err){
            res.status(500).send(err.message);
        }
    },

    delete: async (req, res) => {
        try{
            const book = await bookService.delete(req.params.id);
            res.send(book);
        }catch(err){
            res.status(500).send(err.message);
        }
    }
}

module.exports = controller;




