import {
  REQUEST_CHARACTER,
  RESPONSE_CHARACTER_ERROR,
  RESPONSE_CHARACTER_SUCCESS,
} from '../actions';

const initialState = {
  isLoading: false,
  features: {
    name: '',
    gender: '',
    culture: '',
    born: '',
  },
  error: '',
};

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
  case REQUEST_CHARACTER:
    return {
      ...state,
      isLoading: true,
    };
  case RESPONSE_CHARACTER_SUCCESS:
    return {
      ...state,
      isLoading: false,
      features: {
        name: action.payload[0].name,
        gender: action.payload[0].gender,
        culture: action.payload[0].culture,
        born: action.payload[0].born,
      },
    };
  case RESPONSE_CHARACTER_ERROR:
    return {
      ...state,
      error: action.error,
    };
  default:
    return state;
  }
};

export default characterReducer;
