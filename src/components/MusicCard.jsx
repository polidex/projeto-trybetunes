import React from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

export default class MusicCard extends React.Component {
  state = {
    isLoading: false,
  }

  handleClick = async () => {
    const { music } = this.props;
    this.setState({ isLoading: true });
    await addSong(music);
    this.setState({ isLoading: false });
  }

  render() {
    const { music } = this.props;
    const { isLoading } = this.state;
    return (
      <div>
        { isLoading && <Loading />}
        <p>{music.trackName}</p>
        <label htmlFor="favorite">
          <input
            data-testid={ `checkbox-music-${music.trackId}` }
            name="favorite"
            type="checkbox"
            onClick={ this.handleClick }
          />
          Favorita
        </label>
        <audio data-testid="audio-component" src={ music.previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
          .
        </audio>
      </div>
    );
  }
}

MusicCard.propTypes = {
  music: PropTypes.objectOf().isRequired,
};
