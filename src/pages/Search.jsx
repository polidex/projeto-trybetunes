import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from '../components/Loading';

class Search extends React.Component {
  state = {
    inputArtist: '',
    isDisabled: false,
    isLoading: false,
    searchedName: '',
    searchList: [],

  }

  handleChange = ({ target: { value } }) => {
    const inputMin = 2;
    this.setState({ inputArtist: value });
    this.setState({ isDisabled: value.length >= inputMin });
  }

  handleClick = async () => {
    const { inputArtist } = this.state;
    this.setState({ inputArtist: '', isLoading: true, searchedName: inputArtist });
    const searchList = await searchAlbumsAPI(inputArtist);
    this.setState({ isLoading: false, searchList });
  }

  render() {
    const { inputArtist, isDisabled, isLoading, searchedName, searchList } = this.state;
    console.log(searchList);
    return (
      <div data-testid="page-search">
        <Header />
        {
          isLoading
            ? <Loading />
            : (
              <>
                <input
                  data-testid="search-artist-input"
                  value={ inputArtist }
                  onChange={ this.handleChange }
                />
                <button
                  type="button"
                  data-testid="search-artist-button"
                  disabled={ !isDisabled }
                  onClick={ this.handleClick }
                >
                  Pesquisar
                </button>
                <p>{ `Resultado de álbuns de: ${searchedName}` }</p>
              </>
            )
        }
        <div>
          {
            (searchList.length === 0 && searchedName.length > 0)
            && <h4>Nenhum álbum foi encontrado</h4>
          }
          {
            searchList.length > 0
              && searchList.map((album) => (
                <div key={ album.collectionId }>
                  <Link
                    data-testid={ `link-to-album-${album.collectionId }` }
                    to={ `/album/${album.collectionId }` }
                  >
                    <img src={ album.artworkUrl100 } alt="Atre do album" />
                    <h4>{album.collectionName}</h4>
                    <p>{album.artistName}</p>
                  </Link>
                </div>
              ))
          }
        </div>
      </div>
    );
  }
}

export default Search;
