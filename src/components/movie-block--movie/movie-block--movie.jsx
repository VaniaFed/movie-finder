import React from 'react';
import './movie-block--movie.scss';

export const MovieBlockMovie = () => {
    return (
        <div className="movie-block--movie movie-block__movie">
            <img
                src="https://pp.userapi.com/c844521/v844521991/f808b/TCjtAXN8SdA.jpg"
                alt="movieimage"
                className="movie-block--movie__image"
            />
            <div className="movie-block--movie__info">
                <h2 className="movie-block--movie__title">Pulp Fiction</h2>
                <p className="movie-block--movie__genres">genres blah blah</p>
                <p className="movie-block--movie__date">2019</p>
                <p className="movie-block--movie__duration">154 min</p>
                <p className="movie-block--movie__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt voluptatum ex, expedita necessitatibus adipisci
                    tempora rerum consequatur eum culpa ab eos eligendi dolorum
                    illum omnis alias esse deleniti, maiores sit.
                </p>
            </div>
        </div>
    );
};
