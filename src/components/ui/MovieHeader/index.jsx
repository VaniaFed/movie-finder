import React from 'react';
import classNames from 'classnames';
import { Logo } from 'Components/ui/Logo';
import { Button } from 'Components/ui/Button';
import './MovieHeader.scss';

export const MovieHeader = ({ className }) => {
    const resultClass = classNames(className, 'movieHeader');
    return (
        <div className={resultClass}>
            <Logo>netfixroulette</Logo>
            <Button className="movieHeader__searchButton button_reverse">
                Search
            </Button>
        </div>
    );
};