const { application } = require('express');
const pizzas = require('../database/Pizzas.json')
const fs= require ('fs')
const controller = {
    listar: (req, res) => {
        return res.render('index', { pizzas, busca: "" });

        //res.send(pizzas)
    },
    getPizza: (req, res) => {
        //res.send("tentando carregar UMA pizza!")
        const idPizza = req.params.id;
        const pizza = pizzas.find(p => p.id == idPizza);
        res.render("pizza", { pizza });
    },
    busca: (req, res) => {
        const stringPizzas = req.query.q.trim();

        const pizzasFiltradas = pizzas.filter(
            p => p.nome.toUpperCase().includes(stringPizzas.toUpperCase())
        );



        res.render('index', { pizzas: pizzasFiltradas, busca: stringPizzas });
    },
    create: (req,res) =>{

  res.render("crud-pizzas/create")
    },
store: (req,res)=>{
    const nome= req.body.nome;
    const ingredientes = req.body.ingredientes.split(",").map(a => a.trim());
    const preco = req.body.preco;
    const pizza = {nome, ingredientes,preco, img:'/img/'+ req.file.filename}
  pizza.id = pizzas[pizzas.length-1].id + 1;
  
  pizzas.push(pizza);
  
  fs.writeFileSync(__dirname +'/../database/Pizzas.json',
   JSON.stringify(pizzas,null,4)),{flag:'w'}

  
  
    res.redirect('/');

}
}
module.exports = controller;
