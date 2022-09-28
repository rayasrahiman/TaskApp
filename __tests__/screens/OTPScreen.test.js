import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {shallow} from 'enzyme';
import {useNavigation} from '@react-navigation/native';
import {renderWithRedux} from '../../helpers/testHelpers/renderWithRedux';

import OTPScreen from '../../screens/OTPScreen';
import SignInScreen from '../../screens/SignInScreen';
import Header from '../../components/Header';
import TitleAndSubTitle from '../../components/TitleAndSubTitle';
import I18n from '../../languages/i18n';

beforeEach(jest.spyOn(console, 'error').mockImplementation(() => undefined));
afterEach(() => jest.clearAllMocks());

describe('OTPScreen', () => {
  test('should render OTP screen correctly', () => {
    const wrapper = renderWithRedux(<OTPScreen />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  test('should render Header', () => {
    const wrapper = renderWithRedux(<OTPScreen />);
    wrapper.getByTestId('header');
  });

  test('should render TitleAndSubTitle component', () => {
    const wrapper = renderWithRedux(<OTPScreen />);
    wrapper.getByTestId('titleSubTitle');
  });

  test('should render TitleAndSubTitle texts', () => {
    const wrapper = renderWithRedux(<OTPScreen />);
    wrapper.getByText(I18n.t('OTPTitle'));
    wrapper.getByText(I18n.t('OTPSubtitle'));
  });

  test('should render label', () => {
    const wrapper = renderWithRedux(<OTPScreen />);
    wrapper.getByText(I18n.t('Submit'));
    wrapper.getByText(I18n.t('re_send'));
  });

  test('should navigate to SignIn Screen with email after entering valid email address.', async () => {
    const mockedParams = {
      route: {params: {email: 'test@test.com'}},
    };
    renderWithRedux(<OTPScreen />);

    const toClick = await screen.getByTestId('submit');

    fireEvent(toClick, 'press');

    const signInScreen = renderWithRedux(<SignInScreen {...mockedParams} />);

    expect(signInScreen).toBeTruthy();
  });
});
