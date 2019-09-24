import React, { FC } from 'react';
import classNames from 'classnames';
import { Logo } from 'components/logo';
import { Button } from 'components/button';
import { Link } from '../../isomorfic-components/link';
import { Props } from './props';
import './movie-header.scss';

export const MovieHeader: FC<Props> = ({ className, urlParams }: Props) => {
    const resultClass = classNames(className, 'movie-header');
    return (
        <div className={resultClass}>
            <Logo text="netfixroulette" />
            <Link href={`/search?${urlParams}`}>
                <Button
                    text="search"
                    className="movie-header__search-button movie-header__search-button--reversed"
                />
            </Link>
        </div>
    );
};
