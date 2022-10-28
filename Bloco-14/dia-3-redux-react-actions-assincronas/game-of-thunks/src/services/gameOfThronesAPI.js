const getCharacter = async (name) => {
  const endPoint = `https://anapioficeandfire.com/api/characters?name=${name}`;
  const response = await fetch(endPoint);
  const data = await response.json();
  return data;
};

export default getCharacter;
