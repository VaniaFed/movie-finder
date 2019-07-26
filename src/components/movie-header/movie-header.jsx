import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Logo } from 'components/logo';
import { Button } from 'components/button';
import './movie-header.scss';

export const MovieHeader = ({ className }) => {
    const resultClass = classNames(className, 'movie-header');
    return (
        <div className={resultClass}>
            <Logo>netfixroulette</Logo>
            <Button
                text="search"
                className="movie-header__search-button movie-header__search-button--reversed"
            />
        </div>
    );
};
MovieHeader.propTypes = {
    className: PropTypes.string
};
