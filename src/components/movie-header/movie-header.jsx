import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Logo } from 'Components/logo';
import { Button } from 'Components/button';
import './movie-header.scss';

export const MovieHeader = ({ className }) => {
    const resultClass = classNames(className, 'movie-header');
    return (
        <div className={resultClass}>
            <Logo>netfixroulette</Logo>
            <Button className="movie-header__search-button button_reverse">
                Search
            </Button>
        </div>
    );
};
MovieHeader.propTypes = {
    className: PropTypes.string
};
