import React from 'react';
import {connect} from 'react-redux';
import LibraryItemForm from './LibraryItemForm';
import {addLibraryItem} from '../actions/libraryA';

class AddLibraryItem extends React.Component {
    onSubmit = (libraryItem) => {
        this.props.dispatch(addLibraryItem(libraryItem));
        this.props.history.push('/');
    }
    render () {
        return (
            <div>
                <LibraryItemForm onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

const ConnectedAddLibraryItem = connect()(AddLibraryItem)
export default ConnectedAddLibraryItem;