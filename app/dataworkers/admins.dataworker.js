
const dbindx = require("../models/index");
const adminsRepository = dbindx.models.admins;

exports.getAll = async () => {
    let allAdmins = await adminsRepository.findAll();
    return allAdmins;
}

exports.getByID = async(idAdmin) =>{
    let adminByID = await adminsRepository.findOne({
        where: {
            id: idAdmin
        }
    });
    return adminByID;
}

exports.getByFilter = async(filters) =>{
    let adminsByFilter = await adminsRepository.getByFilter({
        where: {
            ...filters
        }
    });
    return adminsByFilter;
}

exports.create = async(data) => {

    let newAdmin = await adminsRepository.create(data);
    return newAdmin;
    
}

exports.update = async(data, idAdmin) => {
    let updtAdmin = await adminsRepository.update(data, {
        where: {
            id: idAdmin
        }
    });
    return updtAdmin;
}

exports.delete = async (idAdmin) => {
    let rmvAdmin = await adminsRepository.destroy({
        where:{
            id : idAdmin
        }
    });
    return rmvAdmin;
}