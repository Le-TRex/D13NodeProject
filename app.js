const express = require("express");
const mongoose = require("mongoose");
const expressLayouts = require("express-ejs-layouts");
const { urlencoded } = require("express");
const Project = require("./models/project");

const app = express();

const dbUri = "mongodb://localhost:27017/projectManagement";
mongoose.connect(dbUri, {useUnifiedTopology: true, useNewUrlParser: true}) //promise = un objet
  .then(() => app.listen(4000)) //promise.then => quand la promise est résolue, faire xxx
  .catch(error => console.log(error)); //catch attrape les erreurs et permet de les traiter

app.use(express.static("public"));
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

/**
 * GET
 */
app.get("/", (request, response) => {
    response.redirect("projects");
});

app.get("/projects", (request, response) => {
  Project.find()
    .then(projects => response.render("projects", {projects: projects}))
    .catch(error => console.log(error));
});

/**
 * CREATE
 */
app.get("/projects/create", (request, response) => {
    response.render("projects/create");
})

app.post("/projects/create", (request, response) => {
  Project.create(request.body)
    .then(() => response.redirect("/projects"))
    .then(error => console.log(error));
})

/**
 * UPDATE
 */
app.get("/projects/update/:id", (request, response) => {
  const id = request.params.id;
  Project.findById(id)
    .then(project => response.render("projects/update", { project: project }))
    .catch(error => console.log(error));
})

app.post("/projects/update", (request, response) => {
  const project = request.body;
  Project.findByIdAndUpdate(project._id, { name: project.name, description: project.description })
    .then(() => response.redirect("/projects"))
    .catch(error => console.log(error));
})

/**
 * DELETE
 */

app.get("/projects/delete/:id", (request, response) => {
  const id = request.params.id;
  response.render("projects/delete", { _id: id }); //pas de / devant les chemins lors des renders
})

app.post("/projects/delete", (request, response) => {
  Project.findByIdAndDelete(request.body._id)
    .then(() => response.redirect("/projects"))
    .catch(error => console.log(error));
})