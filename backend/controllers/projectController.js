const mongoose = require('mongoose');
const { parseError } = require('../utils/parsers');
const { getAll, getSorted, getById, create, update, del } = require('../services/projectService');


// GET all projects
const getAllProjects = async (req, res) => {
    const projects = await getAll();
    console.log(projects);
    res.status(200).json(projects);
};

// Sorted by 
const getSortedProjects = async (req, res) => {
    const sorted = await getSorted();
    
    res.status(200).json(projects);
};



// GET a single project
const getSingleProject = async (req, res) => {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such project' });
    }
    
    const project = await getById(id);
    
    if (!project) {
        return res.status(404).json({ error: 'No such project'});
    }
    
    res.status(200).json(project);
};

// POST new project / CREATE
const createProject = async (req, res) => {
    
    const { title, description, technologies, details, repo, link, image } = req.body;
    
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
    if (!details) {
        emptyFields.push('details');
    }
    if (!repo) {
        emptyFields.push('repo');
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
    
    const data = {  title, description, technologies, details, repo, link, image };
    
    try {
        // add doc to db
        const project = await create(data);
        res.status(201).json(project);
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
    
    const project = await update(id);
    
    if (!project) {
        return res.status(400).json({ error: 'No such project'});
    }
    
    res.status(202).json(project);
};

// DELETE a project
const deleteProject = async (req, res) => {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such project' });
    }
    
    const project = await del(id);
    
    if (!project) {
        return res.status(400).json({ error: 'No such project'});
    }
    
    res.status(204).json(project);
};

module.exports = {
    getAllProjects,
    getSortedProjects,
    getSingleProject,
    createProject,
    updateProject,
    deleteProject
};