//Importo modelo de datos
const db = require("../models");
const bandos = db.pais;
const Op = db.Sequelize.Op;

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
    const id_bando = req.body.id_bando;
    const pais = {id, nombre, id_bando};
    res.json(paises.post(pais));
};

PaisesController.update = (req, res) => {
    const id = req.params.id;
    const body = req.body;
    res.json(paises.update({id, ...body}));
};

PaisesController.delete = (req, res) => {
    const {id} = req.params;
    res.json(paises.delete(id));
};

module.exports = PaisesController;