//Importo modelo de datos
const db = require("../models");
const bandos = db.independencia;
const Op = db.Sequelize.Op;

const IndependenciaController = {};

IndependenciaController.getAll = (req, res) => {
    res.json(independencia.findAll());
};

IndependenciaController.getById = (req, res) => {
    const id = req.params.id;
    res.json(independencia.findById(id));
}

IndependenciaController.create = (req, res) => {
    const id = req.body.id;
    const estado = req.body.estado;
    const fecha_inicio = req.body.fech_inicio;
    const fecha_fin = req.body.fecha_fin;
    const indipendencia = {id, estado, fecha_inicio, fecha_fin};
    res.json(independencia.post(Independencia));
};

IndependenciaController.update = (req, res) => {
    const id = req.params.id;
    const body = req.body;
    res.json(independencia.update({id, ...body}));
};

IndependenciaController.delete = (req, res) => {
    const {id} = req.params;
    res.json(independencia.delete(id));
};

module.exports = IndependenciaController;