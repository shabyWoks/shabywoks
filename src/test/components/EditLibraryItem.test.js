import React from 'react';
import {shallow} from 'enzyme';
import {EditLibraryItem} from '../../components/EditLibraryItem';
import libraryItems from '../fixtures/libraryItems';
import LibraryItemForm from '../../components/LibraryItemForm';

let startRemoveLibraryItem, startEditLibraryItem, wrapper, history;

beforeEach(() => {
    startRemoveLibraryItem = jest.fn();
    startEditLibraryItem = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(<EditLibraryItem libraryItem={libraryItems[0]} history={history} startRemoveLibraryItem={startRemoveLibraryItem} startEditLibraryItem={startEditLibraryItem} />);
})
test('should render edit library item correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle on click correctly', () => {
    wrapper.find('button').simulate('click');
    expect(startRemoveLibraryItem).toHaveBeenLastCalledWith(libraryItems[0].id);
    expect(history.push).toHaveBeenLastCalledWith("/");
});

test('should handle on submit correctly', () => {
    wrapper.find(LibraryItemForm).prop('onSubmit')(libraryItems[0]);
    expect(startEditLibraryItem).toHaveBeenLastCalledWith(libraryItems[0]);
    expect(history.push).toHaveBeenLastCalledWith("/");
});