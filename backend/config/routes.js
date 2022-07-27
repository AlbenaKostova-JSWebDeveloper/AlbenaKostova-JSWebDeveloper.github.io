const projectRoutes = require('../routes/projectRoutes');

module.exports = (app) => {
    /* routes */
    app.use('/api/projects', projectRoutes);
};