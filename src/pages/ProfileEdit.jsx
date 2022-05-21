import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

class ProfileEdit extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/profile/edit">
          <div data-testid="page-profile-edit" />
        </Route>
      </BrowserRouter>
    );
  }
}

export default ProfileEdit;
