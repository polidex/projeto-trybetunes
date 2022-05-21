import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

class NotFound extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/*">
          <div data-testid="page-not-found" />
        </Route>
      </BrowserRouter>
    );
  }
}

export default NotFound;
