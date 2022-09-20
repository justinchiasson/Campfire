import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import { Divider, Text } from '@ui-kitten/components';
import { useQuery } from '@apollo/client';
import { GET_SONG } from '../../queries/songs';
import StyledSpinner from '../../components/StyledSpinner';
import NoResults from '../../components/NoResults';
import { ScrollView, StyleSheet, View, Animated } from 'react-native';
import SongTitle from '../../components/SongTitle';
import AlbumArt from '../../components/AlbumArt';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { ThemeContext } from '../../themes/theme-context';
import Ratings from '../../components/Ratings';
import YourReview from '../../components/YourReview';
import Header from '../../components/Header';

const Song = ({ route, navigation }) => {
  const { songId } = route.params;
  const themeContext = useContext(ThemeContext);
  const { loading, error, data } = useQuery(GET_SONG, {
    variables: { id: songId },
  });
  const scrollY = useRef(new Animated.Value(0)).current;

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

  const handleClickAlbum = () => {
    navigation.push('Album', {
      albumId: data.song.relationships.albums.data[0].id
    });
  };

  const maskElement = <LinearGradient style={{ flex: 1 }} colors={['black', 'transparent']} />;

  const opacityBackground = scrollY.interpolate({
    inputRange: [200, 220],
    outputRange: [0, 0.65],
    extrapolate: 'clamp'
  });

  const opacityBlur = scrollY.interpolate({
    inputRange: [200, 220],
    outputRange: [0, 50],
    extrapolate: 'clamp'
  });

  const opacityTitle = scrollY.interpolate({
    inputRange: [230, 250],
    outputRange: [0, 1],
    extrapolate: 'clamp'
  });

  return (
    <>
      <MaskedView maskElement={maskElement}>
        <View style={styles.headerImage}>
          <AlbumArt artwork={data.song.attributes.artwork} size={'extra-large'}/>
        </View>
      </MaskedView>
      <ScrollView 
        bounces={true} 
        style={styles.scroller}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
      >
        <View style={styles.spacer} />
        <SongTitle
          attributes={data.song.attributes}
          type='song'
          handleClick={handleClickAlbum}
        />
        <Divider style={styles.divider} />
        <Ratings />
        <Divider style={styles.divider} />
        <YourReview songId={songId} />
        <Divider style={styles.divider} />
      </ScrollView>
      <Header 
        title={data.song.attributes.name} 
        opacityBackground={opacityBackground} 
        opacityBlur={opacityBlur} 
        opacityTitle={opacityTitle} 
        navigation={navigation}
        itemID={data.song.id}
      />
    </>
  );
};

Song.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
};

export default Song;
