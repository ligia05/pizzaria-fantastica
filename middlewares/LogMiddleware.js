module.exports = (req,res,next) => {
console.log("passei")
next();
console("voltando");
}