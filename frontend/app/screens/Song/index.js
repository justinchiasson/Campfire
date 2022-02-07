import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Divider, Text } from '@ui-kitten/components';
import { useQuery } from '@apollo/client';
import { GET_SONG } from '../../queries/songs';
import StyledSpinner from '../../components/StyledSpinner';
import NoResults from '../../components/NoResults';
import { ScrollView, StyleSheet, View } from 'react-native';
import SongTitle from '../../components/SongTitle';
import AlbumArt from '../../components/AlbumArt';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { ThemeContext } from '../../themes/theme-context';
import Ratings from '../../components/Ratings';
import YourReview from '../../components/YourReview';

const Song = ({ route }) => {
  const { songId } = route.params;
  const themeContext = useContext(ThemeContext);
  const { loading, error, data } = useQuery(GET_SONG, {
    variables: { id: songId },
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

  if (!data.song) {
    return <NoResults />;
  }

  const maskElement = <LinearGradient style={{ flex: 1 }} colors={['black', 'transparent']} />;

  return (
    <>
      <MaskedView maskElement={maskElement}>
        <View style={styles.headerImage}>
          <AlbumArt artwork={data.song.attributes.artwork} size={'extra-large'}/>
        </View>
      </MaskedView>
      <ScrollView bounces={true} style={styles.scroller} >
        <View style={styles.spacer} />
        <SongTitle attributes={data.song.attributes} />
        <Divider style={styles.divider} />
        <Ratings />
        <Divider style={styles.divider} />
        <YourReview songId={songId} />
        <Divider style={styles.divider} />
      </ScrollView>
    </>
  );
};

Song.propTypes = {
  route: PropTypes.object
};

export default Song;
