import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import HomeScreen from './screens';

const App = () => {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
};

export default App;
