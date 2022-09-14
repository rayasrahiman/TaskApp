import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import {shallow} from 'enzyme';
import {useNavigation} from '@react-navigation/native';

import LoginScreen from '../../screens/LoginScreen';
import Header from '../../components/Header';
import TitleAndSubTitle from '../../components/TitleAndSubTitle';
import Loader from '../../components/Loader';

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: jest.fn(),
  };
});

describe('LoginScreen', () => {
  const mockedParams = {
    route: {params: {email: 'test@test.com'}},
  };
  test('should render Login screen correctly', () => {
    const wrapper = render(<LoginScreen {...mockedParams} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  test('should render Header', () => {
    const wrapper = shallow(<LoginScreen {...mockedParams} />);
    wrapper.find(<Header />);
  });

  test('should render TitleAndSubTitle component', () => {
    const wrapper = shallow(<LoginScreen {...mockedParams} />);
    wrapper.find(<TitleAndSubTitle />);
  });

  test('should render Loader component', () => {
    const wrapper = shallow(<LoginScreen {...mockedParams} />);
    wrapper.find(<Loader />);
  });

  test('should render TitleAndSubTitle texts', () => {
    const wrapper = render(<LoginScreen {...mockedParams} />);
    wrapper.getByText('Looks like you already have a Pentair account!');
    wrapper.getByText('Sign in to go to your account.');
  });

  test('should render label', () => {
    const wrapper = render(<LoginScreen {...mockedParams} />);
    wrapper.getByText('Sign In');
    wrapper.getByText('Switch Account');
    wrapper.getByText('Forgot Password');
  });

  test('should show invalid message when invalid password entered', () => {
    const {getByTestId, getByText} = render(<LoginScreen {...mockedParams} />);
    fireEvent.press(getByTestId('signIn'));
    getByText(
      'Must contain at least one uppercase, lowercase, numeric character, special character and Length must be between 8 to 20 characters.',
    );
  });

  test('should navigate to Dashboard Screen.', async () => {
    const mockNavigate = jest.fn();
    useNavigation.mockReturnValueOnce({navigate: mockNavigate});

    const wrapper = render(<LoginScreen {...mockedParams} />);

    const button = wrapper.getByTestId('signIn');
    fireEvent.press(button);

    await (() => {
      expect(mockNavigate).toHaveBeenCalledWith('Dashboard');
    });
  });
});
