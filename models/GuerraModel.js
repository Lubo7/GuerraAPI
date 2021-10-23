let guerra = require('../data/guerra');

GuerraModel = {};

//CRUD
GuerraModel.findAll = () => guerra;

//READ
GuerraModel.findById = (id) => guerra.find(arr => arr.id == id);

//CREATE
GuerraModel.post = (newArr) => {
    guerra.push(newArr);
    return newArr;
};

//UPDATE
GuerraModel.update = (newArr) => {
    let temp = guerra.filter(arr => arr.id != newArr.id);
    temp.push(newArr);
    guerra = temp;
    return newArr;
};

//DELETE
GuerraModel.delete = (id) => {
    let temp = guerra.filter(arr => arr.id != id);
    guerra = temp;
    return `Registro ${id} eliminado correctamente`
};

module.exports = GuerraModel;