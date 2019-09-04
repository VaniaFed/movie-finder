import React, { FC } from 'react';

import './preloader.scss';

export const Preloader: FC = () => (
    <div className="preloader">
        <img
            src="/static/img/91.gif"
            className="preloader__image"
            alt="Loading..."
        />
    </div>
);
