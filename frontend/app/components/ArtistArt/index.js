import React, { useContext } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { ThemeContext } from '../../themes/theme-context';

var windowWidth = Dimensions.get('window').width;

const formatImageURL = (url, width, height) => {
  return url.replace('{w}', width).replace('{h}', height);
};

const ArtistArt = (props) => {
  const { url, width, height } = props.artwork ? props.artwork : {};
  const themeContext = useContext(ThemeContext);

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
      alignItems: 'center',
      backgroundColor: themeContext.theme['color-primary-300'],
      justifyContent: 'center'
    },
    largeImage: {
      width: 150,
      height: 150,
      borderRadius: 4,
      margin: 10,
    },
    extraLargeImage: {
      width: windowWidth,
      height: 400,
    }
  });

  let imageStyle = styles.image;
  if (props.size === 'large') {
    imageStyle = styles.largeImage;
  } else if (props.size === 'extra-large') {
    imageStyle = styles.extraLargeImage;
  }

  return (
    <View style={styles.container}>
      {url ? 
        <Image style={imageStyle} source={{uri: formatImageURL(url, width, height)}}/>
        : <View style={imageStyle}>
          <Ionicons name="person" size={50} />
        </View>
      }
    </View>
  );
};

ArtistArt.propTypes = {
  artwork: PropTypes.object,
  size: PropTypes.oneOf(['large', 'extra-large']),
};

export default ArtistArt;
