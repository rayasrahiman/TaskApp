import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {shallow} from 'enzyme';
import {useNavigation} from '@react-navigation/native';

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
    const wrapper = render(<RegisterScreen {...mockedParams} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  test('should render Header', () => {
    const wrapper = shallow(<RegisterScreen {...mockedParams} />);
    wrapper.find(<Header />);
  });

  test('should render TitleAndSubTitle component', () => {
    const wrapper = shallow(<RegisterScreen {...mockedParams} />);
    wrapper.find(<TitleAndSubTitle />);
  });

  test('should render TitleAndSubTitle texts', () => {
    const wrapper = render(<RegisterScreen {...mockedParams} />);
    wrapper.getByText(I18n.t('RegisterTitle'));
    wrapper.getByText(I18n.t('RegisterSubtitle'));
  });

  test('should render label', () => {
    const wrapper = render(<RegisterScreen {...mockedParams} />);
    wrapper.getByText(I18n.t('CreateMyAccount'));
  });

  test('should navigate to SignIn Screen with email after entering valid email address.', async () => {
    render(<RegisterScreen {...mockedParams} />);

    const toClick = await screen.getByTestId('create');

    fireEvent(toClick, 'press');

    const signInScreen = render(<SignInScreen {...mockedParams} />);

    expect(signInScreen).toBeTruthy();
  });
});
