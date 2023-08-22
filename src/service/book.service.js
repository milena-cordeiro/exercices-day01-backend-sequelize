const { book } = require('../models');

// Exercício 3: Crie um service BooksService com o método getAll para retornar uma lista de livros por meio do model Book.
const getAll = async () => {
  const books = await book.findAll();

  return books;
};

// Exercício 6: No service BooksService crie um método getById que recebe um id como parâmetro e use o model Book para buscar esse livro. Retorne o objeto encontrado pelo model.
const getById = async (id) => {
const bookById = await book.findByPk(id);

return bookById;
};

module.exports = {
  getAll,
  getById,
};