import React, {useEffect} from 'react';
import {View} from 'react-native';
import {render, waitFor} from '@testing-library/react-native';
import {useNavigation} from '@react-navigation/native';

import MainNavigator from '../../navigation/NavigationScreen';
import WelcomeScreen from '../../screens/WelcomeScreen';
import RegistrationScreen from '../../screens/RegistrationScreen';

beforeEach(jest.spyOn(console, 'error').mockImplementation(() => undefined));
afterEach(() => jest.clearAllMocks());

jest.mock('../../screens/WelcomeScreen', () => jest.fn());
jest.mock('../../screens/RegistrationScreen', () => jest.fn());

describe('MainNavigator', () => {
  test('should render Welcome Screen by default', async () => {
    WelcomeScreen.mockReturnValueOnce(<View testID="mock-welcome-screen" />);
    const wrapper = render(<MainNavigator />);

    await waitFor(() => {
      wrapper.getByTestId('mock-welcome-screen');
    });
  });

  test('Should render Registration Screen on "Registration" route', async () => {
    WelcomeScreen.mockImplementationOnce(() => {
      const navigation = useNavigation();
      useEffect(() => {
        navigation.navigate('Registration');
      }, [navigation]);
      return null;
    });
    RegistrationScreen.mockReturnValueOnce(
      <View testID="mock-registration-screen" />,
    );

    const wrapper = render(<MainNavigator />);
    await waitFor(() => {
      wrapper.getByTestId('mock-registration-screen');
    });
  });
});
