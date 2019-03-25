import './config/reactotron';

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { loja, persistor } from './store';
import Routes from './routes';

const App = () => {
  return (
    <Provider store={loja}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default App;
