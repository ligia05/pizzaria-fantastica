const { application } = require('express');
const pizzas = require('../database/Pizzas.json')
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
    }
}

module.exports = controller;
