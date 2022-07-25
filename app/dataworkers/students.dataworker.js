
const dbindx = require("../models/index");
const StudentRepository = dbindx.models.students;

exports.getAll = async() =>{
    let allStudents = await StudentRepository.findAll();
    return allStudents;
}

exports.getByID = async(id) =>{
    let allStudentsbyID = await StudentRepository.findOne({
        where:{
            student_ID: id
        }
    });
    return allStudentsbyID;
}

exports.getByFilter = async(filter) => {
    let allStudentsbyFilter = await StudentRepository.getByFilter({
        where:{
            ...filter
        }
    });
    return allStudentsbyFilter;
}

exports.create = async(data) => {

    let newStudent = await StudentRepository.create(data);
    return newStudent;
    
}

exports.update = async(data, id) => {
    let updatedStudent = await StudentRepository.update(data, {
        where: {
            student_ID: id
        }
    });
    return updatedStudent;
}

exports.delete = async (id) => {
    let rmvStudent = await StudentRepository.delete({
        where:{
            student_ID : id
        }
    });
    return rmvStudent;
}
