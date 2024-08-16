const express = require("express");
const router = express.Router();
const { getProject, getAllProjects, createProject, updateProject, deleteProject } = require("../controllers/project.controllers")

router.get("/", getAllProjects);
router.post("/", createProject);
router.patch("/:id", getProject, updateProject)
router.delete("/:id", deleteProject)

module.exports = router;