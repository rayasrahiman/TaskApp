import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {shallow} from 'enzyme';
import {useNavigation} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';

import RegistrationScreen from '../../screens/RegistrationScreen';
import Header from '../../components/Header';
import MainNavigator from '../../navigation/NavigationScreen';

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: jest.fn(),
  };
});

// jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

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

    const wrapper = shallow(<RegistrationScreen />);
    wrapper.find('Button').simulate('click');

    await (() => {
      expect(mockNavigate).toHaveBeenCalledWith('Login', {
        email: '',
      });
    });
  });
  // test('should navigate to Login Screen with email after entering valid email address.', async () => {
  //   const component = (
  //     <NavigationContainer>
  //       <MainNavigator />
  //     </NavigationContainer>
  //   );

  //   render(component);
  //   const toClick = await screen.findByText('test@test.com');

  //   fireEvent(toClick, 'press');
  //   const email = await screen.findByText('test@test.com');

  //   expect(email).toBeTruthy();
  // });
});
