import TYPES from './types';

const initialState = {
  images: [],
  isLoading: false,
  errorMsg: '',
};

const randomDogImagesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.FETCH_RANDOM_DOG_IMAGE_REQUESTED:
      return {
        ...state,
        isLoading: true,
        errorMsg: '',
      };
    case TYPES.FETCH_RANDOM_DOG_IMAGE_REQUESTED_CANCELLED:
      return {
        ...state,
        isLoading: false,
      };
    case TYPES.FETCH_RANDOM_DOG_IMAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        images: [...state.images, payload.message],
      };
    case TYPES.FETCH_RANDOM_DOG_IMAGE_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMsg: payload.message,
      };
    default:
      return state;
  }
};

export default { randomDogImagesReducer };
