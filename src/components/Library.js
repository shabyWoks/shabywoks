import React from 'react';
import {Redirect} from 'react-router-dom';
import LibraryList from './LibraryList';
import LibraryListFilter from './LibraryListFilter';

const Library = (props) => {
    return (
        <div>
            <h1>Library</h1>
            <div>
                <button onClick={() => {props.history.push('/add-new-library-item');}}>Add New Item</button>
            </div>
            <LibraryListFilter />
            <LibraryList />
        </div>
    );
}

export default Library;