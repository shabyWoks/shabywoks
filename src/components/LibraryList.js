import React from 'react';
import {connect} from 'react-redux';
import LibraryItem from './LibraryItem';
import selectorLibraryItem from '../selectors/libraryItem';

export const LibraryList = (props) => {
    return (
        <div>
            {
                props.libraryItems.length === 0 ?
                   <h4>No items yet in the library</h4> 
                :
                props.libraryItems.map((libraryItem, i) => {
                    return <LibraryItem key={libraryItem.id} item={libraryItem} /> ;
                })
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        libraryItems: selectorLibraryItem(state.library.libraryItems, state.filters)
    }
}

const ConnectedLibraryList = connect(mapStateToProps)(LibraryList);

export default ConnectedLibraryList;