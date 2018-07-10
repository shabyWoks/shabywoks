import React from 'react';
import {connect} from 'react-redux';

export class LibraryItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.libraryItem ? this.props.libraryItem.id : -1,
            tag: this.props.libraryItem ? this.props.libraryItem.tag : '',
            name: this.props.libraryItem ? this.props.libraryItem.name : '',
            description: this.props.libraryItem ? this.props.libraryItem.description : '',
            docsLink: this.props.libraryItem? this.props.libraryItem.docsLink : '',
            selectHidden: false
        }
    }
    onTagChange = (e) => {
        const tag = e.target.value;
        this.setState(() => ({ tag }));
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }
    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }));
    }
    onDocsLinkChange = (e) => {
        const docsLink = e.target.value;
        this.setState(() => ({ docsLink }));
    }
    onClick = () => {
        this.props.onSubmit({
            id: this.state.id,
            name: this.state.name,
            description: this.state.description,
            tag: this.state.tag,
            docsLink: this.state.docsLink
        });
    }
    handleOnHiddenClick = () => {
        this.setState((prevState) => ({selectHidden: !prevState.selectHidden}));
    }
    render() {
        return (
            <div>
                Tag Name: 
                <select 
                    value={this.state.tag}
                    onChange={this.onTagChange}
                    hidden={this.state.selectHidden}
                    disabled={this.props.tags.length === 0}>
                    {<option key='86' value=''> {this.props.tags.length !== 0 ? 'Select' : 'None' }</option>}
                    {this.props.tags.map((tag) => <option key= {tag.id} value={tag.name}>{tag.name}</option>)}
                </select>
                <input 
                    type="text"
                    value={this.state.tag}
                    onChange={this.onTagChange}
                    disabled={!this.state.selectHidden}/>

                <button onClick={this.handleOnHiddenClick}>
                    {this.state.selectHidden !== true ? 'Add Tag' : 'X'}
                </button>
                <br />

                Name:
                <input 
                    type="text"
                    value={this.state.name}
                    onChange={this.onNameChange}/>
                <br />

                Description:
                <input
                    type="text"
                    value={this.state.description}
                    onChange={this.onDescriptionChange}/>
                <br />

                Docs Link:
                <input 
                    type="text" 
                    value={this.state.docsLink}
                    onChange={this.onDocsLinkChange}/> 
                <br />

                <button onClick= {this.onClick}>
                    {this.props.libraryItem ? 'EDIT' : 'ADD'}
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tags: state.library.tags
    }
}

const ConnectedLibraryItemForm = connect(mapStateToProps)(LibraryItemForm);

export default ConnectedLibraryItemForm;