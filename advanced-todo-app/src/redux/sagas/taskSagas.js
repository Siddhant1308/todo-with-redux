// src/redux/sagas/taskSagas.js

import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_CURRENT_DATE, setCurrentDate } from '../actions/taskActions';

function* fetchCurrentDateSaga() {
  try {
    const response = yield call(axios.get, 'http://worldclockapi.com/api/json/utc/now');
    const dateTime = response.data.currentDateTime;
    const date = dateTime.split('T')[0];
    yield put(setCurrentDate(date));
  } catch (error) {
    console.error('Error fetching date:', error);
  }
}

export function* watchFetchCurrentDate() {
  yield takeEvery(FETCH_CURRENT_DATE, fetchCurrentDateSaga);
}

export default function* rootSaga() {
  yield watchFetchCurrentDate();
}
