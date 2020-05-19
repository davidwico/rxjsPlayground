import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, map, catchError, takeUntil, delay } from 'rxjs/operators';
import { fetchRandomDogImageSuccess, fetchRandomDogImageFailure } from './actions';
import TYPES from './types';

const URL = 'https://dog.ceo/api/breeds/image/random';

// Broken URL for error handler testing
// const URL = 'https://dogxx.ceo/api/breeds/image/random';

// -- Basic fetch --
// const fetchRandomDogImageEpic = (action$) =>
//   action$.pipe(
//     ofType(TYPES.FETCH_RANDOM_DOG_IMAGE_REQUESTED),
//     mergeMap((action) => ajax.getJSON(URL).pipe(map((response) => fetchRandomDogImageSuccess(response)))),
//   );

// -- Fetch with error handling --
// const fetchRandomDogImageEpic = (action$) =>
//   action$.pipe(
//     ofType(TYPES.FETCH_RANDOM_DOG_IMAGE_REQUESTED),
//     mergeMap((action) =>
//       ajax.getJSON(URL).pipe(
//         map((response) => fetchRandomDogImageSuccess(response)),
//         catchError((error) => of(fetchRandomDogImageFailure(error))),
//       ),
//     ),
//   );

// -- Fetch with cancellation (additional delay operator for testing request cancellation) --
// const fetchRandomDogImageEpic = (action$) =>
//   action$.pipe(
//     ofType(TYPES.FETCH_RANDOM_DOG_IMAGE_REQUESTED),

//     mergeMap((action) =>
//       ajax.getJSON(URL).pipe(
//         delay(2000),
//         map((response) => fetchRandomDogImageSuccess(response)),
//         takeUntil(action$.pipe(ofType(TYPES.FETCH_RANDOM_DOG_IMAGE_REQUESTED_CANCELLED))),
//       ),
//     ),
//   );

// -- Full example with cancellation and error handling (additional delay operator for testing request cancellation) --
const fetchRandomDogImageEpic = (action$) =>
  action$.pipe(
    ofType(TYPES.FETCH_RANDOM_DOG_IMAGE_REQUESTED),
    mergeMap((action) =>
      ajax.getJSON(URL).pipe(
        delay(1000),
        map((response) => fetchRandomDogImageSuccess(response)),
        takeUntil(action$.pipe(ofType(TYPES.FETCH_RANDOM_DOG_IMAGE_REQUESTED_CANCELLED))),
        catchError((error) => of(fetchRandomDogImageFailure(error))),
      ),
    ),
  );

export default [fetchRandomDogImageEpic];
