//Importo modelo de datos
const db = require("../models");
const bandos = db.bando;
const Op = db.Sequelize.Op;

const BandosController = {};

BandosController.getAll = (req, res) => {
    res.json(bandos.findAll());
};

BandosController.getById = (req, res) => {
    const id = req.params.id;
    res.json(bandos.findById(id));
}

BandosController.create = (req, res) => {
    const id = req.body.id;
    const nombre = req.body.nombre;
    const bando = {id, nombre};
    res.json(bandos.post(bando));
};

BandosController.update = (req, res) => {
    const id = req.params.id;
    const body = req.body;
    res.json(bandos.update({id, ...body}));
};

BandosController.delete = (req, res) => {
    const {id} = req.params;
    res.json(bandos.delete(id));
};

module.exports = BandosController;