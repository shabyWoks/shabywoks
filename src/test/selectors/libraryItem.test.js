import selectorLibraryItem from '../../selectors/libraryItem';
import libraryItems from '../fixtures/libraryItems';

test('should sort in ascending order', () => {
    const filters = {
        filterBy: '',
        sortByName: 'asc'
    }
    const result = selectorLibraryItem(libraryItems, filters);
    expect(result).toEqual([libraryItems[2], libraryItems[3], libraryItems[0], libraryItems[1]]);
});

test('should sort in descending order', () => {
    const filters = {
        filterBy: '',
        sortByName: 'dsc'
    }
    const result = selectorLibraryItem(libraryItems, filters);
    expect(result).toEqual([libraryItems[1], libraryItems[0], libraryItems[3], libraryItems[2]]);
});

test('should filter by r and sort in descending order', () => {
    const filters = {
        filterBy: 'r',
        sortByName: 'dsc'
    }
    const result = selectorLibraryItem(libraryItems, filters);
    expect(result).toEqual([libraryItems[1], libraryItems[0]]);
});

test('should filter by rd and sort in descending order', () => {
    const filters = {
        filterBy: 'rd',
        sortByName: 'dsc'
    }
    const result = selectorLibraryItem(libraryItems, filters);
    expect(result).toEqual([]);
});