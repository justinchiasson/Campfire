import { Text } from '@ui-kitten/components';
import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import AlbumArt from '../AlbumArt';
import { ThemeContext } from '../../themes/theme-context';
import { dateToYear, millisToMinutesAndSeconds } from '../../utils/dateTimeHelpers';

const SongTitle = (props) => {
  const themeContext = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
    },
    textContainer: {
      marginHorizontal: 10,
      marginTop: 10,
      flexShrink: 1
    },
    divider: {
      backgroundColor: themeContext.theme['color-primary-500'],
      marginHorizontal: 10
    },
    albumText: {
      color: themeContext.theme['text-basic-color-transparent'],
      marginTop: 5
    },
    artistText: {
      color: themeContext.theme['text-basic-color-transparent'],
      marginTop: 5
    },
    albumArt: {
      justifyContent: 'flex-end',
    },
    filler: {
      flexGrow: 1,
    },
    details: {
      flexDirection: 'row',
    },
    detailText: {
      color: themeContext.theme['text-basic-color-more-transparent'],
      marginTop: 8,
    },
  });

  const duration = millisToMinutesAndSeconds(props.attributes.durationInMillis);
  const year = dateToYear(props.attributes.releaseDate);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text category='h1'>{props.attributes.name}</Text>
        <Text category='h3' style={styles.artistText}>{props.attributes.artistName}</Text>
        <Text category='h3' style={styles.albumText}>{props.attributes.albumName}</Text>
        <View style={styles.details}>
          <Text category='p2' style={styles.detailText}>{year} - </Text>
          <Text category='p2' style={styles.detailText}>{duration}</Text>
        </View>
      </View>
      <View style={styles.filler} />
      <View style={styles.albumArt}>
        <AlbumArt artwork={props.attributes.artwork} size={'large'} />
      </View>
    </View>
  );
};

SongTitle.propTypes = {
  attributes: PropTypes.object,
};

export default SongTitle;
