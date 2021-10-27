const router = require('express').Router();

const auth = require('./middlewares/auth');

const UserRouter = require('./views/UserRouter');

router.use('/api', UserRouter);

const BandosRouter = require('./views/BandosRouter');
router.use('/bandos',auth, BandosRouter);

const EstadoRouter = require('./views/EstadoRouter');
router.use('/estado',auth, EstadoRouter);

const GuerraRouter = require('./views/GuerraRouter');
router.use('/guerra',auth, GuerraRouter);

const IndependenciaRouter = require('./views/IndependenciaRouter');
router.use('/independencia',auth, IndependenciaRouter);

const PaisesRouter = require('./views/PaisesRouter');
router.use('/paises',auth, PaisesRouter);

const ParticipacionRouter = require('./views/ParticipacionRouter');
router.use('/participacion',auth, ParticipacionRouter);

module.exports = router;