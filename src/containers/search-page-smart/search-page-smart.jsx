import React from 'react';
import { connect } from 'react-redux';
import { SearchPage } from 'components/search-page';
import { fetchMoviesByDataRequest } from 'actions/movies-by-data';

const mapStateToProps = ({ movies, searchFilter, sortFilter }) => ({
    movies,
    searchFilter,
    sortFilter
});

const mapDispatchToProps = dispatch => {
    return {
        dispatch,
        fetchMoviesByData: (searchValue, searchFilter, sortFilter) => {
            dispatch(
                fetchMoviesByDataRequest(searchValue, searchFilter, sortFilter)
            );
        }
    };
};

export const SearchPageSmart = connect(
    mapStateToProps,
    mapDispatchToProps
)(({ movies, searchFilter, sortFilter, fetchMoviesByData }) => {
    return (
        <SearchPage
            movies={movies}
            onSearch={value => {
                fetchMoviesByData(value, searchFilter, sortFilter);
            }}
        />
    );
});
