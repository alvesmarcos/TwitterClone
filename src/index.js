import React from 'react';
import { Provider } from 'react-redux';

import '~/config/ReactotronConfig';

import store from '~/store';
import Routes from '~/routes';

console.disableYellowBox = true;

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
