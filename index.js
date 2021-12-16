const express = require('express');
const session = require("express-session");
const PizzasRouter= require('./routers/PizzasRouter');
const AdmRouter = require ("./routers/AdmRouters"); 
const LogMiddleware = require('./middlewares/LogMiddleware');
//const LogMiddleware=
const app = express();

app.set("view engine", "ejs");
app.set("views","./views");
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(session({secret:"segredo"}));

app.use(LogMiddleware)
app.use(express.static(__dirname + "/public"));
app.use('/', PizzasRouter);
app.use("/", AdmRouter);


app.listen(3000,()=> {console.log("rodando")})
