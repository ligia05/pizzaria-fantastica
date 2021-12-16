

module.exports = {
    showLogin:(req,res) => {
       return res.render('login');
    },

 login: (req,res) => {

 const {email,senha} = req.body;
const usuarios = require("../database/Usuarios.json");
      const usuario = usuarios.find(
          user => (user.email == email && user.senha == senha)
        );

        if(usuario == undefined){
         return res.send("senha ou email inválidos");
        }
        req.session.usuario= usuario;
        return res.redirect('/adm/pizzas/create');

},   
logout: (req,res) => {
    req.session.destroy();
    res.redirect("/adm/login");
}
}