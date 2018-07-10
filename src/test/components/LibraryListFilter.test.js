import React from 'react';
import {shallow} from 'enzyme';
import {LibraryListFilter} from '../../components/LibraryListFilter';

let setFilterText, sortByNameAsc, sortByNameDsc, wrapper, filters;

beforeEach(() => {
    setFilterText = jest.fn();
    sortByNameAsc = jest.fn();
    sortByNameDsc = jest.fn();
    filters = {
        filterBy: 'r',
        sortByName: 'asc'
    };
    wrapper = shallow(<LibraryListFilter filters={filters} setFilterText={setFilterText} sortByNameAsc={sortByNameAsc} sortByNameDsc= {sortByNameDsc} /> );
});

test('should render library list filter correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change correctly', () => {
    const value= 's';
    wrapper.find('input').simulate('change', {
        target: {value: value}
    });
    expect(setFilterText).toHaveBeenLastCalledWith(value);
});

test('should handle ascending sortby correctly', () => {
    filters = {
        filterBy: 'r',
        sortByName: 'dsc'
    };
    const value= 'asc';
    wrapper.setProps({filters : filters});
    wrapper.find('select').simulate('change', {
        target: {value: value}
    });
    expect(sortByNameAsc).toHaveBeenCalled();
});

test('should handle descending sortby correctly', () => {
    const value= 'dsc';
    wrapper.find('select').simulate('change', {
        target: {value: value}
    });
    expect(sortByNameDsc).toHaveBeenCalled();
});
