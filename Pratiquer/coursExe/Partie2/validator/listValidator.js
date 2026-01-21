const { body, param } = require('express-validator');

const listValidator = [
    body('nom')
        .notEmpty().withMessage('Le nom est obligatoire')
        .isString().withMessage('Le nom doit etre une chaine de caractere')
        .isLength({min: 2}).withMessage('Le nom doit contenir au moins 2 caracteres'),
    body('description')
        .optional()
        .isString().withMessage('La description doit etre une chaine de caractere'),
];

const idListValidator = [
    param('id')
        .notEmpty().withMessage('L\'id est obligatoire')
        .isInt().withMessage('L\'id doit etre un nombre entier')
        .toInt()
];

module.exports = { listValidator, idListValidator };