import React from 'react';
import 'react-native';
import {render} from '@testing-library/react-native';

import App from '../App';

// jest.mock('../languages/i18n');

describe('App', () => {
  test('should render correctly', () => {
    const wrapper = render(<App />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
