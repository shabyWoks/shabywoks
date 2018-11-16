import {LibraryList} from '../../components/LibraryList';
import {shallow} from 'enzyme';
import libraryItems from '../fixtures/libraryItems';
import React from 'react';
// import { wrap } from 'module';

test('should render library list correctly when items available', () => {
    const wrapper = shallow(<LibraryList libraryItems={libraryItems}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render library list correctly when items not available', () => {
    const wrapper = shallow(<LibraryList libraryItems={[]}/>);
    expect(wrapper).toMatchSnapshot();
});