const express = require('express');
const EstadoRouter = express.Router();

//Importo modelo de datos
const EstadoController = require('../controllers/EstadoController');

// End-points CRUD movies
EstadoRouter.get('/', EstadoController.getAll);
EstadoRouter.get('/:id', EstadoController.getById);
EstadoRouter.post('/', EstadoController.create);
EstadoRouter.put('/:id', EstadoController.update);
EstadoRouter.delete('/:id', EstadoController.delete);

module.exports = EstadoRouter;