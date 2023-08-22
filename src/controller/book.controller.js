const { getAll, getById } = require('../service/book.service');

// Exercício 4: Crie um controller BooksController com o método getAll para retornar a lista de livros por meio do método getAll de BookService.
const listAll = async (req, res) => {
  const books = await getAll();

  res.status(200).json(books);
};

// Exercício 7: crie o método getById que recebe o id como parâmetro de rota e buscar o livro por meio do service. Se o livro não existir a resposta da requisição deve ter o status 404 e o json { "message": "Book not found" }.
const listById = async (req, res) => {
  const { id } = req.params;

  const book = await getById(id);

  if (!book) return res.status(404).json({ message: 'Book not found' });

  res.status(200).json(book);
};

module.exports = {
  listAll,
  listById,
};