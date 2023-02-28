const { books } = require('../models');

const getAllBooks = async () => {
	const resultBooks = await books.findAll();
	return resultBooks;
};

const getBooksById = async (id) => {
	const resultBook = await books.findByPk(id);
	return resultBook;
}

const createBook = async (body) => {
  const result = await books.create(body); 
	return result;
};

const updateBook = async (id, body) => {
	const result = await books.update(body, { where: { id } });
	if (!result[0]) return null;
	return body;
};

const deleteBook = async (id) => {
  await Course.destroy({ where: { id } });

  return null;
};

module.exports = {
	updateBook,
	deleteBook,
  getAllBooks,
	createBook,
	getBooksById,
};