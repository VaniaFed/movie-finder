import React from 'react';
import { connect } from 'react-redux';
import { pushToHistory } from 'lib/push-to-history';
import { createSelector } from 'reselect';
import { actions } from 'actions';
import { SearchBlock } from 'components/search-block';
import { searchValueSelector } from 'selectors/search-value-selector';
import { searchFilterSelector } from 'selectors/search-filter-selector';

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
        fetchMoviesByData,
        setIsStartedLoading
    }) => {
        return (
            <SearchBlock
                searchValue={searchValue}
                onSearch={searchValue => {
                    setIsStartedLoading(true);
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
