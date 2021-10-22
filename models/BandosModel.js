let bandos = require('../data/bandos');

BandosModel = {};

//CRUD
BandosModel.findAll = () => bandos;

//READ
BandosModel.findById = (id) => bandos.find(arr => arr.id == id);

//CREATE
BandosModel.post = (newArr) => {
    bandos.push(newArr);
    return newArr;
}

//UPDATE
BandosModel.update = (newArr) => {
    let temp = bandos.filter(arr => arr.id != newArr.id);
    temp.push(newArr);
    bandos = temp;
    return newArr;
}

//DELETE
BandosModel.delete = (id) => {
    let temp = bandos.filter(arr => arr.id != id);
    bandos = temp;
    return `Registro ${id} eliminado correctamente`
}

module.exports = BandosModel;