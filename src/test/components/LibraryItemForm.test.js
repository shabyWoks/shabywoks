import React from 'react';
import {shallow} from 'enzyme';
import LibraryItemForm from '../../components/LibraryItemForm';
import libraryItems from '../fixtures/libraryItems';

let onSubmit, wrapper;

beforeEach(() => {
    onSubmit = jest.fn();
    wrapper = shallow(<LibraryItemForm libraryItem={libraryItems[0]} onSubmit={onSubmit}/>);
})

test('should have rendered library item form correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle tag change correctly', () => {
    const value= "New Value";
    wrapper.find('input').at(0).simulate('change', {
        target: {value: value }
    });
    expect(wrapper.state('tag')).toBe(value);
});

test('should handle name change correctly', () => {
    const value= "New Value";
    wrapper.find('input').at(1).simulate('change', {
        target: {value: value }
    });
    expect(wrapper.state('name')).toBe(value);
});

test('should handle description change correctly', () => {
    const value= "New Value";
    wrapper.find('input').at(2).simulate('change', {
        target: {value: value }
    });
    expect(wrapper.state('description')).toBe(value);
});

test('should handle docsLink change correctly', () => {
    const value= "New Value";
    wrapper.find('input').at(3).simulate('change', {
        target: {value: value }
    });
    expect(wrapper.state('docsLink')).toBe(value);
});

test('should handle button click correctly', () => {
    wrapper.find('button').simulate('click');
    expect(onSubmit).toHaveBeenLastCalledWith(libraryItems[0]);
});