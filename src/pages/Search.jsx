import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  state = {
    inputArtist: '',
    isDisabled: false,
  }

  handleChange = ({ target: { value } }) => {
    const inputMin = 2;
    this.setState({ inputArtist: value });
    this.setState({ isDisabled: value.length >= inputMin });
  }

  render() {
    const { inputArtist, isDisabled } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <input
          data-testid="search-artist-input"
          value={ inputArtist }
          onChange={ this.handleChange }
        />
        <button
          type="button"
          data-testid="search-artist-button"
          disabled={ !isDisabled }
        >
          Pesquisar
        </button>
      </div>
    );
  }
}

export default Search;
