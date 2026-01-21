const express = require("express");
const router = express.Router();
const controller = require("../controller/taskController");
const { taskValidator, idTaskValidator } = require("../validator/taskValidator");
const validate = require("../validator/validate");

//routes pour les tâches

router.get('/', controller.getAll);
router.get('/:id', idTaskValidator, validate, controller.getById);

router.post('/', taskValidator, validate, controller.create);

router.put('/:id', idTaskValidator, taskValidator, validate, controller.update);

router.delete('/:id', idTaskValidator, validate, controller.delete);

module.exports = router;