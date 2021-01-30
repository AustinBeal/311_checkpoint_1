const express = require('express')
const router = express.Router()

const usersController = require('../controllers/usersC')

router.get('/', usersController.getAllUsers)
router.get('/:id', usersController.getUsersById)

router.post('/', usersController.postNewUser)

router.put('/:id', usersController.updateUserById)

router.delete('/:id', usersController.deleteUserById)

module.exports = router