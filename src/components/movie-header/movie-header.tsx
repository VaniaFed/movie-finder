import React, { FC } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { Logo } from 'components/logo';
import { Button } from 'components/button';
import { Props } from './props';
import './movie-header.scss';

export const MovieHeader: FC<Props> = ({ className }: Props) => {
    const resultClass = classNames(className, 'movie-header');
    return (
        <div className={resultClass}>
            <Logo text="netfixroulette" />
            <Link href="/search">
                <Button
                    text="search"
                    className="movie-header__search-button movie-header__search-button--reversed"
                />
            </Link>
        </div>
    );
};
