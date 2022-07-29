const userRoutes = require('../routes/userRoutes');
const projectRoutes = require('../routes/projectRoutes');

module.exports = (app) => {
    /* routes */
    app.use('/api/user', userRoutes);
    app.use('/api/projects', projectRoutes);
};