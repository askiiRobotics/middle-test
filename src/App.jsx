/**
 * Test application for middle level
 *
 * @format
 * @flow
 */
"use strict";

import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import RootComponent from "middle/src/containers/RootComponent";
import { persistor, store } from 'middle/src/store/store';



const App = () => {
  // TODO: implement loading={<LoadingView />} for PersistGate
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RootComponent />
      </PersistGate>
    </Provider>
  );
};

export default App;
