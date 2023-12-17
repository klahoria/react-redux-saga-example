// sagas/settingsSaga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from '../../utils/axios';

// sagas/settingsSaga.js
function* Finance(action) {
  try {
    // Fetch data from the server
    const response = yield call(axios.post, action.type, action.payload);

    // Dispatch success action with the fetched data
    yield put({ type: "GETFINANCINGSTATUS", payload: response.data });

    // Remove finance details after success
    yield call(removeFinanceDetails);
  } catch (error) {
    // Handle errors and log them
    console.error('Error fetching settings:', error);
  }
}


// Watcher Saga
function* watchFinance() {
  yield takeLatest("get_can_finance_status", Finance);
}

export default watchFinance;


function* ChooseFinanceType(action) {
  try {
    // const response = yield call(axios.post, action.type, action.payload);

    // Assuming the response structure has a 'data' property
    yield put({ type: "PLANTYPE", payload: action.payload });
  } catch (error) {
    // Handle error, for example dispatch an error action
    console.error('Error in ChooseFinanceType saga:', error);
  }
}

// Watcher Saga
function* watchPlanType() {
  yield takeLatest("choose_finance_type", ChooseFinanceType);
}

export { watchPlanType };



function* removeFinanceDetails() {
  try {
    // Dispatch success action with the fetched data
    yield put({ type: "REMOVE_FINANCE_DETAILS" });

    // Remove finance details after success
  } catch (error) {
    // Handle errors and log them
    console.error('Error fetching settings:', error);
  }
}