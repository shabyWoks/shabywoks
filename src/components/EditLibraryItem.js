import React from 'react';
import {connect} from 'react-redux';
import LibraryItemForm from './LibraryItemForm';
import { editLibraryItem, rempveLibraryItem } from '../actions/libraryA';

class EditLibraryItem extends React.Component {
    onSubmit = (libraryItem) => {
        this.props.dispatch(editLibraryItem(libraryItem));
        this.props.history.push("/");
    }
    onClick = () => {
        this.props.dispatch(rempveLibraryItem(this.props.libraryItem.id));
        this.props.history.push("/");
    }
    render () {
        return (
            <div>
                <LibraryItemForm onSubmit={this.onSubmit} libraryItem={this.props.libraryItem} />
                <button onClick={this.onClick}>Remove</button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        libraryItem: state.library.libraryItems.find((libraryItem) => libraryItem.id === props.match.params.id)
    }
}

const ConnectedEditLibraryItem = connect(mapStateToProps)(EditLibraryItem)
export default ConnectedEditLibraryItem;