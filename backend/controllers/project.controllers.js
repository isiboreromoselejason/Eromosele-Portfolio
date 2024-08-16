const Project = require("../models/project.model");


//middleware to get project by id
const getProject = async (req, res, next) => {
  let project;
  try {
    project = await Project.findById(req.params.id);
    if (project === null) {
      return res.status(404).json({ message: "cannot find project" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.project = project;
  next();
}


//controller to get all projects
const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message }); //server error code
  }
};


//controller to create project
const createProject = async (req, res) => {
  const project = new Project({
    name: req.body.name,
    thumbnail: req.body.thumbnail,
    url: req.body.url,
    description: req.body.description,
  });

  try {
    const newProject = await project.save();
    res.status(201).json(newProject); // successfully created project
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const updateProject = async (req, res) => {
  const updates = req.body;

  // Loop through each field in the updates and set them in res.contact
  for (const key in updates) {
    if (updates.hasOwnProperty(key)) {
      res.project[key] = updates[key];
    }
  }

  try {
    const updatedProject = await res.project.save();
    res.json(updatedProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}


//controller to delete project
const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Cannot find project" });
    }
    res.json({ message: "Deleted project" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getProject,
  getAllProjects,
  createProject,
  updateProject,
  deleteProject
};
