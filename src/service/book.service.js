const { book } = require('../models');

// Exercício 3: Crie um service BooksService com o método getAll para retornar uma lista de livros por meio do model Book.
const getAll = async () => {
  const books = await book.findAll();

  return books;
};

module.exports = {
  getAll,
};