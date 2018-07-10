import Library from '../../components/Library';
import {shallow} from 'enzyme';
import React from 'react';

test('should render dashboard correctly', () => {
    const wrapper = shallow(<Library />);
    expect(wrapper).toMatchSnapshot();
});

test('should perform button click', () => {
    const history = {push: jest.fn()};
    const wrapper = shallow(<Library history={history}/>);
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith("/add-new-library-item");
});