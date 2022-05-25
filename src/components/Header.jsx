import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

export default class Header extends React.Component {
  state = {
    isLoading: false,
    user: {},
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    this.setState({ user: await getUser() });
    this.setState({ isLoading: false });
  }

  render() {
    const { isLoading, user } = this.state;
    return (
      <header data-testid="header-component">
        { isLoading
          ? <Loading />
          : (
            <div>
              <h1 data-testid="header-user-name">
                { user.name }
              </h1>
              <Link data-testid="link-to-search" to="/search">Pesquisa</Link>
              <Link data-testid="link-to-favorites" to="/favorites">Favoritas</Link>
              <Link data-testid="link-to-profile" to="/profile">Perfil</Link>
            </div>
          )}
      </header>
    );
  }
}
