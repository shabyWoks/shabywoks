import uuid from 'uuid';

const libraryItemDefault = {
    name: '',
    tag: '',
    description: '',
    docsLink: ''
};

export const addLibraryItem = (libraryItem = libraryItemDefault) => {
    return {
        type: 'ADD_LIBRARY_ITEM',
        libraryItem: {
            ...libraryItem,
            id: uuid()
        }
    }
}

export const editLibraryItem = (libraryItem) => {
    return {
        type: 'EDIT_LIBRARY_ITEM',
        libraryItem
    }
}

export const removeLibraryItem = (libraryItemId = '-1') => {
    return {
        type: 'REMOVE_LIBRARY_ITEM',
        libraryItemId
    }
}