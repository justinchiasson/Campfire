import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 4,
    margin: 10,
  }
});

const formatImageURL = (url, width, height) => {
  return url.replace('{w}', width).replace('{h}', height);
};

const AlbumArt = (props) => {
  const { url, width, height } = props.artwork;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: formatImageURL(url, width, height)}}/>
    </View>
  );
};

AlbumArt.propTypes = {
  artwork: PropTypes.object.isRequired
};

export default AlbumArt;
