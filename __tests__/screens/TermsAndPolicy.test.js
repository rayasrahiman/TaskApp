import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {shallow} from 'enzyme';
import {useNavigation} from '@react-navigation/native';

import TermsAndPolicy from '../../screens/TermsAndPolicy';

describe('TermsAndPolicy', () => {
  const mockedParams = {
    route: {params: {termsPrivacyId: 1}},
  };
  test('should render Terms And Policy screen correctly', () => {
    const wrapper = render(<TermsAndPolicy {...mockedParams} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
