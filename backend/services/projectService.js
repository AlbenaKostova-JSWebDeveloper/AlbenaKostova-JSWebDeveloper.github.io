const Project = require('../models/ProjectModel');

async function getAll () {
    return Project.find({}).sort({ createdAt: -1 });
}

async function getSorted (tag) {
    return Project.find({}).sort({ technologies: `${tag}` });
}

async function getById (id) {
    return Project.findById(id);
}

async function create (data) {
    return Project.create(data);
}

async function update (id) {
    return Project.findOneAndUpdate({ _id: id }, {
        ...req.body
    });
}

async function del (id) {
    return Project.findOneAndDelete({ _id: id });
}

module.exports = {
    getAll,
    getSorted,
    getById,
    create,
    update,
    del
};