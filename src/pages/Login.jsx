import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/">
          <div data-testid="page-login" />
        </Route>
      </BrowserRouter>
    );
  }
}

export default Login;
