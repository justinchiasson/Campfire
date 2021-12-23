import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import AlbumArt from '../AlbumArt';
import PropTypes from 'prop-types';
import { Divider, Text } from '@ui-kitten/components';
import { ThemeContext } from '../../themes/theme-context';

const SearchItem = (props) => {
  const themeContext = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
    },
    textContainer: {
      marginRight: 10,
      flexShrink: 1,
      justifyContent: 'center'
    },
    divider: {
      backgroundColor: themeContext.theme['color-primary-500'],
      marginHorizontal: 10
    },
    albumText: {
      color: themeContext.theme['text-basic-color-more-transparent'],
      marginTop: 2.5
    },
    artistText: {
      color: themeContext.theme['text-basic-color-more-transparent'],
      marginTop: 3
    }
  });

  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={() => props.handleClick(props.id, props.type)}>
        <AlbumArt artwork={props.attributes.artwork} />
        <View style={styles.textContainer}>
          <Text numberOfLines={1} category='s1'>{props.attributes.name}</Text>
          <Text numberOfLines={1} category='s2' style={styles.artistText}>{props.attributes.artistName}</Text>
          <Text numberOfLines={1} category='h6' style={styles.albumText}>{props.attributes.albumName}</Text>
        </View>
      </TouchableOpacity>
      <Divider style={styles.divider} />
    </View>
  );
};

SearchItem.propTypes = {
  attributes: PropTypes.object,
  handleClick: PropTypes.func,
  id: PropTypes.string,
  type: PropTypes.string
};

export default SearchItem;
