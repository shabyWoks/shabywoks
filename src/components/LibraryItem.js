import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export const LibraryItem = (props) => {
    return (
            <div className="library-item-body flex-center">
                <div>{ props.item.name }</div>
                <div>{ props.item.tag }</div>
                <div>{ props.item.description }</div>
                <div><Link to={`/edit-library-item/${props.item.id}`}>EDIT</Link> | <a href="" >DOCS</a></div>
            </div>
    );
}

const ConnectedLibraryItem = connect()(LibraryItem);
export default ConnectedLibraryItem;