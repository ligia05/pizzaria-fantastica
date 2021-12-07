const express =require("express");
const multer = require ("multer");
const storage= multer.diskStorage(
    {
        destination: (req,file,cb)=>{cb(null,__dirname +'/../public/img')},
        filename: (req,file,cb)=> {cb(null,Date.now() +'-' + file.originalname)}

    }
);
const upload= multer({storage})
const router = express.Router();
const AdmController = require("../controllers/PizzasController");
const PizzasController = require ("../controllers/PizzasController") 
router.get("/adm/pizzas/create", PizzasController.create);
router.post("/adm/pizzas/create",upload.single('img'), PizzasController.store);

module.exports = router
