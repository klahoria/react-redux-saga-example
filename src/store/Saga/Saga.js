// src/sagas/sagas.js
import { put, takeEvery } from 'redux-saga/effects';

function* incrementAsync() {
  yield new Promise((resolve) => setTimeout(resolve, 1000));
  yield put({ type: 'INCREMENT' });
}

function* watchIncrement() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

export default function* counterSaga() {
  yield watchIncrement();
}
