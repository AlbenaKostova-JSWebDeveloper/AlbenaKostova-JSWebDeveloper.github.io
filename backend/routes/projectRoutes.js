const express = require('express');

const { 
    getAllProjects,
    getSingleProject,
    createProject,
    updateProject,
    deleteProject
} = require('../controllers/projectController');

// an instance of the express router
const router = express.Router(); 


// GET all projects
router.get('/', getAllProjects);

// GET a single project
router.get('/:id', getSingleProject);

// POST a new project
router.post('/', createProject);

// UPDATE a project
router.patch('/:id', updateProject);

// DELETE a project
router.delete('/:id', deleteProject);


module.exports = router;