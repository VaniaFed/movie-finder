import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { parse } from 'query-string';
import { SearchPage } from 'components/search-page';
import { actions } from 'actions';
import { listSelector } from 'selectors/list-selector';
import { pushToHistory } from 'utils/push-to-history';

export const searchValueSelector = state => {
    return state.movie.get('searchValue');
};

export const searchFilterSelector = state => {
    return state.movie.get('searchFilter');
};

export const sortFilterSelector = state => {
    return state.movie.get('sortFilter');
};

const mapStateToProps = createSelector(
    listSelector,
    searchValueSelector,
    searchFilterSelector,
    sortFilterSelector,
    (list, searchValue, searchFilter, sortFilter) => {
        return {
            list,
            searchValue,
            searchFilter,
            sortFilter
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
        changeSearchFilter: searchFilter => {
            dispatch(actions.searchFilter(searchFilter));
        },
        changeSortFilter: sortFilter => {
            dispatch(actions.sortFilter(sortFilter));
        }
    };
};

export const SearchPageSmart = withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(
        ({
            list,
            searchValue,
            searchFilter,
            sortFilter,
            fetchMoviesByData,
            changeSearchValue,
            changeSearchFilter,
            changeSortFilter,
            location
        }) => {
            useEffect(() => {
                const urlData = parse(window.location.search);

                if (
                    (urlData.search !== searchValue && urlData.search) ||
                    (urlData.searchFilter !== searchFilter &&
                        urlData.searchFilter) ||
                    (urlData.sortFilter !== sortFilter && urlData.sortFilter)
                ) {
                    fetchMoviesByData(
                        urlData.search,
                        urlData.searchFilter,
                        urlData.sortFilter
                    );
                }
                if (urlData.search !== searchValue && urlData.search) {
                    changeSearchValue(urlData.search);
                }
                if (
                    urlData.searchFilter !== searchFilter &&
                    urlData.searchFilter
                ) {
                    changeSearchFilter(urlData.searchFilter);
                }
                if (urlData.sortFilter !== sortFilter && urlData.sortFilter) {
                    changeSortFilter(urlData.sortFilter);
                }
            }, location);
            return (
                <SearchPage
                    movies={list}
                    searchValue={searchValue}
                    onSearch={searchValue => {
                        fetchMoviesByData(
                            searchValue,
                            searchFilter,
                            sortFilter
                        );
                        const historyData = {
                            search: searchValue,
                            searchFilter,
                            sortFilter
                        };
                        pushToHistory(historyData);
                    }}
                    changeSearchValue={e => {
                        changeSearchValue(e);
                        const historyData = {
                            search: e
                        };
                        pushToHistory(historyData);
                    }}
                />
            );
        }
    )
);
