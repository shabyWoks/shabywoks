const libraryReducerDefault = {
    tags: [],
    libraryItems: []
};

// const tag = {
//     id: '',
//     name: ''
// }

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
                ],
                tags: [
                    ...state.tags,
                    ...((state.tags.filter((tag) => tag.name.toLowerCase() === action.tag.name.toLowerCase())).length === 0 ?  (action.tag.name === '' ? [] : [action.tag]) : [] )
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