import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import AppContainer from './containers/AppContainer';

const store = createStore(rootReducer)

render(
    <Provider store={store}>
      <AppContainer />
    </Provider>,
    document.getElementById('root')
  )

