const express = require("express");
const router = express.Router();
const userStoryController = require("../controllers/userStoryController");

/**
 * GET
 */
router.get("/:projectId", userStoryController.allByProject);

/**
 * CREATE
 */
router.get("/create/:projectId", userStoryController.createGet);

router.post("/create", userStoryController.createPost);

/**
 * UPDATE
 */
router.get("/update/:id", userStoryController.updateGet);
router.post("/update", userStoryController.updatePost);

/**
 * DELETE
 */
router.get("/delete/:id", userStoryController.deleteGet);
router.post("/delete", userStoryController.deletePost);

module.exports = router;