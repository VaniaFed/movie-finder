import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import { SearchPage } from 'components/search-page';
import { fetchMoviesByDataRequest } from 'actions/movies-by-data';

const mapStateToProps = state => ({
    movies: state.moviesByData.movies
});

const mapDispatchToProps = dispatch => {
    return {
        dispatch,
        fetchMoviesByData: (searchValue, searchBy, sortBy) => {
            dispatch(fetchMoviesByDataRequest(searchValue, searchBy, sortBy));
        }
    };
};

export const SearchPageSmart = connect(
    mapStateToProps,
    mapDispatchToProps
)(({ movies, fetchMoviesByData }) => {
    return <SearchPage movies={movies} onSearch={fetchMoviesByData} />;
});
