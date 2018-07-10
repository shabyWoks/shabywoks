import React from 'react';
import {connect} from 'react-redux';
import {setFilterText, sortByNameAsc, sortByNameDsc} from '../actions/filtersA';

export class LibraryListFilter extends React.Component {
    onTextChange = (e) => {
        const data = e.target.value;
        this.props.setFilterText(data);
    }
    onSortChange = (e) => {
        const data = e.target.value;
        if(data === 'asc'){
            this.props.sortByNameAsc();
        }
        else if(data === 'dsc'){
            this.props.sortByNameDsc();
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

const mapDispatchToProps = (dispatch) => {
    return {
        setFilterText: (data) => dispatch(setFilterText(data)),
        sortByNameAsc: () => dispatch(sortByNameAsc()),
        sortByNameDsc: () => dispatch(sortByNameDsc())
    }
}

const ConnectedLibraryListFilter = connect(mapStateToProps, mapDispatchToProps)(LibraryListFilter);

export default ConnectedLibraryListFilter;