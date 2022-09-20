import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import {shallow} from 'enzyme';
import {useNavigation} from '@react-navigation/native';

import SignInScreen from '../../screens/SignInScreen';
import Header from '../../components/Header';
import TitleAndSubTitle from '../../components/TitleAndSubTitle';
import Loader from '../../components/Loader';

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: jest.fn(),
  };
});

describe('SignInScreen', () => {
  const mockedParams = {
    route: {params: {email: 'test@test.com'}},
  };
  test('should render SignIn screen correctly', () => {
    const wrapper = render(<SignInScreen {...mockedParams} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  test('should render Header', () => {
    const wrapper = shallow(<SignInScreen {...mockedParams} />);
    wrapper.find(<Header />);
  });

  test('should render TitleAndSubTitle component', () => {
    const wrapper = shallow(<SignInScreen {...mockedParams} />);
    wrapper.find(<TitleAndSubTitle />);
  });

  test('should render Loader component', () => {
    const wrapper = shallow(<SignInScreen {...mockedParams} />);
    wrapper.find(<Loader />);
  });

  test('should render TitleAndSubTitle texts', () => {
    const wrapper = render(<SignInScreen {...mockedParams} />);
    wrapper.getByText('Looks like you already have a Pentair account!');
    wrapper.getByText('Sign in to go to your account.');
  });

  test('should render label', () => {
    const wrapper = render(<SignInScreen {...mockedParams} />);
    wrapper.getByText('Sign In');
    wrapper.getByText('Switch Account');
    wrapper.getByText('Forgot Password?');
  });

  // test('should show invalid message when invalid password entered', () => {
  //   const {getByTestId, getByText} = render(<SignInScreen {...mockedParams} />);
  //   fireEvent.press(getByTestId('signIn'));
  //   getByText('Enter a valid password.');
  // });

  test('should navigate to Dashboard Screen.', async () => {
    const mockNavigate = jest.fn();
    useNavigation.mockReturnValueOnce({navigate: mockNavigate});

    const wrapper = render(<SignInScreen {...mockedParams} />);

    const button = wrapper.getByTestId('signIn');
    fireEvent.press(button);

    await (() => {
      expect(mockNavigate).toHaveBeenCalledWith('Dashboard');
    });
  });
});
