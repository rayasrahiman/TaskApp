import React from 'react';
import 'react-native';
import {render} from '@testing-library/react-native';

import App from '../App';
import {renderWithRedux} from '../helpers/testHelpers/renderWithRedux';

beforeEach(jest.spyOn(console, 'error').mockImplementation(() => undefined));
afterEach(() => jest.clearAllMocks());

describe('App', () => {
  test('should render correctly', () => {
    const wrapper = renderWithRedux(<App />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
