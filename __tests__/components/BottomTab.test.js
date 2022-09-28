import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {shallow} from 'enzyme';

import BottomTab from '../../components/BottomTab';

beforeEach(jest.spyOn(console, 'error').mockImplementation(() => undefined));
afterEach(() => jest.clearAllMocks());

describe('BottomTab', () => {
  test('should render BottomTab correctly', () => {
    const wrapper = render(<BottomTab />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
