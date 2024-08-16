const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema({
    name: String,
    thumbnail: String,
    url: String,
    description: String,
    languages: [String]
})

const Project = mongoose.model("Project", projectSchema)

module.exports = Project