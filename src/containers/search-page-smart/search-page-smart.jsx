import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { withRouter } from 'next/router';
import { parse } from 'query-string';
import { SearchPage } from 'components/search-page';
import { actions } from 'actions';
import { listSelector } from 'selectors/list-selector';
import { applyEverythingIsEverythingIsOkay } from 'utils/apply-everything-if-everything-is-okay';
import { pushToHistory } from 'utils/push-to-history';
import { searchValueSelector } from 'selectors/search-value-selector';
import { searchFilterSelector } from 'selectors/search-filter-selector';
import { sortFilterSelector } from 'selectors/sort-filter-selector';

const mapStateToProps = createSelector(
    listSelector,
    searchValueSelector,
    searchFilterSelector,
    sortFilterSelector,
    (list, searchValue, searchFilter, sortFilter) => {
        return {
            list,
            inputData: {
                searchValue,
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
    )(({ list, inputData, dispatches, location }) => {
        useEffect(() => {
            const urlData = parse(window.location.search);
            const inputsData = {
                searchValue: inputData.searchValue,
                searchFilter: inputData.searchFilter,
                sortFilter: inputData.sortFilter
            };
            const actions = {
                fetchMoviesByData: dispatches.fetchMoviesByData,
                changeSearchValue: dispatches.changeSearchValue,
                changeSearchFilter: dispatches.changeSearchFilter,
                changeSortFilter: dispatches.changeSortFilter
            };
            applyEverythingIsEverythingIsOkay(urlData, inputsData, actions);
        }, location);
        return (
            <>
                <SearchPage
                    movies={list}
                    searchValue={inputData.searchValue}
                    searchFilter={inputData.searchFilter}
                    sortFilter={inputData.sortFilter}
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
