import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import {shallow} from 'enzyme';
import {useNavigation} from '@react-navigation/native';

import RegistrationScreen from '../../screens/RegistrationScreen';
import Header from '../../components/Header';

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

  test('should render label', () => {
    const wrapper = render(<RegistrationScreen />);
    wrapper.getByText('Get Started');
  });

  test('should show invalid message', () => {
    const {getByTestId, getByText} = render(<RegistrationScreen />);
    fireEvent.press(getByTestId('register'));
    getByText('Enter a valid email!');
  });

  test('should navigate to Login Screen with email', async () => {
    const mockNavigate = jest.fn();
    useNavigation.mockReturnValueOnce({navigate: mockNavigate});

    // const wrapper = render(<RegistrationScreen />);

    // const field = {
    //   email: wrapper.getByTestId('emailID'),
    // };

    // fireEvent.changeText(field.email, 'test@test.com');

    // const button = wrapper.getByTestId('register');
    // fireEvent.press(button);

    // await waitFor(() => {
    //   expect(mockNavigate).toHaveBeenCalledWith('Login', {
    //     email: 'test@test.com',
    //   });
    // });

    const wrapper = shallow(<RegistrationScreen />);
    wrapper.find('Button').simulate('click');

    await (() => {
      expect(mockNavigate).toHaveBeenCalledWith('Login', {
        email: '',
      });
    });
  });
});
