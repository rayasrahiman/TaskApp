import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {shallow} from 'enzyme';

import Loader from '../../components/Loader';

describe('Loader', () => {
  test('should render Loader correctly', () => {
    const wrapper = render(<Loader />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
