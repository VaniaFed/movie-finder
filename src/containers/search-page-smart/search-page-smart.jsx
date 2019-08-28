import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { withRouter } from 'next/router';
import { parse } from 'query-string';
import { SearchPage } from 'components/search-page';
import { actions } from 'actions';
import { listSelector } from 'selectors/list-selector';
import { isMap } from 'lib/is-map';
import { pushToHistory } from 'lib/push-to-history';
import { searchValueSelector } from 'selectors/search-value-selector';
import { searchFilterSelector } from 'selectors/search-filter-selector';
import { sortFilterSelector } from 'selectors/sort-filter-selector';

const mapStateToProps = createSelector(
    listSelector,
    searchValueSelector,
    searchFilterSelector,
    sortFilterSelector,
    (list, search, searchFilter, sortFilter) => {
        return {
            list,
            controlsData: {
                search,
                searchFilter,
                sortFilter
            }
        };
    }
);

const mapDispatchToProps = dispatch => {
    return {
        dispatch,
        dispatches: {
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
            changeSearchFilter: searchFilter => {
                dispatch(actions.searchFilter(searchFilter));
            },
            changeSortFilter: sortFilter => {
                dispatch(actions.sortFilter(sortFilter));
            }
        }
    };
};

export const SearchPageSmart = withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(({ list, controlsData, dispatches }) => {
        useEffect(() => {
            const urlData = parse(window.location.search);
            const inputData = {
                search: controlsData.search,
                searchFilter: controlsData.searchFilter,
                sortFilter: controlsData.sortFilter
            };

            const shouldFetchMovies = !isMap(urlData, inputData);
            if (shouldFetchMovies) {
                dispatches.fetchMoviesByData(
                    urlData.search,
                    urlData.searchFilter,
                    urlData.sortFilter
                );
            }
            const shouldChangeSearch = !isMap(urlData, inputData, ['search']);
            if (shouldChangeSearch) {
                dispatches.changeSearchValue(urlData.search);
            }

            const shouldChangeSearchFilter = !isMap(urlData, inputData, [
                'searchFilter'
            ]);
            if (shouldChangeSearchFilter) {
                dispatches.changeSearchFilter(urlData.searchFilter);
            }

            const shouldChangeSortFilter = !isMap(urlData, inputData, [
                'sortFilter'
            ]);
            if (shouldChangeSortFilter) {
                dispatches.changeSortFilter(urlData.sortFilter);
            }
        });
        return (
            <>
                <SearchPage
                    movies={list}
                    searchValue={controlsData.searchValue}
                    searchFilter={controlsData.searchFilter}
                    sortFilter={controlsData.sortFilter}
                    changeSortFilter={sortFilter => {
                        const historyData = {
                            sortFilter
                        };
                        pushToHistory(historyData);
                    }}
                />
            </>
        );
    })
);
