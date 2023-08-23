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

// Exercício 9: No service BooksService crie um método create que recebe um objeto com os atributos title, author, pageQuantity e salve um novo livro utilizando o model Book.
const createBook = async (dataBook) => {
const newBook = await book.create(dataBook);

return newBook;
};

// Exercício 12: No service BooksService crie um método update que recebe dois parâmetros: o id do livro a ser alterado e um objeto com os atributos title, author, pageQuantity e atualize o livro utilizando o model Book
const updateBook = async (id, dataBook) => {
  const [updatedBook] = await book.update(
dataBook,
{ where: { id } },
  );

  return updatedBook;
};

// Exercício 15: No service BooksService crie um método remove que recebe o id do livro a ser removido e remova o mesmo utilizando o model Book.
const deleteBook = async (id) => {
  const deletedBook = await book.destroy({ where: { id } });
  return deletedBook;
};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook,
};