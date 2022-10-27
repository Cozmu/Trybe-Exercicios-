const GET_IMAGE = 'GET_IMAGE';
const REQUEST_IMAGE = 'REQUEST_IMAGE';
const FAILED_REQUEST = 'FAILED_REQUEST';

function requestDog() {
  return { type: REQUEST_IMAGE };
}

function getImage(data) {
  return { 
    type: GET_IMAGE, 
    payload: data.message,
  };
}

function failedRequest(error) {
  return { 
    type: FAILED_REQUEST, 
    payload: error,
  };
}

export function fetchDog() {
  return async (dispatch) => {
    dispatch(requestDog());
    try {
          const response = await fetch('https://dog.ceo/api/breeds/image/random');
          const result = await response.json();
          return dispatch(getImage(result));
      } catch (error) {
        return dispatch(failedRequest(error));
    }
  };
}