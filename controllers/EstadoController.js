//Importo modelo de datos
const Estado = require('../models/EstadoModel');

const EstadoController = {};

EstadoController.getAll = (req, res) => {
    res.json(independencia.findAll());
};

EstadoController.getById = (req, res) => {
    const id = req.params.id;
    res.json(independencia.findById(id));
}

EstadoController.create = (req, res) => {
    const id = req.body.id;
    const id_pais = req.body.id_pais;
    const id_ind = req.body.id_ind;
    const estado = {id, id_pais, id_ind};
    res.json(independencia.post(estado));
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