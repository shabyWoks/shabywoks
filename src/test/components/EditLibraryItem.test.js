import React from 'react';
import {shallow} from 'enzyme';
import {EditLibraryItem} from '../../components/EditLibraryItem';
import libraryItems from '../fixtures/libraryItems';
import LibraryItemForm from '../../components/LibraryItemForm';

let removeLibraryItem, editLibraryItem, wrapper, history;

beforeEach(() => {
    removeLibraryItem = jest.fn();
    editLibraryItem = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(<EditLibraryItem libraryItem={libraryItems[0]} history={history} removeLibraryItem={removeLibraryItem} editLibraryItem={editLibraryItem} />);
})
test('should render edit library item correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle on click correctly', () => {
    wrapper.find('button').simulate('click');
    expect(removeLibraryItem).toHaveBeenLastCalledWith(libraryItems[0].id);
    expect(history.push).toHaveBeenLastCalledWith("/");
});

test('should handle on submit correctly', () => {
    wrapper.find(LibraryItemForm).prop('onSubmit')(libraryItems[0]);
    expect(editLibraryItem).toHaveBeenLastCalledWith(libraryItems[0]);
    expect(history.push).toHaveBeenLastCalledWith("/");
});