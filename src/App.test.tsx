import 'react-native';
import React from 'react';

import { it } from '@jest/globals';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';

import App from './App';

// Note: import explicitly to use the types shiped with jest.

// Note: test renderer must be required after react-native.

import { store } from './store';

it('App renders correctly', () => {
  const component = (
    <Provider store={store}>
      <App />
    </Provider>
  );

  render(component);

  expect(component).toBeDefined();
});
