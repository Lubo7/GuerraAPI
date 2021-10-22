const express = require('express');
const GuerraRouter = express.Router();

//Importo modelo de datos
const GuerraController = require('../controllers/GuerraController');

// End-points CRUD movies
GuerraRouter.get('/', GuerraController.getAll);
GuerraRouter.get('/:id', GuerraController.getById);
GuerraRouter.post('/', GuerraController.create);
GuerraRouter.put('/:id', GuerraController.update);
GuerraRouter.delete('/:id', GuerraController.delete);

module.exports = GuerraRouter;