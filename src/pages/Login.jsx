import React from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

class Login extends React.Component {
  state = {
    inputName: '',
    isDisabled: false,
    isLoading: false,
  }

  handleChange = ({ target: { value } }) => {
    const inputMin = 3;
    this.setState({ inputName: value });
    this.setState({ isDisabled: value.length >= inputMin });
  }

  handleClick = async () => {
    const { history } = this.props;
    this.setState({ isLoading: true });
    const { inputName } = this.state;
    await createUser({ name: inputName });
    history.push('/search');
  }

  render() {
    const { inputName, isDisabled, isLoading } = this.state;

    return (
      <div data-testid="page-login">
        <input
          data-testid="login-name-input"
          value={ inputName }
          onChange={ this.handleChange }
        />
        <button
          type="button"
          data-testid="login-submit-button"
          disabled={ !isDisabled }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
        { isLoading && <Loading /> }
      </div>
    );
  }
}

export default Login;

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
