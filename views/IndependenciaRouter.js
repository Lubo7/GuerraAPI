const express = require('express');
const IndependenciaRouter = express.Router();

//Importo modelo de datos
const IndependenciaController = require('../controllers/IndependenciaController');

// End-points CRUD movies
IndependenciaRouter.get('/', IndependenciaController.getAll);
IndependenciaRouter.get('/:id', IndependenciaController.getById);
IndependenciaRouter.post('/', IndependenciaController.create);
IndependenciaRouter.put('/:id', IndependenciaController.update);
IndependenciaRouter.delete('/:id', IndependenciaController.delete);

module.exports = IndependenciaRouter;