import React from 'react';
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
          ? <Loading /> : <h1 data-testid="header-user-name">{ user.name }</h1> }
      </header>
    );
  }
}
