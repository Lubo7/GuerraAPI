//Importo modelo de datos
const db = require("../models");
const bandos = db.participacion;
const Op = db.Sequelize.Op;

const ParticipacionController = {};

ParticipacionController.getAll = (req, res) => {
    res.json(participacion.findAll());
};

ParticipacionController.getById = (req, res) => {
    const id = req.params.id;
    res.json(participacion.findById(id));
}

ParticipacionController.create = (req, res) => {
    const id = req.body.id;
    const id_guerra = req.body.id_guerra;
    const id_bando = req.body.id_bando;
    const participacion = {id, id_guerra, id_bando};
    res.json(participacion.post([participacion]));
};

ParticipacionController.update = (req, res) => {
    const id = req.params.id;
    const body = req.body;
    res.json(participacion.update({id, ...body}));
};

ParticipacionController.delete = (req, res) => {
    const {id} = req.params;
    res.json(participacion.delete(id));
};

module.exports = ParticipacionController;