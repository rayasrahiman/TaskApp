import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {shallow} from 'enzyme';

import Header from '../../components/Header';

beforeEach(jest.spyOn(console, 'error').mockImplementation(() => undefined));
afterEach(() => jest.clearAllMocks());

describe('Header', () => {
  test('should render Header correctly', () => {
    const wrapper = render(<Header />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
