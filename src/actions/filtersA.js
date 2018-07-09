export const setFilterText = (filterText) => {
    return {
        type: 'SET_FILTER_TEXT',
        filterText
    }
};

export const sortByNameAsc = () => {
    return {
        type: 'SORTBY_NAME_ASC'
    }
};

export const sortByNameDsc = () => {
    return {
        type: 'SORTBY_NAME_DSC'
    }
};