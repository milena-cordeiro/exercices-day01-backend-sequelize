const { getAll } = require('../service/book.service');

// Exercício 4: Crie um controller BooksController com o método getAll para retornar a lista de livros por meio do método getAll de BookService.
const listAll = async (req, res) => {
  const books = await getAll();

  res.status(200).json(books);
};

module.exports = {
  listAll,
};