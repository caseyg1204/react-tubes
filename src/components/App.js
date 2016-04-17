import React from 'react';
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';
import NowPlaying from './NowPlaying';
import Favorites from './Favorites';

const App = () =>
  (<div>
      <SearchBox />
      <SearchResults />
      <NowPlaying />
      <Favorites />
    </div>
  );

export default App;
