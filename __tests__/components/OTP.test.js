import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {shallow} from 'enzyme';

import OTP from '../../components/OTP';

beforeEach(jest.spyOn(console, 'error').mockImplementation(() => undefined));
afterEach(() => jest.clearAllMocks());

describe('OTP', () => {
  test('should render OTP correctly', () => {
    const wrapper = render(<OTP />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
