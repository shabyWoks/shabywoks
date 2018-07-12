import libraryR from '../../reducers/libraryR';
import libraryItem from '../fixtures/libraryItems';

const initLibrary = {
    tags: [{
        id: 'react',
        name: 'React'
    }, {
        id: 'node',
        name: 'Node'
    }],
    libraryItems: libraryItem
};

test('should set reducer with default value correctly', () => {
    const state = libraryR(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        tags: [],
        libraryItems: []
    });
});

test('should set add library item correctly with default state', () => {
    const state = libraryR(undefined, {
        type: 'ADD_LIBRARY_ITEM',
        libraryItem: libraryItem[0],
        tag: {
            id: libraryItem[0].tag.toLowerCase(),
            name: libraryItem[0].tag
        }
    });
    expect(state).toEqual({
        tags: [{
            id: libraryItem[0].tag.toLowerCase(),
            name: libraryItem[0].tag
        }],
        libraryItems: [{
            ...libraryItem[0]
        }]
    })
});

test('should set add library item correctly with different pre data in tags', () => {
    const state = libraryR({
        tags: [{
            id: 'node',
            name: 'Node'
        }],
        libraryItems: []
    }, {
        type: 'ADD_LIBRARY_ITEM',
        libraryItem: libraryItem[0],
        tag: {
            id: libraryItem[0].tag.toLowerCase(),
            name: libraryItem[0].tag
        }
    });
    expect(state).toEqual({
        tags: [{
                id: 'node',
                name: 'Node'
            }, {
                id: libraryItem[0].tag.toLowerCase(),
                name: libraryItem[0].tag
            }
        ],
        libraryItems: [{
            ...libraryItem[0]
        }]
    })
});

test('should set add library item correctly with same pre data in tags', () => {
    const state = libraryR({
        tags: [{
            id: 'react',
            name: 'React'
        }],
        libraryItems: []
    }, {
        type: 'ADD_LIBRARY_ITEM',
        libraryItem: libraryItem[0],
        tag: {
            id: libraryItem[0].tag.toLowerCase(),
            name: libraryItem[0].tag
        }
    });
    expect(state).toEqual({
        tags: [{
                id: 'react',
                name: 'React'
            }
        ],
        libraryItems: [{
            ...libraryItem[0]
        }]
    })
});

test('should edit library item correctly except tag', () => {
    const state = libraryR(initLibrary, {
        type: 'EDIT_LIBRARY_ITEM',
        libraryItem: {
            ...libraryItem[0],
            name: 'react-router',
            description: 'Yes I know the description',
            docsLink: 'I am not going to tell you'
        }
    });
    expect(state).toEqual({
        tags: [...initLibrary.tags],
        libraryItems: [{
            ...libraryItem[0],
            name: 'react-router',
            description: 'Yes I know the description',
            docsLink: 'I am not going to tell you'
        }, 
            libraryItem[1], 
            libraryItem[2], 
            libraryItem[3]
        ]
    });
});

test('should remove library item correctly', () => {
    const state = libraryR(initLibrary, {
        type: 'REMOVE_LIBRARY_ITEM',
        libraryItemId: '1'
    });

    expect(state).toEqual({
        ...initLibrary,
        libraryItems: [
            libraryItem[1],
            libraryItem[2],
            libraryItem[3]
        ]
    });
});

test('should not remove any library item correctly', () => {
    const state = libraryR(initLibrary, {
        type: 'REMOVE_LIBRARY_ITEM',
        libraryItemId: '-1'
    });

    expect(state).toEqual({
        ...initLibrary,
        libraryItems: [
            ...libraryItem
        ]
    });
});