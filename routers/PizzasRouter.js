const express = require('express');
const PizzasController= require('../controllers/PizzasController')
const router = express.Router();
router.get('/pizzas', PizzasController.listar);
router.get('/pizzas/:id',PizzasController.getPizza);
router.get('/', PizzasController.listar);
router.get('/busca',PizzasController.busca)
    
module.exports = router;
