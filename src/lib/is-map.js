// export const applyEverythingIsEverythingIsOkay = (urlData, data, actions) => {
//     if (
//         (urlData.search !== data.searchValue && urlData.search) ||
//         (urlData.searchFilter !== data.searchFilter && urlData.searchFilter) ||
//         (urlData.sortFilter !== data.sortFilter && urlData.sortFilter)
//     ) {
//         actions.fetchMoviesByData(
//             urlData.search,
//             urlData.searchFilter,
//             urlData.sortFilter
//         );
//     }
//     if (urlData.search !== data.searchValue && urlData.search) {
//         actions.changeSearchValue(urlData.search);
//     }
//     if (urlData.searchFilter !== data.searchFilter && urlData.searchFilter) {
//         actions.changeSearchFilter(urlData.searchFilter);
//     }
//     if (urlData.sortFilter !== data.sortFilter && urlData.sortFilter) {
//         actions.changeSortFilter(urlData.sortFilter);
//     }
// };

export const isMap = (data, target, changeOption = []) => {
    const dataList = Object.entries(data);
    const targetList = Object.entries(target);
    let isEqual = true;

    dataList.forEach(item => {
        const key = item[0];
        if (changeOption.length !== 0 && !changeOption.includes(key)) {
            return;
        }
        if (!(key in target)) {
            return false;
        }
        const value = item[1];
        const targetValue = getValueFromListByKey(targetList, key);
        if (value !== targetValue) {
            isEqual = false;
        }
    });
    return isEqual;
};

const getValueFromListByKey = (list, key) => list.filter(el => {
        return el[0] === key;
    })[0][1];
