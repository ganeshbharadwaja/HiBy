const { application } = require('express');

const router = require('express').Router();

const userController = require('../controllers/users.controller')

router.post('/register', userController.register);

router.post('/login', userController.login);

router.get('/', userController.information);

router.get('/:id', userController.informationById);

module.exports = router;