//designacion/modularizacion de funcionalidades de CRUD
const StudentsDataWorker = require ("../dataworkers/students.dataworker");

//obtener todos los estudiantes
exports.getAll = async(req, res) => {
    let allStudents = await StudentsDataWorker.getAll();
    res.status(200).send({
       response: allStudents 
    });
}
//obtener estudiantes filtrando solo por ID
exports.getByID = async(req, res) => {
    const id = req.params.id;
    let allStudentsbyID = await StudentsDataWorker.getByID(id);
    res.status(200).send({
        response: allStudentsbyID
    });
}
//obtener estudiantes por cualquier otro filtro
exports.getByFilter = async(req, res) => {
    const filter = req.body;
    let allStudentsbyFilter = await StudentsDataWorker.getByFilter(filter);
    res.status(200).send({
        response: allStudentsbyFilter
    });
} 
//alta de estudiante
exports.create = async (req, res) => {
    const data = req.body; 
    let newStudent = await StudentsDataWorker.create(data);
    res.status(200).send({
        response: newStudent
    });
}
//delete de estudiante
exports.delete = async(req, res) => {
    const id = req.params.id;
    let deleteStudent = await StudentsDataWorker.delete(id);
    res.status(200).send({
        response: deleteStudent
    });
}
//update de estudiante
exports.update = async (req, res) => {
    const data = req.body;
    const id = req.params.id;
    let updatedStudent = await StudentsDataWorker.update(data, id);
    res.status(200).send({
        response: updatedStudent
    });
}