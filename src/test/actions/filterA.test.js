import * as filters from '../../actions/filtersA';

test('should execute setFilterText correctly', () => {
    const text = "New Text";
    const action = filters.setFilterText(text);
    expect(action).toEqual({
        type: 'SET_FILTER_TEXT',
        filterText: text
    });
});

test('should execute setFilterText correctly with default', () => {
    const action = filters.setFilterText();
    expect(action).toEqual({
        type: 'SET_FILTER_TEXT',
        filterText: ''
    });
});

test('should execute sortByNameAsc correctly', () => {
    const action = filters.sortByNameAsc();
    expect(action).toEqual({
        type: 'SORTBY_NAME_ASC'
    })
});

test('should execute sortByNameDsc correctly', () => {
    const action = filters.sortByNameDsc();
    expect(action).toEqual({
        type: 'SORTBY_NAME_DSC'
    })
});