const { Router } = require("express");

module.exports = app =>{
    const studentController = require("../controllers/students.controller");
    var router = require("express").Router();


    router.get("/", studentController.getAll);
    router.get("/:id", studentController.getByID);
    router.post("/filter/", studentController.getByFilter);
    router.post("/", studentController.create);
    router.put("/:id", studentController.update);
    router.delete("/:id", studentController.delete); 
    
    app.use("/students", router);

}