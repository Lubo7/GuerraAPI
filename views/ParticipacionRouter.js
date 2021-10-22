const express = require('express');
const ParticipacionRouter = express.Router();

//Importo modelo de datos
const ParticipacionController = require('../controllers/ParticipacionController');

// End-points CRUD movies
ParticipacionRouter.get('/', ParticipacionController.getAll);
ParticipacionRouter.get('/:id', ParticipacionController.getById);
ParticipacionRouter.post('/', ParticipacionController.create);
ParticipacionRouter.put('/:id', ParticipacionController.update);
ParticipacionRouter.delete('/:id', ParticipacionController.delete);

module.exports = ParticipacionRouter;