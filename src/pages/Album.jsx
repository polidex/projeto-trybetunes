import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

class Album extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/album/:id">
          <div data-testid="page-album" />
        </Route>
      </BrowserRouter>
    );
  }
}

export default Album;
