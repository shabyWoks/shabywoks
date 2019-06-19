import React from 'react';
import {connect} from 'react-redux';
import LibraryItemForm from './LibraryItemForm';
import {startAddLibraryItem} from '../actions/libraryA';

export class AddLibraryItem extends React.Component {
    onSubmit = (libraryItem) => {
        this.props.startAddLibraryItem(libraryItem);
        this.props.history.push('/');
    }
    render () {
        return (
            <div>
                <LibraryItemForm
                    onSubmit={this.onSubmit} 
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startAddLibraryItem: (libraryItem) => dispatch(startAddLibraryItem(libraryItem))
    }
}

const ConnectedAddLibraryItem = connect(undefined, mapDispatchToProps)(AddLibraryItem);
export default ConnectedAddLibraryItem;