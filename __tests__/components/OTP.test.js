import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {shallow} from 'enzyme';

import OTP from '../../components/OTP';

describe('OTP', () => {
  test('should render OTP correctly', () => {
    const wrapper = render(<OTP />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
