import React from 'react';
import {render} from '@testing-library/react-native';
import {shallow} from 'enzyme';

import DashboardScreen from '../../screens/DashboardScreen';
import Header from '../../components/Header';

describe('DashboardScreen', () => {
  test('should render Dashboard screen correctly', () => {
    const wrapper = render(<DashboardScreen />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  test('should render Header', () => {
    const wrapper = shallow(<DashboardScreen />);
    wrapper.find(<Header />);
  });
});
