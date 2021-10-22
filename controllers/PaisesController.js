//Importo modelo de datos
const paises = require('../models/PaisesModel');

const PaisesController = {};

PaisesController.getAll = (req, res) => {
    res.json(paises.findAll());
};

PaisesController.getById = (req, res) => {
    const id = req.params.id;
    res.json(paises.findById(id));
}

PaisesController.create = (req, res) => {
    const id = req.body.id;
    const nombre = req.body.nombre;
    const id_bando = req.body.bando;
    const pais = {id, nombre, id_bando};
    res.json(paises.post(pais));
};

PaisesController.update = (req, res) => {
    const id = req.params.id;
    const body = req.body;
    res.json(PaisesModel.update({id, ...body}));
};

PaisesController.delete = (req, res) => {
    const {id} = req.params;
    res.json(PaisesModel.delete(id));
};

module.exports = PaisesController;