var express= require("express");
var app= express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
var projectRoutes=require('./routes/projects');

app.use(express.static(__dirname+"/public"));
app.use(express.static(__dirname+"/views"));

app.get("/",function(req,res){
    res.sendFile("index.html");
});

app.use("/api/projects", projectRoutes);
app.listen(process.env.PORT,function(){
    console.log("listening on port "+ process.env.PORT);
});
