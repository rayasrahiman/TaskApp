import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {shallow} from 'enzyme';
import {useNavigation} from '@react-navigation/native';

import OTPScreen from '../../screens/OTPScreen';
import SignInScreen from '../../screens/SignInScreen';
import Header from '../../components/Header';
import TitleAndSubTitle from '../../components/TitleAndSubTitle';
import I18n from '../../languages/i18n';

describe('OTPScreen', () => {
  test('should render OTP screen correctly', () => {
    const wrapper = render(<OTPScreen />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  test('should render Header', () => {
    const wrapper = shallow(<OTPScreen />);
    wrapper.find(<Header />);
  });

  test('should render TitleAndSubTitle component', () => {
    const wrapper = shallow(<OTPScreen />);
    wrapper.find(<TitleAndSubTitle />);
  });

  test('should render TitleAndSubTitle texts', () => {
    const wrapper = render(<OTPScreen />);
    wrapper.getByText(I18n.t('OTPTitle'));
    wrapper.getByText(I18n.t('OTPSubtitle'));
  });

  test('should render label', () => {
    const wrapper = render(<OTPScreen />);
    wrapper.getByText(I18n.t('Submit'));
    wrapper.getByText(I18n.t('re_send'));
  });

  test('should navigate to SignIn Screen with email after entering valid email address.', async () => {
    const mockedParams = {
      route: {params: {email: 'test@test.com'}},
    };
    render(<OTPScreen />);

    const toClick = await screen.getByTestId('submit');

    fireEvent(toClick, 'press');

    const signInScreen = render(<SignInScreen {...mockedParams} />);

    expect(signInScreen).toBeTruthy();
  });
});
