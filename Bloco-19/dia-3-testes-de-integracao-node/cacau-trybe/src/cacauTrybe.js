const fs = require('fs').promises;
const { join } = require('path');

const writeCacauTrybeFile = async (content) => {
    const path = '/files/cacauTrybeFile.json';
    try {
        const completePath = join(__dirname, path);
        await fs.writeFile(completePath, JSON.stringify(content));
    } catch (e) {
        console.error('Erro ao salvar o arquivo', e.message);
        return null;
    }
}

const updateChocolate = async (id, update) => {
    const cacauTrybe = await readCacauTrybeFile();
    const chocolateToUpdate = cacauTrybe.chocolates.find(
        (chocolate) => chocolate.id === id,
    );

    if (chocolateToUpdate) {
        cacauTrybe.chocolates = cacauTrybe.chocolates.map((chocolate) => {
            if (chocolate.id === id) return { ...chocolate, ...update };
            return chocolate;
        });

        await writeCacauTrybeFile(cacauTrybe);
        return { ...chocolateToUpdate, ...update };
    }

    return false;
};
  

const readCacauTrybeFile = async () => {
  const path = '/files/cacauTrybeFile.json';
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    const response = JSON.parse(contentFile);
    return response;
  } catch (error) {
    return null;
  }
};

const findChocolateByName = async (query) => {
    const cacauTrybe = await readCacauTrybeFile();
    return cacauTrybe.chocolates
        .filter(({ name }) => name.toLowerCase().includes(query.toLowerCase()));
};

const getAllChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates;
};

const getChocolateById = async (id) => {
    const cacauTrybe = await readCacauTrybeFile();
    return cacauTrybe.chocolates
      .find((chocolate) => chocolate.id === id);
};

const getChocolatesByBrand = async (brandId) => {
    const cacauTrybe = await readCacauTrybeFile();
    return cacauTrybe.chocolates
    .filter((chocolate) => chocolate.brandId === brandId);
};

module.exports = {
    getAllChocolates,
    getChocolateById,
    getChocolatesByBrand,
    findChocolateByName,
    updateChocolate,
};