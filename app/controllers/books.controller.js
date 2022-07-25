const BooksDataWorker = require ("../dataworkers/books.dataworker");


//obtener todos los libros
exports.getAll = async(req, res) => {
    let allBooks = await BooksDataWorker.getAll();
    res.status(200).send({
       response: allBooks 
    });
}
//obtener libros filtrando solo por ID
exports.getByID = async(req, res) => {
    const id = req.params.id;
    let bookByID = await BooksDataWorker.getByID(id);
    res.status(200).send({
        response: bookByID
    });
}
//obtener libros por cualquier otro filtro
exports.getByFilter = async(req, res) => {
    const filter = req.body;
    let allBooksByFilter = await BooksDataWorker.getByFilter(filter);
    res.status(200).send({
        response: allBooksByFilter
    });
} 
//alta de libro
exports.create = async (req, res) => {
    const data = req.body; 
    let newBook = await BooksDataWorker.create(data);
    res.status(200).send({
        response: newBook
    });
}
//delete de libro
exports.delete = async(req, res) => {
    const id = req.params.id;
    let delBook = await BooksDataWorker.delete(id);
    res.status(200).send({
        response: delBook
    });
}
//update de libro
exports.update = async (req, res) => {
    const data = req.body;
    const id = req.params.id;
    let updatedStudent = await BooksDataWorker.update(data, id);
    res.status(200).send({
        response: updatedStudent
    });
}