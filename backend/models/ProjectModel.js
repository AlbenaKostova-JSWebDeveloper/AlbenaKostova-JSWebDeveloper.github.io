const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    technologies: { type: Array, required: true },
    details: { type: String, required: true },
    repo: { type: String, required: true },
    link: { type: String, required: true },
    image: { type: String, required: true }
}, { timestamps: true }); // createdAt

module.exports = mongoose.model('Project', projectSchema);