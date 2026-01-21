const express = require("express");
const router = express.Router();
const controller = require("../controller/taskController");
const { taskValidator, idTaskValidator } = require("../validator/taskValidator");
const validate = require("../validator/validate");
const authMiddleware = require("../middleware/authMiddleware");

//routes pour les tâches

router.get('/', authMiddleware, controller.getAll);
router.get('/:id', idTaskValidator, validate, controller.getById);
router.post('/', authMiddleware, taskValidator, validate, controller.create);
router.put('/:id', idTaskValidator, authMiddleware, taskValidator, validate, controller.update);
router.delete('/:id', idTaskValidator, authMiddleware, validate, controller.delete);

module.exports = router;