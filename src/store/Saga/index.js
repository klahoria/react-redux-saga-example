import { all } from 'redux-saga/effects';
import watchGetSettings from './SettingsSaga';
import counterSaga from './Saga';
import watchLogin from './LoginSaga';
// import watchFinanceStatus from './Finance';

function* rootSaga() {
  yield all([
    watchGetSettings(),
    counterSaga(),
    watchLogin(),
    // watchFinanceStatus(),
    // Add more watcher sagas here if needed
  ]);
}

export default rootSaga;
