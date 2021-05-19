const Project = require("../models/project");

/**
 * GET
 */
const all = (request, response) => {
  Project.find()
    .then(projects => response.render("projects", {projects: projects}))
    .catch(error => console.log(error));
}

/**
 * POST
 */
const createGet = (request, response) => {
  response.render("projects/create");
}

const createPost = (request, response) => {
  Project.create(request.body)
    .then(() => response.redirect("/projects"))
    .then(error => console.log(error));
  }

/**
 * UPDATE
 */
const updateGet = (request, response) => {
  const id = request.params.id;
  Project.findById(id)
    .then(project => response.render("projects/update", { project: project }))
    .catch(error => console.log(error));
  }

const updatePost = (request, response) => {
  const project = request.body;
  Project.findByIdAndUpdate(project._id, { name: project.name, description: project.description })
    .then(() => response.redirect("/projects"))
    .catch(error => console.log(error));
  }

/**
 * DELETE
 */
const deleteGet = (request, response) => {
  const id = request.params.id;
  response.render("projects/delete", { _id: id }); //pas de / devant les chemins lors des renders
  }

const deletePost = (request, response) => {
  Project.findByIdAndDelete(request.body._id)
    .then(() => response.redirect("/projects"))
    .catch(error => console.log(error));
  }


module.exports = {
  all,
  createGet,
  createPost,
  updateGet,
  updatePost,
  deleteGet,
  deletePost
};