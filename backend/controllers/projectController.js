const Project = require('../models/ProjectModel');
const mongoose = require('mongoose');

// GET all projects
const getAllProjects = async (req, res) => {
    const projects = await Project.find({}).sort({ createdAt: -1 });
    
    res.status(200).json(projects);
};

// GET a single project
const getSingleProject = async (req, res) => {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such project' });
    }
    
    const project = await Project.findById(id);
    
    if (!project) {
        return res.status(404).json({ error: 'No such project'});
    }
    
    res.status(200).json(project);
};

// POST new project / CREATE
const createProject = async (req, res) => {
    const { title, description, technologies, link, image } = req.body;
    
    let emptyFields = [];
    
    if (!title) {
        emptyFields.push('title');
    }
    if (!description) {
        emptyFields.push('description');
    }
    if (!technologies) {
        emptyFields.push('technologies');
    }
    if (!link) {
        emptyFields.push('link');
    }
    if (!image) {
        emptyFields.push('image');
    }
    
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
    }
    
    // add doc to db
    try {
        const project = await Project.create({ title, description, technologies, link, image });
        res.status(200).json(project);
    } catch (error) {
        res.status(400).json({ error: error.message});
        console.log(error);
    }
};

// UPDATE a project
const updateProject = async (req, res) => {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'No such project' });
    }
    
    const project = await Project.findOneAndUpdate({ _id: id }, {
        ...req.body
    });
    
    if (!project) {
        return res.status(400).json({ error: 'No such project'});
    }
    
    res.status(200).json(project);
};

// DELETE a project
const deleteProject = async (req, res) => {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such project' });
    }
    
    const project = await Project.findOneAndDelete({ _id: id });
    
    if (!project) {
        return res.status(400).json({ error: 'No such project'});
    }
    
    res.status(200).json(project);
};

module.exports = {
    getAllProjects,
    getSingleProject,
    createProject,
    updateProject,
    deleteProject
};