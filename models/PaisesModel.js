let paises = require('../data/paises');

PaisesModel = {};

//CRUD
PaisesModel.findAll = () => paises;

//READ
PaisesModel.findById = (id) => paises.find(arr => arr.id == id);

//CREATE
PaisesModel.post = (newArr) => {
    paises.push(newArr);
    return newArr;
};

//UPDATE
PaisesModel.update = (newArr) => {
    let temp = paises.filter(arr => arr.id != newArr.id);
    temp.push(newArr);
    paises = temp;
    return newArr;
};

//DELETE
PaisesModel.delete = (id) => {
    let temp = paises.filter(arr => arr.id != id);
    paises = temp;
    return `Registro ${id} eliminado correctamente`
};

module.exports = PaisesModel;