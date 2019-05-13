/**
 * An entry point for redux store configuration
 *
 * @format
 * @flow
 */
"use strict";

import { AsyncStorage } from "react-native";
import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk"; // can be replaced with redux-saga
import { persistStore, persistReducer } from 'redux-persist'
// can be used with Crashlytics
import rootReducer from 'middle/src/reducers/rootReducer';


const debugging =
  __DEV__ && !!(window && window.navigator && window.navigator.userAgent);

const logger = createLogger({
  predicate: () => debugging,
  collapsed: true,
  duration: true,
  level: "log"
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const createAppStore = applyMiddleware(thunk, logger)(createStore);


const store = createAppStore(persistedReducer)
const persistor = persistStore(store)
if (debugging) {
  window.store = store;
}
export {
    store,
    persistor,
};