const { Router } = require('express');

const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const MovieController = require('../controllers/MovieController');

const moviesRoutes = Router();

moviesRoutes.use(ensureAuthenticated);

moviesRoutes.post('/', MovieController.store);
moviesRoutes.get('/', MovieController.index);
moviesRoutes.get('/:id', MovieController.show);
moviesRoutes.delete('/:id', MovieController.delete);

module.exports = moviesRoutes;
