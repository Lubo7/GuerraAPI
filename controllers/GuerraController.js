//Importo modelo de datos
const guerras = require('../models/GuerraModel');

const GuerraController = {};

GuerraController.getAll = (req, res) => {
    res.json(guerras.findAll());
};

GuerraController.getById = (req, res) => {
    const id = req.params.id;
    res.json(guerras.findById(id));
}

GuerraController.create = (req, res) => {
    const id = req.body.id;
    const nombre = req.body.nombre;
    const fecha_inicio = req.body.fecha_inicio;
    const fecha_fin = req.body.fecha_fin;
    const guerra = {id, nombre, fecha_inicio, fecha_fin};
    res.json(guerras.post(guerra));
};

GuerraController.update = (req, res) => {
    const id = req.params.id;
    const body = req.body;
    res.json(guerras.update({id, ...body}));
};

GuerraController.delete = (req, res) => {
    const {id} = req.params;
    res.json(guerras.delete(id));
};

module.exports = GuerraController;