import { configure } from '@storybook/react';

function loadStories() {
    require('../src/components/ui/Movie/Movie.stories');
    require('../src/components/ui/SearchInput/SearchInput.stories');
}

configure(loadStories, module);
