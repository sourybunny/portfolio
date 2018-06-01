var mongoose= require("mongoose");
mongoose.set("debug",true);

var url= process.env.DATABASEURL || "mongodb://localhost/portfolio_db"
mongoose.connect(url);
mongoose.Promise=Promise;

module.exports.Project=require("./project");