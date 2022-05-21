import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

class Favorites extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/favorites">
          <div data-testid="page-favorites" />
        </Route>
      </BrowserRouter>
    );
  }
}

export default Favorites;
