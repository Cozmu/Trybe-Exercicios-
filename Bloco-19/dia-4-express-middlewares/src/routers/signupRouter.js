const express = require('express');
const validatesignup = require('../middlewares/validatesignup');
const generateToken = require('../utils/generateToken');

const signupRouter = express.Router();

signupRouter.post('/', validatesignup, (req, res) => {
    const token = generateToken();
    res.status(200).json({ token });
});

module.exports = signupRouter; 
