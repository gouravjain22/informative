import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from './const';


const fetchDataFromAPI = async () => {
  const response = await fetch('https://informativedb.onrender.com/informative');
  if (!response.ok) throw new Error('Error fetching data');
  return await response.json();
};

function* fetchDataSaga() {
  try {
    const data = yield call(fetchDataFromAPI); // `call` is used to invoke an API
    yield put({ type: FETCH_DATA_SUCCESS, payload: data }); // Dispatch success action
  } catch (error) {
    yield put({ type: FETCH_DATA_FAILURE, payload: error.message }); // Dispatch failure action
  }
}

// Watcher Saga: watches for actions dispatched to the store
export function* watchFetchData() {
  yield takeEvery(FETCH_DATA_REQUEST, fetchDataSaga); // Listen for FETCH_DATA_REQUEST
}
