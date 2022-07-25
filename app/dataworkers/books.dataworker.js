
const dbindx = require("../models/index");
const booksRepository = dbindx.models.books;

exports.getAll = async () => {
    let allBooks = await booksRepository.findAll();
    return allBooks;
}

exports.getByID = async(idBook) =>{
    let bookByID = await booksRepository.findOne({
        where: {
            id: idBook
        }
    });
    return bookByID;
}

exports.getByFilter = async(filters) =>{
    let booksByFilter = await booksRepository.getByFilter({
        where: {
            ...filters
        }
    });
    return booksByFilter;
}

exports.create = async(data) => {

    let newBook = await booksRepository.create(data);
    return newBook;
    
}

exports.update = async(data, idBook) => {
    let updtBook = await booksRepository.update(data, {
        where: {
            id: idBook
        }
    });
    return updtBook;
}

exports.delete = async (idBook) => {
    let rmvBook = await booksRepository.destroy({
        where:{
            id : idBook
        }
    });
    return rmvBook;
}