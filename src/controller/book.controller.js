const { getAll, getById, createBook, updateBook,
   deleteBook, getByAuthor } = require('../service/book.service');

// Exercício 4: Crie um controller BooksController com o método getAll para retornar a lista de livros por meio do método getAll de BookService.
const listAll = async (req, res) => {
const { author } = req.query;

if (author) {
  const booksByAuthor = await getByAuthor(author);

  return res.status(200).json(booksByAuthor);
}
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
// BÔNUS
// const getBooksByAuthor = async (req, res) => {
//   try {
//     const { author } = req.params;

//     const booksByAuthor = await getByAuthor(author);

//     if (!booksByAuthor) return res.status(404).json({ message: 'author not found' });

//     return res.status(200).json(booksByAuthor);
//   } catch (error) {
//     res.status(500).json({ message: 'deu ruim' });
//   }
// };

// Exercício 10: No controller BooksController crie o método create sendo um middleware que recebe os atributos title, author, pageQuantity do body da requisição e salve os dados por meio do service.

const createAbook = async (req, res) => {
  try {
    const dataBook = req.body;

    const newBook = await createBook(dataBook);

    return res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: 'algo deu ruim' });
  }
};

// Exercício 13: No controller BooksController crie o método update sendo um middleware que recebe o id como parâmetro de rota e os atributos title, author, pageQuantity do body da requisição e salve os dados por meio do service. A requisição deve retornar o status 200 e a mensagem ‘Book updated!’. Se o livro não for encontrado retornar a mensagem ‘Book not found!’.
const updateABook = async (req, res) => {
try {
  const dataBook = req.body;
  const { id } = req.params;

  await updateBook(id, dataBook);

  return res.status(200).json({ message: 'Book updated!' });
} catch (error) {
  res.status(404).json({ message: 'Book not found!' });
}
};

// Exercício 16: No controller BooksController crie o método remove sendo um middleware que recebe o id como parâmetro de rota e remova o livro por meio do service.
const removeBook = async (req, res) => {
  try {
    const { id } = req.params;
    const removedBook = await deleteBook(id);

    if (!removedBook) return res.status(404).json({ message: 'not found' });

    return res.status(200).json({ message: 'book removed' });
  } catch (error) {
    res.status(500).json({ message: 'algo deu ruim' });
  }
};

module.exports = {
  listAll,
  listById,
  createAbook,
  updateABook,
  removeBook,
};