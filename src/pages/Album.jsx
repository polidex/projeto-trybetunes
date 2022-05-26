import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

export default class Album extends React.Component {
  state = {
    musicList: [],
    artist: '',
    album: '',
  }

  componentDidMount() {
    this.getMusicsToState();
  }

  getMusicsToState = async () => {
    const { match: { params: { id } } } = this.props;
    const musicList = await getMusics(id);
    this.setState({ musicList: musicList.filter((music) => music.trackName),
      artist: musicList[0].artistName,
      album: musicList[0].collectionName,
    });
  }

  render() {
    const { musicList, artist, album } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <h2 data-testid="artist-name">{ artist }</h2>
        <h4 data-testid="album-name">{ album }</h4>
        {
          musicList.map((music) => <MusicCard key={ music.trackName } music={ music } />)
        }
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.objectOf().isRequired,
};
