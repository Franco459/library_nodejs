const AdminsDataWorker = require ("../dataworkers/admins.dataworker");


exports.getAll = async(req, res) => {
    let allAdmins = await AdminsDataWorker.getAll();
    res.status(200).send({
       response: allAdmins 
    });
}

exports.getByID = async(req, res) => {
    const id = req.params.id;
    let adminByID = await AdminsDataWorker.getByID(id);
    res.status(200).send({
        response: adminByID
    });
}

exports.getByFilter = async(req, res) => {
    const filter = req.body;
    let allAdminsByFilter = await AdminsDataWorker.getByFilter(filter);
    res.status(200).send({
        response: allAdminsByFilter
    });
} 

exports.create = async (req, res) => {
    const data = req.body; 
    let newAdmin = await AdminsDataWorker.create(data);
    res.status(200).send({
        response: newAdmin
    });
}

exports.delete = async(req, res) => {
    const id = req.params.id;
    let delAdmin = await AdminsDataWorker.delete(id);
    res.status(200).send({
        response: delAdmin
    });
}

exports.update = async (req, res) => {
    const data = req.body;
    const id = req.params.id;
    let updtAdmin = await AdminsDataWorker.update(data, id);
    res.status(200).send({
        response: updtAdmin
    });
}