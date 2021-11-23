const express = require('express');
const PizzasController= require('../controllers/PizzasController')
const router = express.Router();
router.get('/pizzas', PizzasController.listar);
router.get('/pizzas/:id',PizzasController.getPizza);
module.exports = router;
