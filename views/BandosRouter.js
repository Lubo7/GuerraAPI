const express = require('express');
const BandosRouter = express.Router();

//Importo modelo de datos
const BandosController = require('../controllers/BandosController');

// End-points CRUD movies
BandosRouter.get('/', BandosController.getAll);
BandosRouter.get('/:id', BandosController.getById);
BandosRouter.post('/', BandosController.create);
BandosRouter.put('/:id', BandosController.update);
BandosRouter.delete('/:id', BandosController.delete);

module.exports = BandosRouter;