import getCharacter from '../../services/gameOfThronesAPI';

export const REQUEST_CHARACTER = 'REQUEST_CHARACTER';
export const RESPONSE_CHARACTER_SUCCESS = 'RESPONSE_CHARACTER_SUCCESS';
export const RESPONSE_CHARACTER_ERROR = 'RESPONSE_CHARACTER_ERROR';

export const requestCharacter = () => ({
  type: REQUEST_CHARACTER,
});

export const responseCharacterSuccess = (character) => ({
  type: RESPONSE_CHARACTER_SUCCESS,
  payload: character,
});

export const responseCharacterError = (error) => ({
  type: RESPONSE_CHARACTER_ERROR,
  error,
});

export const fetchCharacter = (name) => async (dispatch) => {
  dispatch(requestCharacter());
  try {
    const response = await getCharacter(name);
    dispatch(responseCharacterSuccess(response));
  } catch (error) {
    dispatch(responseCharacterError(error));
  }
};
