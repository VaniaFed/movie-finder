import React from 'react';
import './MovieBlock.scss';
import { MovieHeader } from 'Components/ui/MovieHeader/';

export const MovieBlock = () => {
    return (
        <div className="movieBlock">
            <MovieHeader />
            <div className="movieBlock-movie movieBlock__movie">
                <img
                    src="https://pp.userapi.com/c844521/v844521991/f808b/TCjtAXN8SdA.jpg"
                    alt="movieimage"
                    className="movieBlock-movie__image"
                />
                <div className="movieBlock-movie__info">
                    <h2 className="movieBlock-movie__title">Pulp Fiction</h2>
                    <p className="movieBlock-movie__genres">genres blah blah</p>
                    <p className="movieBlock-movie__date">2019</p>
                    <p className="movieBlock-movie__duration">154 min</p>
                    <p className="movieBlock-movie__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Incidunt voluptatum ex, expedita necessitatibus adipisci
                        tempora rerum consequatur eum culpa ab eos eligendi
                        dolorum illum omnis alias esse deleniti, maiores sit.
                    </p>
                </div>
            </div>
        </div>
    );
};
