import React from 'react';
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';
import NowPlaying from './NowPlaying';

const App = () =>
  (<div>
      <SearchBox />
      <SearchResults />
      <NowPlaying />
    </div>
  );

export default App;
