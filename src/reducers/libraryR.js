const libraryReducerDefault = {
    tags: [],
    libraryItems: []
};

// const libraryItem = {
//     id: '',
//     tag: '',
//     name: '',
//     description: '',
//     docsLink: ''
// }

const libraryReducer = (state= libraryReducerDefault, action) => {
    switch(action.type) {
        case 'ADD_LIBRARY_ITEM':
            return {
                ...state,
                libraryItems : [
                    ...state.libraryItems,
                    action.libraryItem
                ]
            };
        case 'EDIT_LIBRARY_ITEM':
            return {
                ...state,
                libraryItems : (state.libraryItems.map(
                    (libraryItem) => {
                        if(libraryItem.id === action.libraryItem.id) {
                            return {
                                ...libraryItem,
                                ...action.libraryItem
                            };
                        }
                        else {
                            return libraryItem;
                        }
                    }
                ))
            };
        case 'REMOVE_LIBRARY_ITEM':
            return {
                ...state,
                libraryItems: state.libraryItems.filter((libraryItem) => libraryItem.id !== action.libraryItemId)
            }
        default:
            return state;
    }
}

export default libraryReducer;