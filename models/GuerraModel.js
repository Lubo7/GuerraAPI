let guerra = require('../data/guerra');

guerraModel = {};

//CRUD
guerraModel.findAll = () => guerra;

//READ
guerraModel.findById = (id) => guerra.find(arr => arr.id == id);

//CREATE
guerraModel.post = (newArr) => {
    guerra.push(newArr);
    return newArr;
}

//UPDATE
guerraModel.update = (newArr) => {
    let temp = guerra.filter(arr => arr.id != newArr.id);
    temp.push(newArr);
    guerra = temp;
    return newArr;
}

//DELETE
guerraModel.delete = (id) => {
    let temp = guerra.filter(arr => arr.id != id);
    guerra = temp;
    return `Registro ${id} eliminado correctamente`
}

module.exports = GuerraModel;