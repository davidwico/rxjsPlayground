import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { randomDogImagesReducers, randomDogImagesEpics } from './randomDogImages';

export const rootEpic = combineEpics(...randomDogImagesEpics);

export const rootReducer = combineReducers({ ...randomDogImagesReducers });
