import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = {
    albums: []
  };

  async componentDidMount() {
    const response = await axios.get('https://rallycoding.herokuapp.com/api/music_albums');
    this.setState({albums: response.data})
    console.log(response.data);
  }

  renderAlbums = () => {
    return this.state.albums.map(album =>
    <AlbumDetail
      key={album.title}
      title={album.title}
      artist={album.artist}
      url={album.url}
      image={album.image}
      thumbnail_image={album.thumbnail_image}
    />);
  };

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
