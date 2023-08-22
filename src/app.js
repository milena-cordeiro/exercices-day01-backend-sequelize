const express = require('express');

const BooksController = require('./controller/book.controller');

const app = express();

app.use(express.json());

// Exercício 5: Vincule a rota GET /books para acessar seu controller.
app.get('/books', BooksController.listAll);

app.get('/books/:id', BooksController.listById);

app.post('/books', BooksController.createAbook);

app.put('/books/:id', BooksController.updateABook);

module.exports = app;
