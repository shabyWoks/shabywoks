import database from '../firebase/firebase';
import libraryItem from '../selectors/libraryItem';

const libraryItemDefault = {
    name: '',
    tag: '',
    description: '',
    docsLink: ''
};

export const addLibraryItem = (libraryItem = libraryItemDefault) => {
    return {
        type: 'ADD_LIBRARY_ITEM',
        libraryItem: libraryItem,
        tag: {
            id: libraryItem.tag.toLowerCase(),
            name: libraryItem.tag
        }
    }
}

export const startAddLibraryItem = (libraryItem = libraryItemDefault) => {
    
    return (dispatch) => {
        return database
            .ref('library/libraryItems')
            .push({
                tag: libraryItem.tag,
                name: libraryItem.name,
                description: libraryItem.description,
                docsLink: libraryItem.docsLink
            })
            .then((ref) => {
                if(libraryItem.tag !== ''){
                    database.ref(`library/tags/${libraryItem.tag.toLowerCase()}`)
                            .once('value')
                            .then((snapshot) => {
                                const val = snapshot.val();
                                if(val === null){
                                    database.ref(`library/tags/${libraryItem.tag.toLowerCase()}`)
                                            .set(libraryItem.tag)
                                            .catch((e) => {})
                                }
                            })
                            .catch((e) => {
                                console.log(`Issue in fetching tag: ${libraryItem.tag.toLowerCase()}`);
                            });
                }
                dispatch(addLibraryItem({
                    ...libraryItem,
                    id: ref.key
                }));
            });
    }
}

export const editLibraryItem = (libraryItem) => {
    return {
        type: 'EDIT_LIBRARY_ITEM',
        libraryItem
    }
}

export const startEditLibraryItem = (libraryItem) => {
    return (dispatch) => {
        database.ref(`library/libraryItems/${libraryItem.id}`)
                .set({
                    name: libraryItem.name,
                    tag: libraryItem.tag,
                    description: libraryItem.description,
                    docsLink: libraryItem.docsLink
                })
                .then(() => {
                    dispatch(editLibraryItem(libraryItem));
                });
    }
}

export const removeLibraryItem = (libraryItemId = '-1') => {
    return {
        type: 'REMOVE_LIBRARY_ITEM',
        libraryItemId
    }
}

export const startRemoveLibraryItem = (libraryItemId = '-1') => {
    return (dispatch) => {
        return database.ref(`library/libraryItems/${libraryItemId}`)
                .once('value')
                .then((snapshot) => {
                    if(snapshot.val() === null){
                        dispatch(removeLibraryItem());
                    }
                    else{
                        database.ref(`library/libraryItems/${libraryItemId}`)
                                .set(null)
                                .then(() => {
                                    dispatch(removeLibraryItem(libraryItemId));
                                })
                                .catch((e) => {
                                    console.log('Error in removing Library Item..');
                                });
                    }
                })
                .catch((e) => {
                    console.log('Error in fetching Library Item..');
                });
    }
}

export const setLibraryItem = (library) => {
    return {
        type: 'SET_LIBRARY',
        library
    };
}

export const startSetLibraryItem = () => {
    return (dispatch) => {
        return database.ref('library')
                    .once('value')
                    .then((snapshot) => {
                        let libraryItems = [];
                        let tags = [];
                        snapshot.forEach((child) => {
                            if(child.key === 'libraryItems'){
                                child.forEach((itsChild) => {
                                    libraryItems.push({
                                        id: itsChild.key, 
                                        ...itsChild.val()
                                    });
                                });
                            } else if(child.key === 'tags'){
                                child.forEach((itsChild) => {
                                    tags.push({
                                        id: itsChild.val().toLowerCase(),
                                        name: itsChild.val()
                                    });
                                });
                            }
                        });
                        dispatch(setLibraryItem({
                            tags: tags,
                            libraryItems: libraryItems
                        }));
                    });
    }
}