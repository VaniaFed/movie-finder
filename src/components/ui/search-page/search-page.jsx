import React, { Fragment } from 'react';
import { v4 } from 'uuid';
import { Movies } from 'Components/ui/movies';
import { SearchBlock } from 'Components/ui/search-block';
import { ToggleContainer } from 'Components/ui/ToggleContainer';
import { ToggleButton } from 'Components/ui/ToggleButton';
import './search-page.scss';

export const SearchPage = () => {
    const movies = [
        {
            title: 'movei1',
            genres: 'action',
            tagline: 'some tagline',
            releaseDate: '2014',
            posterPath:
                'https://pp.userapi.com/c844521/v844521991/f808b/TCjtAXN8SdA.jpg',
            id: v4()
        },
        {
            title: 'movei1',
            genres: 'action',
            tagline: 'some tagline',
            releaseDate: '2014',
            posterPath:
                'https://pp.userapi.com/c844521/v844521991/f808b/TCjtAXN8SdA.jpg',
            id: v4()
        },
        {
            title: 'movei1',
            genres: 'action',
            tagline: 'some tagline',
            releaseDate: '2014',
            posterPath:
                'https://pp.userapi.com/c844521/v844521991/f808b/TCjtAXN8SdA.jpg',
            id: v4()
        }
    ];
    return (
        <Fragment>
            <SearchBlock />
            <div className="search-page--info">
                <div className="search-page--info__left">
                    <span className="search-page--info__text">
                        7 movies found
                    </span>
                </div>
                <div className="search-page--info__right">
                    <span className="search-page--info__text">Sort by</span>
                    <ToggleContainer className="search-page--info__toggleContainer">
                        <ToggleButton
                            label="release date"
                            className="toggle-button_noBg search-page--info__toggleButton"
                            checked="checked"
                            name="sortBy"
                        />
                        <ToggleButton
                            label="rating"
                            className="toggle-button_noBg search-page--info__toggleButton"
                            name="sortBy"
                        />
                    </ToggleContainer>
                </div>
            </div>
            <Movies movies={movies} />
        </Fragment>
    );
};
