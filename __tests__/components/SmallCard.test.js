import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {shallow} from 'enzyme';

import SmallCard from '../../components/SmallCard';

beforeEach(jest.spyOn(console, 'error').mockImplementation(() => undefined));
afterEach(() => jest.clearAllMocks());

describe('SmallCard', () => {
  test('should render SmallCard correctly', () => {
    const wrapper = render(<SmallCard />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
