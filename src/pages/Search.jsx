import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

class Search extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/search">
          <div data-testid="page-search" />
        </Route>
      </BrowserRouter>
    );
  }
}

export default Search;
