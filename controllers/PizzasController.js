const { application } = require('express');
const pizzas = require('../database/Pizzas.json')
const controller = { 
    listar: (req, res)=>{
    res.send(pizzas)
    },
getPizza: (req,res) => {
    //res.send("tentando carregar UMA pizza!")
   const idPizza = req.params.id;
   const pizza = pizzas.find(p => p.id == idPizza);
   res.render("pizza",{pizza});
}
}


module.exports = controller;