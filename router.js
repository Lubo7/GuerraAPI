const router = require('express').Router();

const BandosRouter = require('./views/BandosRouter');
router.use('/bandos', BandosRouter);

const EstadoRouter = require('./views/EstadoRouter');
router.use('/estado', EstadoRouter);

const GuerraRouter = require('./views/GuerraRouter');
router.use('/guerra', GuerraRouter);

const IndependenciaRouter = require('./views/IndependenciaRouter');
router.use('/independencia', IndependenciaRouter);

const PaisesRouter = require('./views/PaisesRouter');
router.use('/empleados', PaisesRouter);

const ParticipacionRouter = require('./views/ParticipacionRouter');
router.use('/participacion', ParticipacionRouter);

module.exports = router;