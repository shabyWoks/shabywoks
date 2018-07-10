import React from 'react';
import {connect} from 'react-redux';
import LibraryItemForm from './LibraryItemForm';
import { editLibraryItem, removeLibraryItem } from '../actions/libraryA';

export class EditLibraryItem extends React.Component {
    onSubmit = (libraryItem) => {
        this.props.editLibraryItem(libraryItem);
        this.props.history.push("/");
    }
    onClick = () => {
        this.props.removeLibraryItem(this.props.libraryItem.id);
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

const mapDispatchToProps = (dispatch) => {
    return {
        editLibraryItem: (libraryItem) => dispatch(editLibraryItem(libraryItem)),
        removeLibraryItem: (id) => dispatch(removeLibraryItem(id))
    }
}

const ConnectedEditLibraryItem = connect(mapStateToProps, mapDispatchToProps)(EditLibraryItem)
export default ConnectedEditLibraryItem;