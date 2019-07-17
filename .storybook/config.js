import { configure } from '@storybook/react';

function loadStories() {
    require('../src/components/ui/MovieItem/MovieItem.stories');
    require('../src/components/ui/SearchInput/SearchInput.stories');
}

configure(loadStories, module);
