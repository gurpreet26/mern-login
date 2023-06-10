const express = require('express')
const { loginController, registerController, authController } = require('../controllers/userController')
const authMiddleware = require('../middlewares/authMiddleware')

const router = express.Router()

//routes

//login||post
router.post('/login',loginController )

//register
router.post('/register', registerController)

//auth
router.post('/getUserData', authMiddleware, authController )

module.exports =router;

