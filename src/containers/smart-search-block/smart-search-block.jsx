import { connect } from 'react-redux';
import { pushToHistory } from 'utils/push-to-history';
import { createSelector } from 'reselect';
import { actions } from 'actions';
import { SearchBlock } from 'components/search-block';
import { searchValueSelector } from 'selectors/search-value-selector';
import { searchFilterSelector } from 'selectors/search-filter-selector';

import React from 'react';

const mapStateToProps = createSelector(
    searchValueSelector,
    searchFilterSelector,
    (searchValue, searchFilter) => {
        return {
            searchValue,
            searchFilter
        };
    }
);

const mapDispatchToProps = dispatch => {
    return {
        dispatch,
        fetchMoviesByData: (searchValue, searchFilter, sortFilter) => {
            dispatch(
                actions.fetchMoviesByDataRequest(
                    searchValue,
                    searchFilter,
                    sortFilter
                )
            );
        },
        changeSearchValue: searchValue => {
            dispatch(actions.setSearchValue(searchValue));
        },
        changeSortFilter: sortFilter => {
            dispatch(actions.sortFilter(sortFilter));
        }
    };
};

export const SmartSearchBlock = connect(
    mapStateToProps,
    mapDispatchToProps
)(
    ({
        searchValue,
        searchFilter,
        sortFilter,
        changeSearchValue,
        fetchMoviesByData
    }) => {
        return (
            <SearchBlock
                searchValue={searchValue}
                onSearch={searchValue => {
                    fetchMoviesByData(searchValue, searchFilter, sortFilter);
                    pushToHistory({
                        search: searchValue,
                        searchFilter,
                        sortFilter
                    });
                }}
                onInput={searchValue => {
                    changeSearchValue(searchValue);
                    pushToHistory({ search: searchValue });
                }}
                changeSearchFilter={searchFilter => {
                    pushToHistory({ searchFilter });
                }}
                searchFilter={searchFilter}
            />
        );
    }
);
