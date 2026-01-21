const { body, param } = require('express-validator');

const taskValidator = [
    body('titre')
        .notEmpty().withMessage('Le titre est obligatoire')
        .isString().withMessage('Le titre doit etre une chaine de caractere')
        .isLength({min: 3}).withMessage('Le titre doit contenir au moins 3 caracteres'),

    body('description')
        .optional()
        .isString().withMessage('La description doit etre une chaine de caractere'),

    body('date_debut')
        .isDate().withMessage('La date de debut doit etre une date')
        .isISO8601().withMessage('La date de debut doit etre une date'),

    body('date_fin')
        .custom((dateFinValue, { req }) => {
            const dateDebutValue = req.body.date_debut;
            if (!dateDebutValue) {
                throw new Error('La date de début est requise pour valider date_fin');
            }
            const dateDebut = new Date(dateDebutValue);
            const dateFin = new Date(dateFinValue);
            if (isNaN(dateDebut.getTime()) || isNaN(dateFin.getTime())) {
                throw new Error('Les dates doivent être valides');
            }
            if (dateFin <= dateDebut) {
                throw new Error('La date_fin doit être impérativement après la date_debut');
            }
            return true;
        }),

    body('done')
        .isBoolean().withMessage('Le statut doit etre un boolean')
];

const idTaskValidator = [
    param('id')
        .notEmpty().withMessage('L\'id est obligatoire')
        .isInt().withMessage('L\'id doit etre un nombre entier')
        .toInt()
];

module.exports = { taskValidator, idTaskValidator };