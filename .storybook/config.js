import { configure } from '@storybook/react';

function loadStories() {
    require('../src/components/ui/Movie/Movie.stories');
    require('../src/components/ui/SearchInput/SearchInput.stories');
    require('../src/components/ui/MovieInfo/MovieInfo.stories');
    require('../src/components/ui/NotFound/NotFound.stories');
    require('../src/components/ui/ToggleContainer/ToggleContainer.stories');
    require('../src/components/ui/ToggleButton/ToggleButton.stories');
    // require('../src/components/ui/SearchBlock/SearchBlock.stories');
    // require('../src/components/ui/Movies/Movies.stories');
}

configure(loadStories, module);
