const express = require('express');
const cors = require('cors');

const routes = require('./app/routes');

const server = express();

server.use(cors());
server.use(express.json());

server.use(routes);

server.listen(3333, () => console.log('Server started at http://localhost:3333'));
