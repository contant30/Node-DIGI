const express = require('express');
const booksController = require('../controller/booksController.js');
const router = express.Router();

// mise en place des routes

router.get('/',booksController.getAll);
router.get('/:id',booksController.getById);

router.get('/search/:search',booksController.getBySearch);

router.post('/',booksController.create);

router.put('/:id',booksController.update);

router.delete('/:id',booksController.delete);


module.exports = router;
