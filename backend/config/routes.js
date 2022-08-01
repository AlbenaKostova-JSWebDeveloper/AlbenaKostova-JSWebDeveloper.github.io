const authRoutes = require('../routes/authRoutes');
const projectRoutes = require('../routes/projectRoutes');

module.exports = (app) => {
    /* routes */
    app.get('/', (req, res) => {
        res.send('REST Service operational.'); // -v 
    }); 
    
    app.use('/api/auth', authRoutes);
    app.use('/api/projects', projectRoutes);
};