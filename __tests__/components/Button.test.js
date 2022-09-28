import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {shallow} from 'enzyme';

import Button from '../../components/Button';

beforeEach(jest.spyOn(console, 'error').mockImplementation(() => undefined));
afterEach(() => jest.clearAllMocks());

describe('Button', () => {
  test('should render Button correctly', () => {
    const wrapper = render(<Button />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
