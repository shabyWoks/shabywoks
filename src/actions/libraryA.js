import uuid from 'uuid';

export const addLibraryItem = (libraryItem) => {
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

export const rempveLibraryItem = (libraryItemId) => {
    return {
        type: 'REMOVE_LIBRARY_ITEM',
        libraryItemId
    }
}