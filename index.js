const express = require('express');
const PizzasRouter= require('./routers/PizzasRouter')
const AdmRouter = require ("./routers/AdmRouters") 
const app = express()
app.set("view engine", "ejs");
app.set("views","./views");
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(__dirname + "/public"));
app.use('/', PizzasRouter);
app.use("/", AdmRouter);


app.listen(3000,()=> {console.log("rodando")})
