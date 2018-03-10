import React from 'react';
import { View, Text } from 'react-native';

const AlbumDetail = ({title, artist, url, image, thumbnail_image}) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
};

export default AlbumDetail;
