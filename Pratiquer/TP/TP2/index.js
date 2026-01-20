const express = require('express');
const booksRouter = require('./router/booksRouter');
const { connectDB } = require('./db/db');
const app = express();
const port = 3000;

app.use(express.json());

connectDB();

app.get('/', (req, res) => {
    res.send('Hello World! vous êtes sur la page de la bibliothèque');
});

app.use('/books', booksRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
