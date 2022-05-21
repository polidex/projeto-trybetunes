import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

class Profile extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/profile">
          <div data-testid="page-profile" />
        </Route>
      </BrowserRouter>
    );
  }
}

export default Profile;
