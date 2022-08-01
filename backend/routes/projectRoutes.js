const express = require('express');
const { isAdmin } = require('../middlewares/guards');

const { 
    getAllProjects,
    getSingleProject,
    createProject,
    updateProject,
    deleteProject
} = require('../controllers/projectController');

// an instance of the express router
const router = express.Router(); 


router.route('/')
    .get(getAllProjects) // GET all projects
    .post(isAdmin(), createProject); // POST a new project
    
router.route('/:id')
    .get(getSingleProject) // GET a single project
    .patch(isAdmin(), updateProject) // UPDATE a project
    .delete(isAdmin(), deleteProject) // DELETE a project
    
    

/* 
// GET all projects
router.get('/', getAllProjects);

// GET a single project
router.get('/:id', getSingleProject);

// POST a new project
router.post('/', isAdmin(), createProject);

// UPDATE a project
router.patch('/:id', isAdmin(), updateProject);

// DELETE a project
router.delete('/:id', isAdmin(), deleteProject);

*/


module.exports = router;