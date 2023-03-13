const express = require('express');
const validateCreatedAt = require('../middlewares/validateCreatedAt');
const validateDescription = require('../middlewares/validateDescription');
const validateDifficulty = require('../middlewares/validateDifficulty');
const validateName = require('../middlewares/validateName');
const validadePrice = require('../middlewares/validatePrice');
const validateRating = require('../middlewares/validateRating');
// const validateToken = require('../middlewares/validateToken');

const activitiesRouter = express.Router();

activitiesRouter.post('/',
    validateName, 
    validadePrice, 
    validateDescription,
    validateRating, 
    validateCreatedAt,
    validateDifficulty,
    // validateToken,
(req, res) => res.status(201).json({ message: 'Atividade cadastrada com sucesso!' }));

module.exports = activitiesRouter;