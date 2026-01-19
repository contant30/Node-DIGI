const express = require('express');
const app = express();
const taskRouter = require('./router/taskRouter');

app.use(express.json());

// page d'acc
app.get('/', (req, res) => {
    res.send('Hello World!!');
});

app.use('/taches', taskRouter);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});