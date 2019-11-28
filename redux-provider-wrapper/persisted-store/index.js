import { createStore, combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import { reducers } from '../../src/store';


const rootReducer = combineReducers(reducers);
const persistConfig = {
  key: 'cartReducer',
  whitelist: 'cartReducer',
  storage,
  version: 1
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const initialState = {};
const store = createStore(persistedReducer, initialState);
const persistor = persistStore(store);

export {
  store,
  persistor,
};