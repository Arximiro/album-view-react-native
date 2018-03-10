import React from 'react';
import { View, Text, Image } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({title, artist, url, image, thumbnail_image}) => {
  return (
    <Card>
      <CardSection>
        <View>
          <Image
            style={{width: 50, height: 50}}
            source={{uri: thumbnail_image}} />
        </View>
        <View style={styles.textContainer}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
    </Card>
  )
};

const styles = {
  textContainer: {
    marginLeft: 15,
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
};

export default AlbumDetail;
