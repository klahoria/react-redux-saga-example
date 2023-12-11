// sagas/settingsSaga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from '../../utils/axios';

function* Finance(action) {
  console.warn(action,"finance")
  
  try {
    const response = yield call(axios.post, action.type, axios.payload);

    // Assuming the response structure has a 'data' property
    yield put({type:"GETFINANCINGSTATUS",payload:response.data});
  } catch (error) {
    // Handle error, for example dispatch an error action
    console.error('Error fetching settings:', error);
  }
}

// Watcher Saga
function* watchFinance() {
  yield takeLatest("get_can_finance_status", Finance);
}

export default watchFinance;
