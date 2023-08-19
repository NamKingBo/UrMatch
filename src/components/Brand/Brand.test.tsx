import React from 'react';

import { render, screen } from '@testing-library/react-native';
import { Provider } from 'react-redux';

import Brand from './Brand';
import { store } from '../../store';

test('render correctly', () => {
  const component = (
    <Provider store={store}>
      <Brand />
    </Provider>
  );

  render(component);

  const wrapper = screen.getByTestId('brand-img-wrapper');
  const img = screen.getByTestId('brand-img');

  expect(wrapper.props.style.height).toBe(200);
  expect(wrapper.props.style.width).toBe(200);
  expect(img.props.resizeMode).toBe('contain');
});
