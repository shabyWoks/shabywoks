const selectorLibraryItem = (libraryItems = [], filters) => {
    return libraryItems.filter(
        (libraryItem) => {
            return libraryItem.tag.toLowerCase().includes(filters.filterBy.toLowerCase());
        }
    )
    .sort(
        (a, b) => {
            if(filters.sortByName === 'asc'){
                return a.name > b.name ? 1 : -1;
            }
            else if(filters.sortByName === 'dsc'){
                return a.name > b.name ? -1 : 1;
            }
        }
    )
}

export default selectorLibraryItem;