import React from 'react';
import { View } from 'react-native';

const Card = () => {
  return (
    <View style={styles.containerStyle}>
    
    </View>
  )
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000', // ios
    shadowOffset: {width: 0, height: 2}, // ios
    shadowOpacity: 0.1, // ios
    shadowRadius: 2, // ios
    elevation: 2, // android
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export default Card;
