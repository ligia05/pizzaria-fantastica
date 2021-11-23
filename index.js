const express = require('express');
const PizzasRouter= require('./routers/PizzasRouter')
const app = express()
app.set("view engine", "ejs");
app.set("views","./views");
app.use('/', PizzasRouter);

app.listen(3000,()=> {console.log("rodando")})
