let independencia = require('../data/independencia');

IndependenciaModel = {};

//CRUD
IndependenciaModel.findAll = () => independencia;

//READ
IndependenciaModel.findById = (id) => independencia.find(arr => arr.id == id);

//CREATE
IndependenciaModel.post = (newArr) => {
    independencia.push(newArr);
    return newArr;
}

//UPDATE
IndependenciaModel.update = (newArr) => {
    let temp = independencia.filter(arr => arr.id != newArr.id);
    temp.push(newArr);
    independencia = temp;
    return newArr;
}

//DELETE
IndependenciaModel.delete = (id) => {
    let temp = independencia.filter(arr => arr.id != id);
    independencia = temp;
    return `Registro ${id} eliminado correctamente`
}

module.exports = IndependenciaModel;