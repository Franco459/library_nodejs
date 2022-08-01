const { Router } = require("express");

module.exports = app =>{
    const AdminController = require("../controllers/admins.controller");
    var router = require("express").Router();


    router.get("/", AdminController.getAll);
    router.get("/:id", AdminController.getByID);
    router.post("/filter/", AdminController.getByFilter);
    router.post("/", AdminController.create);
    router.put("/:id", AdminController.update);
    router.delete("/:id", AdminController.delete); 
    
    app.use("/admins", router);

}