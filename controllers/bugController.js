const Bug = require("../models/bug");

/** 
 * READ
 */
const allByProject = (request, response) => {
  const projectId = request.params.projectId;
  Bug.find({projectId})
    .then(bugs => response.render("bugs", { projectId, bugs }))
    .catch(error => console.log(error));
};

/**
 * CREATE
 */
const createGet = (request, response) => {
  const projectId = request.params.projectId;
  response.render("bugs/create", {projectId});
};

const createPost = (request, response) => {
  Bug.create(request.body)
    .then(() => response.redirect("/bugs/" + request.body.projectId))
    .then(error => console.log(error));
};

/**
 * UPDATE
 */
const updateGet = (request, response) => {
  const id = request.params.id;
  Bug.findById(id)
    .then(bug => response.render("bugs/update", { bug: bug }))
    .catch(error => console.log(error));
};

const updatePost = (request, response) => {
  const bug = request.body;
  Bug.findByIdAndUpdate(bug._id, {
    title: bug.title,
    reproSteps: bug.reproSteps,
    priority: bug.priority,
    projectId: bug.projectId
  }).then(() => response.redirect("/bugs/" + request.body.projectId))
    .catch(error => console.log(error));
}

/**
 * DELETE
 */
const deleteGet = (request, response) => {
  const id = request.params.id;
  response.render("bugs/delete", { _id: id });
};

const deletePost = (request, response) => {
  Bug.findByIdAndDelete(request.body._id)
    .then(() => response.redirect("/projects"))
    .catch(error => console.log(error));
};

module.exports = {
  allByProject,
  createGet,
  createPost,
  updateGet,
  updatePost,
  deleteGet,
  deletePost
}