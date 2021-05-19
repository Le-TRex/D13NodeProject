const express = require("express");
const router = express.Router();
const Project = require("../models/project");
const projectController = require("../controllers/projectController");

/**
 * GET
 */
router.get("/", projectController.all);

/**
* CREATE
*/
router.get("/create", projectController.createGet);
router.post("/create", projectController.createPost);

/**
* UPDATE
*/
router.get("/update/:id", projectController.updateGet);
router.post("/update", projectController.updatePost);

/**
* DELETE
*/
router.get("/delete/:id", projectController.deleteGet);
router.post("/delete", projectController.deletePost);

module.exports = router;