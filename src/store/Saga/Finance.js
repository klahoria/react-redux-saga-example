// sagas/settingsSaga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from '../../utils/axios';

function* getSettings(action) {
  try {
    const response = yield call(axios.post, action.type, axios.payload);

    // Assuming the response structure has a 'data' property
    yield put({type:"GETSETTINGS",payload:response.data});
  } catch (error) {
    // Handle error, for example dispatch an error action
    console.error('Error fetching settings:', error);
  }
}

// Watcher Saga
function* watchGetSettings() {
  yield takeLatest("get_can_finance_status", getSettings);
}

export default watchGetSettings;
