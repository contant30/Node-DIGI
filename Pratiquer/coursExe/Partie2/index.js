const express = require('express');
const app = express();
const { sequelize, connectDB } = require('./db/db');
const taskRouter = require('./router/taskRouter');
const listRouter = require('./router/listRouter');

app.use(express.json());

connectDB();

// page d'acc
app.get('/', (req, res) => {
    res.send('Hello World!!');
});

app.use('/taches', taskRouter);

app.use('/listes', listRouter);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});