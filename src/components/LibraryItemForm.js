import React from 'react';

class LibraryItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.libraryItem ? this.props.libraryItem.id : -1,
            tag: this.props.libraryItem ? this.props.libraryItem.tag : '',
            name: this.props.libraryItem ? this.props.libraryItem.name : '',
            description: this.props.libraryItem ? this.props.libraryItem.description : '',
            docsLink: this.props.libraryItem? this.props.libraryItem.docsLink : ''
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
        this.props.onSubmit(this.state);
    }
    render() {
        return (
            <div>
                Tag Name: <input type="text" value={this.state.tag} onChange={this.onTagChange}/> <br />
                Name: <input type="text" value={this.state.name} onChange={this.onNameChange}/> <br />
                Description: <input type="text" value={this.state.description} onChange={this.onDescriptionChange}/> <br />
                Docs Link: <input type="text" value={this.state.docsLink} onChange={this.onDocsLinkChange}/> <br />
                <button onClick= {this.onClick}>ADD</button>
            </div>
        );
    }
}

export default LibraryItemForm;