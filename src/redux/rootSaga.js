// src/sagas/index.js
import { all, fork } from 'redux-saga/effects';
import { watchFetchData } from './Data/saga';

export default function* rootSaga() {
  yield all([
    fork(watchFetchData),
    // Add other sagas here
  ]);
}