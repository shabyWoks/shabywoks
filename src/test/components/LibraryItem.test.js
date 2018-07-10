import {LibraryItem} from '../../components/LibraryItem';
import {shallow} from 'enzyme';
import libraryItems from '../fixtures/libraryItems';
import React from 'react';

test('should render library item correctly', () => {
    const wrapper = shallow(<LibraryItem item={libraryItems[0]} />);
    expect(wrapper).toMatchSnapshot();
});