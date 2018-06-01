var db= require("../models");

//get all projects
exports.getProjects = function(req,res){
    db.Project.find()
    .then(function(projects){
        res.json(projects);
        console.log("get all "+ projects)
    })
    .catch(function(err){
        res.send(err);
    });
}

//create project
exports.createProject = function(req,res){
    console.log(req.body);
    db.Project.create(req.body)
    .then(function(newProject){
        
        res.status(201).JSON(newProject);
    })
    .catch(function(err){
        res.send(err);
    });
}

//get project
exports.getProject = function(req,res){
    db.Project.findById(req.params.projectid)
    .then(function(project){
        console.log("get one project " + project);
        res.json(project);
    })
    .catch(function(err){
        res.send(err);
    });
}

//update project
exports.updateProject = function(req,res){
    db.Project.findOneAndUpdate({_id: req.params.projectid}, req.body, {new:true})
    .then(function(updatedProject){
        res.json(updatedProject);
    })
    .catch(function(err){
        res.send(err);
    });
}

//delete Project

exports.deleteProject = function(req,res){
    db.Project.remove({_id: req.params.projectid})
    .then(function(){
        res.send({message: "deleted project"});
    })
    .catch(function(err){
        res.send(err);
    });
}

module.exports= exports;