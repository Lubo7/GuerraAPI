//Importo modelo de datos
const Estado = require('../models/EstadoModel');

const EstadoController = {};

EstadoController.getAll = (req, res) => {
    res.json(indipendencia.findAll());
};

EstadoController.getById = (req, res) => {
    const id = req.params.id;
    res.json(indipendencia.findById(id));
}

EstadoController.create = (req, res) => {
    const id = req.body.id;
    const fecha_inicio = req.body.fecha_inicio;
    const fecha_fin = req.body.fecha_fin;
    const estado = {id, fecha_inicio, fecha_fin};
    res.json(indipendencia.post(estado));
};

EstadoController.update = (req, res) => {
    const id = req.params.id;
    const body = req.body;
    res.json(IndependenciaModel.update({id, ...body}));
};

EstadoController.delete = (req, res) => {
    const {id} = req.params;
    res.json(EstadoModel.delete(id));
};

module.exports = EstadoController;