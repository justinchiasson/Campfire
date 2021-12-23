import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

var width = Dimensions.get('window').width;

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
  },
  largeImage: {
    width: 150,
    height: 150,
    borderRadius: 4,
    margin: 10,
  },
  extraLargeImage: {
    width: width,
    height: 200,
  }
});

const formatImageURL = (url, width, height) => {
  return url.replace('{w}', width).replace('{h}', height);
};

const AlbumArt = (props) => {
  const { url, width, height } = props.artwork;

  let imageStyle = styles.image;
  if (props.size === 'large') {
    imageStyle = styles.largeImage;
  } else if (props.size === 'extra-large') {
    imageStyle = styles.extraLargeImage;
  }

  return (
    <View style={styles.container}>
      <Image style={imageStyle} source={{uri: formatImageURL(url, width, height)}}/>
    </View>
  );
};

AlbumArt.propTypes = {
  artwork: PropTypes.object.isRequired,
  size: PropTypes.oneOf(['large', 'extra-large']),
};

export default AlbumArt;
