import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {shallow} from 'enzyme';

import WeatherTab from '../../components/WeatherTab';

beforeEach(jest.spyOn(console, 'error').mockImplementation(() => undefined));
afterEach(() => jest.clearAllMocks());

describe('WeatherTab', () => {
  test('should render WeatherTab correctly', () => {
    const wrapper = render(<WeatherTab />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
