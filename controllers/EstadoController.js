//Importo modelo de datos
const estado = require('../models/EstadoModel');

const EstadoController = {};

EstadoController.getAll = (req, res) => {
    res.json(estado.findAll());
};

EstadoController.getById = (req, res) => {
    const id = req.params.id;
    res.json(estado.findById(id));
}

EstadoController.create = (req, res) => {
    const id = req.body.id;
    const id_pais = req.body.id_pais;
    const id_ind = req.body.id_ind;
    const estado = {id, id_pais, id_ind};
    res.json(estado.post(estado));
};

EstadoController.update = (req, res) => {
    const id = req.params.id;
    const body = req.body;
    res.json(estado.update({id, ...body}));
};

EstadoController.delete = (req, res) => {
    const {id} = req.params;
    res.json(estado.delete(id));
};

module.exports = EstadoController;