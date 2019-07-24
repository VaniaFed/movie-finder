import { configure } from '@storybook/react';
import '../src/global.scss';

function loadStories() {
    require('../src/components/ui/movie/Movie.stories');
    require('../src/components/ui/MovieInfo/MovieInfo.stories');
    require('../src/components/ui/NotFound/NotFound.stories');
    require('../src/components/ui/ToggleContainer/ToggleContainer.stories');
    require('../src/components/ui/ToggleButton/ToggleButton.stories');

    // requires alias for the following stories:
    // require('../src/components/ui/SearchInput/SearchInput.stories');
    // require('../src/components/ui/SearchBlock/SearchBlock.stories');
    // require('../src/components/ui/Movies/Movies.stories');
}

configure(loadStories, module);
