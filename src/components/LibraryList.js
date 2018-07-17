import React from 'react';
import {connect} from 'react-redux';
import LibraryItem from './LibraryItem';
import selectorLibraryItem from '../selectors/libraryItem';

const returnDefault = () => {
    return (
        <div className="library-item-body flex-center">
            <div>{ props.item.tag }</div>
            <div>{ props.item.name }</div>
            <div>{ props.item.description }</div>
            <div><Link to={`/edit-library-item/${props.item.id}`}>EDIT</Link> | <a href="" >DOCS</a></div>
        </div>
    );
}
export const LibraryList = (props) => {
    return (
        <div className="library-list-body flex-start flex-down">
            {
                function() {
                    if(props.libraryItems.length !== 0){
                        return (
                            <div className="library-item-body flex-center" style={{backgroundColor: 'white', color: '#a2acae'}}>
                                <div>Name</div>
                                <div>Tag</div>
                                <div>Description</div>
                                <div style={{color: '#a2acae'}}>Links</div>
                            </div>
                        );
                    }
                }()
            }
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