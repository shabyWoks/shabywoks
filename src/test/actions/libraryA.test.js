import * as libraryA from '../../actions/libraryA';
import libraryItems from '../fixtures/libraryItems';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

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
    const action = libraryA.addLibraryItem(libraryItems[0]);
    expect(action).toEqual({
        type: 'ADD_LIBRARY_ITEM',
        libraryItem: libraryItems[0],
        tag: {
            id: libraryItems[0].tag.toLowerCase(),
            name: libraryItems[0].tag
        }
        
    });
});

test('should add library items to database and store', (done) => {
    const store = createMockStore({});
    const libraryItemData = {
        name: libraryItems[0].name,
        docsLink: libraryItems[0].docsLink,
        tag: libraryItems[0].tag,
        description: libraryItems[0].description
    };
    store.dispatch(libraryA.startAddLibraryItem(libraryItemData))
    .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_LIBRARY_ITEM',
            libraryItem: {
                ...libraryItems[0],
                id: expect.any(String)
            },
            tag: {
                id: libraryItems[0].tag.toLowerCase(),
                name: libraryItems[0].tag
            }
        });

        database.ref(`library/libraryItems/${actions[0].libraryItem.id}`)
                .once('value')
                .then((snapshot) => {
                    expect(snapshot.val()).toEqual(libraryItemData);

                    database.ref(`library/tags/${libraryItemData.tag.toLowerCase()}`)
                        .once('value')
                        .then((snapshot) => {
                            expect(snapshot.val()).toBe(libraryItemData.tag);
                            done();
                        });
                });
    });
});

test('should add default library items to database and store', (done) => {
    const store = createMockStore({});
    const libraryItemData = {
        name: '',
        docsLink: '',
        tag: '',
        description: ''
    };
    store.dispatch(libraryA.startAddLibraryItem())
    .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_LIBRARY_ITEM',
            libraryItem: {
                ...libraryItemData,
                id: expect.any(String)
            },
            tag: {
                id: '',
                name: ''
            }
        });
        database.ref(`library/libraryItems/${actions[0].libraryItem.id}`)
                .once('value')
                .then((snapshot) => {
                    expect(snapshot.val()).toEqual(libraryItemData);
                    done();
                });
    });
});

test('should edit library items in database and store', (done) => {
    const library = {};
    const tags = {
        react: 'React',
        node: 'Node'
    };
    const libraryItemss = [];
    libraryItems.forEach((libraryItm) => {
        libraryItemss[libraryItm.id] = {tag: libraryItm.tag, name: libraryItm.name, description: libraryItm.description, docsLink: libraryItm.docsLink};
    });

    library['tags'] = tags;
    library['libraryItems'] = libraryItemss;
    database.ref('library').set(library).then(() => {});
    
    const store = createMockStore({});
    const libraryItemData = {
        id: '1',
        name: 'react-router',
        docsLink: libraryItems[0].docsLink,
        tag: libraryItems[0].tag,
        description: libraryItems[0].description
    };
    store.dispatch(libraryA.startEditLibraryItem(libraryItemData))
    .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_LIBRARY_ITEM',
            libraryItem: libraryItemData
        });

        database.ref(`library/libraryItems/${actions[0].libraryItem.id}`)
                .once('value')
                .then((snapshot) => {
                    expect(snapshot.val()).toEqual({
                        name: libraryItemData.name,
                        tag: libraryItemData.tag,
                        description: libraryItemData.description,
                        docsLink: libraryItemData.docsLink
                    });
                    done();
                });

    })
});

test('should remove library item in database and store', (done) => {
    const library = {};
    const tags = {
        react: 'React',
        node: 'Node'
    };
    const libraryItemss = [];
    libraryItems.forEach((libraryItm) => {
        libraryItemss[libraryItm.id] = {tag: libraryItm.tag, name: libraryItm.name, description: libraryItm.description, docsLink: libraryItm.docsLink};
    });

    library['tags'] = tags;
    library['libraryItems'] = libraryItemss;
    database.ref('library').set(library).then(() => {});
    
    const store = createMockStore({});
    const libraryItemId = '1';
    store.dispatch(libraryA.startRemoveLibraryItem(libraryItemId))
    .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_LIBRARY_ITEM',
            libraryItemId: libraryItemId
        });

        database.ref(`library/libraryItems/${libraryItemId}`)
                .once('value')
                .then((snapshot) => {
                    expect(snapshot.val()).toBe(null);
                    done();
                });

    })
});

test('should set library item from database in store', (done) => {
    const library = {};
    const tags = {
        react: 'React',
        node: 'Node'
    };
    const libraryItemss = [];
    libraryItems.forEach((libraryItm) => {
        libraryItemss[libraryItm.id] = {tag: libraryItm.tag, name: libraryItm.name, description: libraryItm.description, docsLink: libraryItm.docsLink};
    });

    library['tags'] = tags;
    library['libraryItems'] = libraryItemss;
    database.ref('library').set(library).then(() => {});
    
    const store = createMockStore({});
    const libraryItemId = '1';
    store.dispatch(libraryA.startSetLibraryItem())
    .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_LIBRARY',
            library: {
                tags: [{id: 'node', name: 'Node'}, {id: 'react', name: 'React'}],
                libraryItems: libraryItems
            }
        });
        done();
    });
});

test('should set library correctly', () => {
    const library = {};
    const tags = [
        {id: 'react', name: 'React'},
        {id: 'node', name: 'Node'}
    ];
    library['tags'] = tags;
    library['libraryItems'] = libraryItems;
    const state = libraryA.setLibraryItem(library);
    expect(state).toEqual({
        type: 'SET_LIBRARY',
        library: library
    });
})