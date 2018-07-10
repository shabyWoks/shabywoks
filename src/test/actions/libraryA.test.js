import * as libraryA from '../../actions/libraryA';
import libraryItems from '../fixtures/libraryItems';

test('should execute remove library item correctly with value', () => {
    const ItemId= "xyz";
    const action = libraryA.removeLibraryItem(ItemId);
    expect(action).toEqual({
        type: 'REMOVE_LIBRARY_ITEM',
        libraryItemId: ItemId
    });
});

test('should execute remove library item correctly with default value', () => {
    const action = libraryA.removeLibraryItem();
    expect(action).toEqual({
        type: 'REMOVE_LIBRARY_ITEM',
        libraryItemId: "-1"
    });
});

test('should execute edit library item correctly with value', () => {
    const action = libraryA.editLibraryItem(libraryItems[0]);
    expect(action).toEqual({
        type: 'EDIT_LIBRARY_ITEM',
        libraryItem: libraryItems[0]
    });
});

test('should execute add library item correctly with value', () => {
    const action = libraryA.addLibraryItem({
        name: libraryItems[0].name,
        tag: libraryItems[0].tag,
        description: libraryItems[0].description,
        docsLink: libraryItems[0].docsLink,
    });
    expect(action).toEqual({
        type: 'ADD_LIBRARY_ITEM',
        libraryItem: {
            ...libraryItems[0],
            id: expect.any(String)
        }
        
    });
});

test('should execute add library item correctly with default value', () => {
    const libraryItemDefault = {
        name: '',
        tag: '',
        description: '',
        docsLink: ''
    };
    const action = libraryA.addLibraryItem();
    expect(action).toEqual({
        type: 'ADD_LIBRARY_ITEM',
        libraryItem: {
            ...libraryItemDefault,
            id: expect.any(String)
        }
        
    });
});