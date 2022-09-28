import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {shallow} from 'enzyme';

import ModalComp from '../../components/ModalComp';

beforeEach(jest.spyOn(console, 'error').mockImplementation(() => undefined));
afterEach(() => jest.clearAllMocks());

describe('ModalComp', () => {
  test('should render ModalComp correctly', () => {
    const wrapper = render(<ModalComp />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
