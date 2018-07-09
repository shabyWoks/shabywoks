import Library from '../../components/Library';
import {shallow} from 'enzyme';
import React from 'react';

test('should render dashboard correctly', () => {
    const wrapper = shallow(<Library />);
    expect(wrapper).toMatchSnapshot();
});