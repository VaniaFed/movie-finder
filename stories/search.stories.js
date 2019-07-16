import React from 'react';
import { storiesOf } from '@storybook/react';

import { SearchInput } from '../src/components/ui/MovieSearch/SearchInput/index';

storiesOf('Search', module).add('regular', () => <SearchInput />);
