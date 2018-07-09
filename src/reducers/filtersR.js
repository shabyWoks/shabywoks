const filtersReducerDefault = {
    filterBy: '',
    sortByName: 'asc'
};

const filtersReducer = (state = filtersReducerDefault, action) => {
    switch (action.type) {
        case 'SET_FILTER_TEXT':
            return {
                ...state,
                filterBy: action.filterText
            };
        case 'SORTBY_NAME_ASC':
            return {
                ...state,
                sortByName: 'asc'
            };
        case 'SORTBY_NAME_DSC':
            return {
                ...state,
                sortByName: 'dsc'
            };
        
        default:
            return state;
    }
}

export default filtersReducer;