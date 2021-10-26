const express = require('express');
const router = express.Router();
const users = require('./users.routes');
const posts = require('./posts.routes');
const comments = require('./comments.routes');

router.use('/users', users);
router.use('/posts', posts);
router.use('/comments', comments);

module.exports = router;