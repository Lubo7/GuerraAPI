let estado = require('../data/estado');

EstadoModel = {};

//CRUD
EstadoModel.findAll = () => estado;

//READ
EstadoModel.findById = (id) => estado.find(arr => arr.id == id);

//CREATE
EstadoModel.post = (newArr) => {
    estado.push(newArr);
    return newArr;
};

//UPDATE
EstadoModel.update = (newArr) => {
    let temp = estado.filter(arr => arr.id != newArr.id);
    temp.push(newArr);
    estado = temp;
    return newArr;
};

//DELETE
EstadoModel.delete = (id) => {
    let temp = estado.filter(arr => arr.id != id);
    estado = temp;
    return `Registro ${id} eliminado correctamente`
};

module.exports = EstadoModel;