import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {shallow} from 'enzyme';
import {useNavigation} from '@react-navigation/native';

import ForgotPasswordScreen from '../../screens/ForgotPasswordScreen';
import OTPScreen from '../../screens/OTPScreen';
import Header from '../../components/Header';
import TitleAndSubTitle from '../../components/TitleAndSubTitle';
import I18n from '../../languages/i18n';

beforeEach(jest.spyOn(console, 'error').mockImplementation(() => undefined));
afterEach(() => jest.clearAllMocks());

describe('ForgotPasswordScreen', () => {
  test('should render ForgotPassword screen correctly', () => {
    const wrapper = render(<ForgotPasswordScreen />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  test('should render Header', () => {
    const wrapper = shallow(<ForgotPasswordScreen />);
    wrapper.find(<Header />);
  });

  test('should render TitleAndSubTitle component', () => {
    const wrapper = shallow(<ForgotPasswordScreen />);
    wrapper.find(<TitleAndSubTitle />);
  });

  test('should render TitleAndSubTitle texts', () => {
    const wrapper = render(<ForgotPasswordScreen />);
    wrapper.getByText(I18n.t('ForgotPassword'));
    wrapper.getByText(I18n.t('ForgotPassSubTitle'));
  });

  test('should render label', () => {
    const wrapper = render(<ForgotPasswordScreen />);
    wrapper.getByText(I18n.t('Reset'));
  });

  test('should navigate to OTP Screen with email after entering valid email address.', async () => {
    const mockedParams = {
      route: {params: {email: email}},
    };
    render(<ForgotPasswordScreen />);

    const toClick = await screen.getByTestId('Reset');

    fireEvent(toClick, 'press');
    const email = await screen.getByTestId('emailID');

    const otpScreen = render(<OTPScreen {...mockedParams} />);

    expect(otpScreen).toBeTruthy();
  });
});
