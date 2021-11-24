const { Router } = require('express');

const UserController = require('../controllers/UserController');
const AuthenticateUserController = require('../controllers/AuthenticateUserController');

const usersRoutes = Router();

usersRoutes.post('/', UserController.store);
usersRoutes.post('/auth', AuthenticateUserController.store);

module.exports = usersRoutes;
