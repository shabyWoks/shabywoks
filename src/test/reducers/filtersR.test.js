import filterR from '../../reducers/filtersR';

test('should setup default state correctly', () => {
    const state = filterR(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        filterBy: '',
        sortByName: 'asc'
    });
});

test('should setup filter text correctly', () => {
    const value = 'some text';
    const state = filterR(undefined, {type:'SET_FILTER_TEXT', filterText: value});
    expect(state.filterBy).toBe(value);
});

test('should setup sortbyname correctly in ascending', () => {
    const state = filterR(undefined, {type: 'SORTBY_NAME_ASC'});
    expect(state.sortByName).toBe('asc');
});

test('should setup sortbyname correctly in descending', () => {
    const state = filterR(undefined, {type: 'SORTBY_NAME_DSC'});
    expect(state.sortByName).toBe('dsc');
});