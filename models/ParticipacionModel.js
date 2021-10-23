let participacion = require('../data/participacion');

ParticipacionModel = {};

//CRUD
ParticipacionModel.findAll = () => participacion;

//READ
ParticipacionModel.findById = (id) => participacion.find(arr => arr.id == id);

//CREATE
ParticipacionModel.post = (newArr) => {
    participacion.push(newArr);
    return newArr;
};

//UPDATE
ParticipacionModel.update = (newArr) => {
    let temp = participacion.filter(arr => arr.id != newArr.id);
    temp.push(newArr);
    participacion = temp;
    return newArr;
};

//DELETE
ParticipacionModel.delete = (id) => {
    let temp = participacion.filter(arr => arr.id != id);
    participacion = temp;
    return `Registro ${id} eliminado correctamente`
};

module.exports = ParticipacionModel;