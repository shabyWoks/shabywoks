import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export const LibraryItem = (props) => {
    return (
        <Link to={`/edit-library-item/${props.item.id}`}>
            <div>
                { props.item.tag } | { props.item.name } | { props.item.description }
            </div>
        </Link>
    );
}

const ConnectedLibraryItem = connect()(LibraryItem);
export default ConnectedLibraryItem;