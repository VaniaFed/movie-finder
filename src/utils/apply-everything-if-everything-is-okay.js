export const applyEverythingIsEverythingIsOkay = (urlData, data, actions) => {
    if (
        (urlData.search !== data.searchValue && urlData.search) ||
        (urlData.searchFilter !== data.searchFilter && urlData.searchFilter) ||
        (urlData.sortFilter !== data.sortFilter && urlData.sortFilter)
    ) {
        actions.fetchMoviesByData(
            urlData.search,
            urlData.searchFilter,
            urlData.sortFilter
        );
    }
    if (urlData.search !== data.searchValue && urlData.search) {
        actions.changeSearchValue(urlData.search);
    }
    if (urlData.searchFilter !== data.searchFilter && urlData.searchFilter) {
        actions.changeSearchFilter(urlData.searchFilter);
    }
    if (urlData.sortFilter !== data.sortFilter && urlData.sortFilter) {
        actions.changeSortFilter(urlData.sortFilter);
    }
};
