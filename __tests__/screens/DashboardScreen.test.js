import React from 'react';
import {render} from '@testing-library/react-native';
import {shallow} from 'enzyme';

import DashboardScreen from '../../screens/DashboardScreen';
import Header from '../../components/Header';
import BottomTab from '../../components/BottomTab';
import CardSlider from '../../components/CardSlider';
import SmallCard from '../../components/SmallCard';

beforeEach(jest.spyOn(console, 'error').mockImplementation(() => undefined));
afterEach(() => jest.clearAllMocks());

describe('DashboardScreen', () => {
  test('should render Dashboard screen correctly', () => {
    const wrapper = render(<DashboardScreen />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  test('should render Header', () => {
    const wrapper = shallow(<DashboardScreen />);
    wrapper.find(<Header />);
  });
  test('should render BottomTab', () => {
    const wrapper = shallow(<DashboardScreen />);
    wrapper.find(<BottomTab />);
  });
  test('should render CardSlider', () => {
    const wrapper = shallow(<DashboardScreen />);
    wrapper.find(<CardSlider />);
  });
  test('should render SmallCard', () => {
    const wrapper = shallow(<DashboardScreen />);
    wrapper.find(<SmallCard />);
  });
});
