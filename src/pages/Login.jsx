import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div data-testid="page-login">
        <input
          data-testid="login-name-input"
        />
        <button
          type="button"
          data-testid="login-submit-button"
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
