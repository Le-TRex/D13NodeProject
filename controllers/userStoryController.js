const UserStory = require("../models/userStory");

/** 
 * READ
 */
const allByProject = (request, repsonse) => {
  const projectId = request.params.projectId;
  repsonse.render("userStories", { projectId });
}

/**
 * CREATE
 */
const createGet = (request, response) => {
  const projectId = request.params.projectId;
  response.render("userStories/create", {projectId});
};

const createPost = (request, response) => {
  UserStory.create(request.body)
    .then(() => response.redirect("/userStories"))
    .then(error => console.log(error));
};

/**
 * UPDATE
 */
const updateGet = (request, response) => {
  const id = request.params.id;
  UserStory.findById(id)
    .then(userStory => response.render("userStories/update", {userStory: userStory}))
    .catch(error => console.log(error));
};

const updatePost = (request, response) => {
  const userStory = request.body;
  Project.findByIdAndUpdate(userStory._id, {
    title: userStory.title,
    description: userStory.description,
    acceptanceCriteria: userStory.acceptanceCriteria,
    priority: userStory.priority,
    projectId: userStory.projectId
  }).then(() => response.redirect("/userStories"))
    .catch(error => console.log(error));
}

/**
 * DELETE
 */
const deleteGet = (request, response) => {
  const id = request.params.id;
  response.rendre("userStories/delete", { _id: id });
};

const deletePost = (request, response) => {
  UserStory.findByIdAndDelete(request.body._id)
    .then(() => response.redirect("/userStories"))
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