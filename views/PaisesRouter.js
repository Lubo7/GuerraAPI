const express = require('express');
const PaisesRouter = express.Router();

//Importo modelo de datos
const PaisesController = require('../controllers/PaisesController');

// End-points CRUD movies
PaisesRouter.get('/', PaisesController.getAll);
PaisesRouter.get('/:id', PaisesController.getById);
PaisesRouter.post('/', PaisesController.create);
PaisesRouter.put('/:id', PaisesController.update);
PaisesRouter.delete('/:id', PaisesController.delete);

module.exports = PaisesRouter;