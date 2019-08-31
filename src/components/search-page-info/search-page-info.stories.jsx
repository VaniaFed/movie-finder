import React from 'react';
import { storiesOf } from '@storybook/react';

import { SearchPageInfo } from './index';

storiesOf('SearchPageInfo', module).add('regular', () => (
    <SearchPageInfo quantityMovies={5} />
));
