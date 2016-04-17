import React from 'react';
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';
import NowPlaying from './NowPlaying';
import Favorites from './Favorites';

const App = () =>
  (<div className="app">
      <div className="search">
        <SearchBox />
        <SearchResults />
      </div>
      <div className="nowPlaying">
        <NowPlaying />
      </div>
      <div className="favorites">
        <Favorites />
      </div>
    </div>
  );

export default App;
