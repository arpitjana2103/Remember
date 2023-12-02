const express = require('express');
const {getPosts} = require('../controllers/posts');

const postRoute = express.Router();

postRoute.get('/', getPosts);

module.exports = {postRoute};
