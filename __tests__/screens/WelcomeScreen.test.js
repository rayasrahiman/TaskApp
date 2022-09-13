import React from 'react';
import {render} from '@testing-library/react-native';
import {shallow} from 'enzyme';

import WelcomeScreen from '../../screens/WelcomeScreen';
import ViewPager from '../../components/ViewPager';

describe('WelcomeScreen', () => {
  test('should render Welcome screen correctly', () => {
    const wrapper = render(<WelcomeScreen />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  test('should render ViewPager', () => {
    const wrapper = shallow(<WelcomeScreen />);
    wrapper.find(<ViewPager />);
  });
});
