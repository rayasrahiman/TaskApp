import React from 'react';
import 'react-native';
import {render} from '@testing-library/react-native';

import App from '../App';

beforeEach(jest.spyOn(console, 'error').mockImplementation(() => undefined));
afterEach(() => jest.clearAllMocks());

describe('App', () => {
  test('should render correctly', () => {
    const wrapper = render(<App />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
