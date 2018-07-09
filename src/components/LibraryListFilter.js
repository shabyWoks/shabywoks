import React from 'react';
import {connect} from 'react-redux';
import {setFilterText, sortByNameAsc, sortByNameDsc} from '../actions/filtersA';

class LibraryListFilter extends React.Component {
    onTextChange = (e) => {
        const data = e.target.value;
        this.props.dispatch(setFilterText(data));
    }
    onSortChange = (e) => {
        const data = e.target.value;
        if(data === 'asc'){
            this.props.dispatch(sortByNameAsc());
        }
        else if(data === 'dsc'){
            this.props.dispatch(sortByNameDsc());
        }
    }
    render () {
        return (
            <div>
                Tags : <input type="text" value={this.props.filters.filterBy} onChange={this.onTextChange} /> <br />
                SortBy Name : 
                <select value={this.props.filters.sortByName} onChange={this.onSortChange}>
                    <option value="asc">Ascending</option>
                    <option value="dsc">Descending</option>
                </select>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

const ConnectedLibraryListFilter = connect(mapStateToProps)(LibraryListFilter);

export default ConnectedLibraryListFilter;