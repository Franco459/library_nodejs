const { Router } = require("express");

module.exports = app =>{
    const BooksController = require("../controllers/books.controller");
    var router = require("express").Router();


    router.get("/", BooksController.getAll);
    router.get("/:id", BooksController.getByID);
    router.post("/filter/", BooksController.getByFilter);
    router.post("/", BooksController.create);
    router.put("/:id", BooksController.update);
    router.delete("/:id", BooksController.delete); 
    
    app.use("/books", router);

}