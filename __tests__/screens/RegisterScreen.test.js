import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {shallow} from 'enzyme';
import {useNavigation} from '@react-navigation/native';
import {renderWithRedux} from '../../helpers/testHelpers/renderWithRedux';

import RegisterScreen from '../../screens/RegisterScreen';
import SignInScreen from '../../screens/SignInScreen';
import Header from '../../components/Header';
import TitleAndSubTitle from '../../components/TitleAndSubTitle';
import I18n from '../../languages/i18n';

beforeEach(jest.spyOn(console, 'error').mockImplementation(() => undefined));
afterEach(() => jest.clearAllMocks());

describe('RegisterScreen', () => {
  const mockedParams = {
    route: {params: {email: 'test@test.com'}},
  };
  test('should render Register screen correctly', () => {
    const wrapper = renderWithRedux(
      <RegisterScreen {...mockedParams} />,
    ).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  test('should render Header', () => {
    const wrapper = renderWithRedux(<RegisterScreen {...mockedParams} />);
    wrapper.getByTestId('header');
  });

  test('should render TitleAndSubTitle component', () => {
    const wrapper = renderWithRedux(<RegisterScreen {...mockedParams} />);
    wrapper.getByTestId('titleSubTitle');
  });

  test('should render TitleAndSubTitle texts', () => {
    const wrapper = renderWithRedux(<RegisterScreen {...mockedParams} />);
    wrapper.getByText(I18n.t('RegisterTitle'));
    wrapper.getByText(I18n.t('RegisterSubtitle'));
  });

  test('should render label', () => {
    const wrapper = renderWithRedux(<RegisterScreen {...mockedParams} />);
    wrapper.getByText(I18n.t('CreateMyAccount'));
  });

  test('should navigate to SignIn Screen with email after entering valid email address.', async () => {
    renderWithRedux(<RegisterScreen {...mockedParams} />);

    const toClick = await screen.getByTestId('create');

    fireEvent(toClick, 'press');

    const signInScreen = renderWithRedux(<SignInScreen {...mockedParams} />);

    expect(signInScreen).toBeTruthy();
  });
});
