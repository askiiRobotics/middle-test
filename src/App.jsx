/**
 * Test application for middle level
 *
 * @format
 * @flow
 */
'use strict';

import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import RootComponent from 'middle/src/containers/RootComponent';
import { persistor, store } from 'middle/src/store/store';
import { ThemeContext, getTheme } from 'react-native-material-ui';

// TODO: use PT Root UI font from the design (I don't have this font on my PC)

const uiTheme = {
  palette: {
    // TODO: set all default colors here
    // imported from constans or configurable special module
  },
  fontFamily: 'System',
};


const App = () => {
  // TODO: implement loading={<LoadingView />} for PersistGate
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeContext.Provider value={getTheme(uiTheme)}>
          <RootComponent />
        </ThemeContext.Provider>
      </PersistGate>
    </Provider>
  );
};

export default App;
