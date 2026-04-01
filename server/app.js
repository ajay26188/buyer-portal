const express = require('express');
const apartmentsRouter = require('./controllers/apartments.js');
const userRouter = require('./controllers/user.js');

const app = express();

app.use(express.json());

//health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
});

app.use('/api/apartments', apartmentsRouter);
app.use('/api/users', userRouter);

module.exports = app;