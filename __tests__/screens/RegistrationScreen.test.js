import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {shallow} from 'enzyme';
import {useNavigation} from '@react-navigation/native';

import RegistrationScreen from '../../screens/RegistrationScreen';
import Header from '../../components/Header';
import TitleAndSubTitle from '../../components/TitleAndSubTitle';

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: jest.fn(),
  };
});

describe('RegistrationScreen', () => {
  test('should render Registration screen correctly', () => {
    const wrapper = render(<RegistrationScreen />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  test('should render Header', () => {
    const wrapper = shallow(<RegistrationScreen />);
    wrapper.find(<Header />);
  });

  test('should render TitleAndSubTitle component', () => {
    const wrapper = shallow(<RegistrationScreen />);
    wrapper.find(<TitleAndSubTitle />);
  });

  test('should render TitleAndSubTitle texts', () => {
    const wrapper = render(<RegistrationScreen />);
    wrapper.getByText('Welcome to the Pentair Home app!');
    wrapper.getByText(
      "Get the most out of your home's water. Enter your email to get started.",
    );
  });

  test('should render label', () => {
    const wrapper = render(<RegistrationScreen />);
    wrapper.getByText('Get Started');
  });

  test('should show invalid message when invalid email entered', () => {
    const {getByTestId, getByText} = render(<RegistrationScreen />);
    fireEvent.press(getByTestId('register'));
    getByText('Enter a valid email!');
  });

  test('should navigate to Login Screen with email', async () => {
    const mockNavigate = jest.fn();
    useNavigation.mockReturnValueOnce({navigate: mockNavigate});

    const wrapper = shallow(<RegistrationScreen />);
    wrapper.find('Button').simulate('click');

    await (() => {
      expect(mockNavigate).toHaveBeenCalledWith('Login', {
        email: '',
      });
    });
  });
});
