const { booksService } = require('../services');

const listAllBooks = async (req, res) => {
    const resultBooks = await booksService.getAllBooks();
    return res.status(200).json(resultBooks);
};

const listBookById = async (req, res) => {
    const { id } = req.params;
    const resultBook = await booksService.getBooksById(id);
    if (!resultBook) return res.status(404).json({ message: 'Book not found' });
    return res.status(200).json(resultBook);
};

const createBook = async (req, res) => {
    const result = await booksService.createBook(req.body);
    return res.status(201).json(result);
};

const updateBook = async (req, res) => {
    const { id } = req.params;
    const result = await booksService.updateBook(id, req.body);
    if (!result) return res.status(404).json({ message: 'Book not found' });
    return res.status(200).json({ message: 'Book updated!' });
}

const deleteBook = async (req, res) => {
    const { id } = req.params;
    const result = await booksService.deleteBook(id);
    if (result !== null) return res.status(500).json({ message: 'Algo deu errado' });
    return res.status(204).send();
};

module.exports = {
    deleteBook,
    listAllBooks,
    updateBook,
    createBook,
    listBookById,
};