// src/redux/store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import counterReducer from './Reducers/Reducer';
import GetSettings from './Reducers/SettingsReducer';
import Login from './Reducers/Login';
import Finance from './Reducers/FinanceReducers';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import rootSaga from './Saga/index';
import logger from 'redux-logger';
const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
};


const persistedReducer = persistReducer(persistConfig, combineReducers({ counterReducer, getSettings: GetSettings, Login, Finance}));

const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware)
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default store;
export { persistor, store }
