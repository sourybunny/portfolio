var express= require("express");
var router= express.Router();

var db=require("../models");
var helpers=require("../helpers/projects.js");

router.route("/")
.get(helpers.getProjects)
.post(helpers.createProject);

router.route("/:projectid")
.get(helpers.getProject)
.put(helpers.updateProject)
.delete(helpers.deleteProject);

module.exports= router;