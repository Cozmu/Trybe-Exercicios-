const express = require('express');
const activitiesRouter = require('./routers/activitiesRouter');
const signupRouter = require('./routers/signupRouter');

const app = express();
app.use(express.json());

app.use('/activities', activitiesRouter);
app.use('/signup', signupRouter);

module.exports = app;