import React from 'react';
import {shallow} from 'enzyme';
import {AddLibraryItem} from '../../components/AddLibraryItem';
import libraryItems from '../fixtures/libraryItems';
import LibraryItemForm from '../../components/LibraryItemForm';

let startAddLibraryItem, history, wrapper;

beforeEach(() => {
    startAddLibraryItem = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(<AddLibraryItem startAddLibraryItem={startAddLibraryItem} history={history}/>);
    
});

test('should render add library item correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should execute on submit button successfully', () => {
    wrapper.find(LibraryItemForm).prop('onSubmit')(libraryItems[0]);
    expect(startAddLibraryItem).toHaveBeenLastCalledWith(libraryItems[0]);
    expect(history.push).toHaveBeenLastCalledWith("/");
});