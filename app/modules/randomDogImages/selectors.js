const reducerPath = 'randomDogImagesReducer';

const randomDogImagesSelector = (state) => state[reducerPath].images;

const isLoadingSelector = (state) => state[reducerPath].isLoading;

const errorMsgSelector = (state) => state[reducerPath].errorMsg;

export { randomDogImagesSelector, isLoadingSelector, errorMsgSelector };
