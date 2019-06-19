import React from 'react';
import {shallow} from 'enzyme';
import {LibraryItemForm} from '../../components/LibraryItemForm';
import libraryItems from '../fixtures/libraryItems';

let onSubmit, wrapper, tags;

beforeEach(() => {
    onSubmit = jest.fn();
    tags = [{
        id: '1',
        name: 'React'
    }, {
        id: '2',
        name: 'Node'
    }]
    wrapper = shallow(<LibraryItemForm libraryItem={libraryItems[0]} onSubmit={onSubmit} tags={tags}/>);
})

test('should have rendered library item form correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle input tag change correctly', () => {
    const value= "New Value";
    wrapper.find('input').at(0).simulate('change', {
        target: {value: value }
    });
    expect(wrapper.state('tag')).toBe(value);
});

test('should handle select tag change correctly', () => {
    const value= "New Value";
    wrapper.find('select').at(0).simulate('change', {
        target: {value: value }
    });
    expect(wrapper.state('tag')).toBe(value);
});

test('should handle toggle button click correctly', () => {
    const val = wrapper.state('selectHidden');
    wrapper.find('button').at(0).simulate('click');
    expect(wrapper.state('selectHidden')).toBe(!val);
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
    wrapper.find('button').at(1).simulate('click');
    expect(onSubmit).toHaveBeenLastCalledWith(libraryItems[0]);
});