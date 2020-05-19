import TYPES from './types';

const fetchRandomDogImageRequested = () => ({ type: TYPES.FETCH_RANDOM_DOG_IMAGE_REQUESTED });

const fetchRandomDogImageCancelled = () => ({ type: TYPES.FETCH_RANDOM_DOG_IMAGE_REQUESTED_CANCELLED });

const fetchRandomDogImageSuccess = (response) => ({ type: TYPES.FETCH_RANDOM_DOG_IMAGE_SUCCESS, payload: response });

const fetchRandomDogImageFailure = (error) => ({ type: TYPES.FETCH_RANDOM_DOG_IMAGE_FAILURE, payload: error });

export {
  fetchRandomDogImageRequested,
  fetchRandomDogImageCancelled,
  fetchRandomDogImageSuccess,
  fetchRandomDogImageFailure,
};
