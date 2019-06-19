import React from 'react';
import {connect} from 'react-redux';
import LibraryItemForm from './LibraryItemForm';
import { startEditLibraryItem, startRemoveLibraryItem } from '../actions/libraryA';

export class EditLibraryItem extends React.Component {
    onSubmit = (libraryItem) => {
        this.props.startEditLibraryItem(libraryItem);
        this.props.history.push("/");
    }
    onClick = () => {
        this.props.startRemoveLibraryItem(this.props.libraryItem.id);
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
        startEditLibraryItem: (libraryItem) => dispatch(startEditLibraryItem(libraryItem)),
        startRemoveLibraryItem: (id) => dispatch(startRemoveLibraryItem(id))
    }
}

const ConnectedEditLibraryItem = connect(mapStateToProps, mapDispatchToProps)(EditLibraryItem)
export default ConnectedEditLibraryItem;