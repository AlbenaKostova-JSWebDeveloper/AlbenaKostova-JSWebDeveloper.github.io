const authRoutes = require('../routes/authRoutes');
const projectRoutes = require('../routes/projectRoutes');

module.exports = (app) => {
    /* routes */
    
    app.use('/api/auth', authRoutes);
    app.use('/api/projects', projectRoutes);
};