import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {shallow} from 'enzyme';

import Input from '../../components/Input';
import Loader from '../../components/Loader';

beforeEach(jest.spyOn(console, 'error').mockImplementation(() => undefined));
afterEach(() => jest.clearAllMocks());

describe('Input', () => {
  test('should render Input correctly', () => {
    const wrapper = render(<Input />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  test('should render Loader', () => {
    const wrapper = shallow(<Input />);
    wrapper.find(<Loader />);
  });
});
