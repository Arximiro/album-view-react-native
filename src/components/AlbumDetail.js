import React from 'react';
import { View, Text, Image, Linking } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = (props) => {
  const {title, artist, url, image, thumbnail_image} = props;
  const {thumbnail, textContainer, titleText, albumArt} = styles;

  return (
    <Card>
      <CardSection>
        <View>
          <Image
            style={thumbnail}
            source={{uri: thumbnail_image}} />
        </View>
        <View style={textContainer}>
          <Text style={titleText}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image 
          style={albumArt}
          source={{uri: image}}
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  )
};

const styles = {
  textContainer: {
    marginLeft: 15,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 20
  },
  thumbnail: {
    height: 50,
    width: 50
  },
  albumArt: {
    height: 375,
    flex: 1
  },
  button: {

  }
};

export default AlbumDetail;
