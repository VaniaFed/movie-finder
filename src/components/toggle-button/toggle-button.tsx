import React from 'react';
import classNames from 'classnames';
import { Props } from './props';

import './toggle-button.scss';

export const ToggleButton: React.FC<Props> = ({
    label,
    className,
    name,
    background,
    checked,
    onClick
}: Props) => {
    const resultClass: string = classNames(className, 'toggle-button', {
        'toggle-button--no--background': !background
    });
    const inputClass: string = classNames('toggle-button__input', {
        'toggle-button__input--no-background': !background,
        'toggle-button__input--checked': checked
    });
    const spanClass: string = classNames('toggle-button__text', {
        'toggle-button__text--no--background': !background,
        'toggle-button__text--checked': checked,
        'toggle-button__text--no--background--checked': checked && !background
    });

    return (
        <label className={resultClass} onClick={onClick}>
            <input
                className={inputClass}
                type="radio"
                defaultChecked={checked && 'checked'}
                name={name}
            />
            <span className={spanClass}>{label}</span>
        </label>
    );
};
