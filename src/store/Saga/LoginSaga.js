// sagas/settingsSaga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from '../../utils/axios';

function* login(action) {
    try {
        const response = yield call(axios.post, action.type, action.payload || {});

        // Assuming the response structure has a 'data' property
        if (Number(response.data.is_error) === 0) {
            yield put({ type: "LOGIN", payload: response.data });
            console.log(response)
            yield put({type: 'get_settings',payload: {access_token: response.data.profile[0].access_token}});
        }
        else {
            // yield put({type: "GETSETTINGS"})
        }
    } catch (error) {
        // Handle error, for example dispatch an error action
        console.error('Error fetching settings:', error);
    }
}

// Watcher Saga
function* watchLogin() {
    yield takeLatest("email_login", login);
}

export default watchLogin;
