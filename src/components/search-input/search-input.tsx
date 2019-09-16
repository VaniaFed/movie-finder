import React, { FC } from 'react';
import classNames from 'classnames';
import { Props } from './props';
import './search-input.scss';

export const SearchInput: FC<Props> = ({
    search,
    className,
    onSearch,
    onInput
}: Props) => (
        <div className={classNames('search-input', className)}>
            <input
                className="search-input__input"
                type="text"
                placeholder="Game of Thrones"
                value={search}
                onInput={(e): void => {
                    onInput(e.currentTarget.value);
                }}
                onKeyDown={({ key }) => {
                    if (key === 'Enter') {
                        onSearch();
                    }
                }}
                data-input="search-input__input"
            />
            <button
                className="search-input__btnIcon"
                onClick={onSearch}
                type="button"
            />
        </div>
    );
