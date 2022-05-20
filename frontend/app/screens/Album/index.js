import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../themes/theme-context';
import { useQuery } from '@apollo/client';
import { GET_ALBUM } from '../../queries/albums';
import { StyleSheet, View } from 'react-native';
import StyledSpinner from '../../components/StyledSpinner';
import { Divider, Text } from '@ui-kitten/components';
import NoResults from '../../components/NoResults';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import AlbumArt from '../../components/AlbumArt';
import { ScrollView } from 'react-native-gesture-handler';
import SongTitle from '../../components/SongTitle';
import Ratings from '../../components/Ratings';
import YourReview from '../../components/YourReview';
import TracksDropdown from '../../components/TracksDropdown';

const Album = ({ route }) => {
  const { albumId } = route.params;
  const themeContext = useContext(ThemeContext);
  const { loading, error, data } = useQuery(GET_ALBUM, {
    variables: { id: albumId },
  });

  const styles = StyleSheet.create({
    headerImage: {
      justifyContent: 'center',
      alignContent: 'center',
    },
    divider: {
      backgroundColor: themeContext.theme['color-primary-500-transparent'],
      margin: 10
    },
    scroller: {
      marginTop: -400
    },
    spacer: {
      height: 300,
    }
  });

  if (loading) {
    return <StyledSpinner />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  if (!data.album) {
    return <NoResults />;
  }

  const maskElement = <LinearGradient style={{ flex: 1 }} colors={['black', 'transparent']} />;

  return (
    <>
      <MaskedView maskElement={maskElement}>
        <View style={styles.headerImage}>
          <AlbumArt artwork={data.album.attributes.artwork} size={'extra-large'}/>
        </View>
      </MaskedView>
      <ScrollView bounces={true} style={styles.scroller} >
        <View style={styles.spacer} />
        <SongTitle attributes={data.album.attributes} type='album' />
        <Divider style={styles.divider} />
        <TracksDropdown tracks={data.album.relationships.tracks} />
        <Divider style={styles.divider} />
        <Ratings />
        <Divider style={styles.divider} />
        <YourReview songId={albumId} />
        <Divider style={styles.divider} />
      </ScrollView>
    </>
  );
};

Album.propTypes = {
  route: PropTypes.object
};

export default Album;
