const { Router } = require('express');

const usersRoutes = require('./usersRoutes');
const moviesRoutes = require('./moviesRoutes');

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/movies', moviesRoutes);

module.exports = routes;
