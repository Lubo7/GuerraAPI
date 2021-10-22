//Importo modelo de datos
const indipendencia = require('../models/IndipendenciasModel');

const IndependenciaController = {};

IndependenciaController.getAll = (req, res) => {
    res.json(guerras.findAll());
};

IndependenciaController.getById = (req, res) => {
    const id = req.params.id;
    res.json(guerras.findById(id));
}

IndependenciaController.create = (req, res) => {
    const id = req.body.id;
    const estado = req.body.estado;
    const fecha_inicio = req.body.fech_inicio;
    const fecha_fin = req.body.fecha_fin;
    const indipendencia = {id, estado, fecha_inicio, fecha_fin};
    res.json(guerras.post(indipendencia));
};

IndependenciaController.update = (req, res) => {
    const id = req.params.id;
    const body = req.body;
    res.json(GuerraModel.update({id, ...body}));
};

IndependenciaController.delete = (req, res) => {
    const {id} = req.params;
    res.json(IndipendenciaModel.delete(id));
};

module.exports = IndependenciaController;