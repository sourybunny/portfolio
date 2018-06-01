var mongoose= require("mongoose");
var projectSchema = new mongoose.Schema({
    title: String,
    category: String,
    description:String,
    image: String,
    github: String,
    liveapp:String
    
})
module.exports=mongoose.model("Project",projectSchema);