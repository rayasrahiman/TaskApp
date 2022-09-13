import React from 'react';
import {render} from '@testing-library/react-native';
import {shallow} from 'enzyme';

import WelcomeScreen from '../../screens/WelcomeScreen';
import ViewPager from '../../components/ViewPager';
import TitleAndSubTitle from '../../components/TitleAndSubTitle';

describe('WelcomeScreen', () => {
  test('should render Welcome screen correctly', () => {
    const wrapper = render(<WelcomeScreen />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  test('should render ViewPager', () => {
    const wrapper = shallow(<WelcomeScreen />);
    wrapper.find(<ViewPager />);
  });

  test('should render TitleAndSubTitle component', () => {
    const wrapper = shallow(<WelcomeScreen />);
    wrapper.find(<TitleAndSubTitle />);
  });

  test('should render TitleAndSubTitle texts', () => {
    const wrapper = render(<WelcomeScreen />);
    wrapper.getByText("Take Control of your home's water.");
    wrapper.getByText('Stay smart connected and protected.');
    wrapper.getByText('Manage systems on the go.');
    wrapper.getByText('Get status information, home or away 24/7.');
    wrapper.getByText("We'll let you know what to do, when.");
    wrapper.getByText(
      'Receive alerts sent to your phone and if you choose your trusted pros.',
    );
    wrapper.getByText('Worry a lot less, enjoy a lot more.');
    wrapper.getByText('Peace of mins at your fingretips.');
  });
});
