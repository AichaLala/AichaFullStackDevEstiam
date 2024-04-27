const express = require('express');
const tasksController = require('./controller');

const router = express.Router();

router.post('/tasks', tasksController.createTask);
router.post('/tasks', tasksController.createTask);
//router.put('/users/:_id', usersController.updateUser);
//router.delete('/users/:_id', usersController.deleteUser);
//router.get('/users', usersController.listAllUsers);


module.exports = router;