const express = require('express'); 
const usersController = require('./controller');
const router = express.Router();

//Création d'une route 
router.post('/users', usersController.createUser);
router.put('/users/:_id', usersController.updateUser);
router.delete('/users/:_id', usersController.deleteUser);
router.get('/users', usersController.listAllUsers);

router.post('/login', usersController.login);

module.exports = router;