const { Book } = require('../models');

const getAllBooks = async () => {
	const resultBooks = await Book.findAll();
	return resultBooks;
};

const getBooksById = async (id) => {
	const resultBook = await Book.findByPk(id);
	return resultBook;
}

const createBook = async (body) => {
  const result = await Book.create(body); 
	return result;
};

const updateBook = async (id, body) => {
	const result = await Book.update(body, { where: { id } });
	if (!result[0]) return null;
	return body;
};

const deleteBook = async (id) => {
  await Book.destroy({ where: { id } });

  return null;
};

module.exports = {
	updateBook,
	deleteBook,
  getAllBooks,
	createBook,
	getBooksById,
};