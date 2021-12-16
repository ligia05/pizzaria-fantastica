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
//const AdmController = require("../controllers/PizzasController");
const PizzasController = require ("../controllers/PizzasController") 
const AdmController = require('../controllers/AdmController');
const UsuarioLogado = require("../middlewares/UsuarioLogado");
router.get("/adm/pizzas/create",UsuarioLogado, PizzasController.create);
router.post("/adm/pizzas/create",upload.single('img'), PizzasController.store);
router.get('/adm/login',AdmController.showLogin);
router.post('/adm/login', AdmController.login)
router.get('/adm/logout',AdmController.logout)
module.exports = router
