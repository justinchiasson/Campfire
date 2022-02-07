import { useNavigation } from '@react-navigation/native';
import { Button, Icon, Text } from '@ui-kitten/components';
import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ThemeContext } from '../../themes/theme-context';
import PropTypes from 'prop-types';
import RatingStars from '../RatingStars';
import FireIcon from '../../assets/svg/FireIcon';

const YourReview = (props) => {
  const themeContext = useContext(ThemeContext);
  const navigation = useNavigation();

  const handleClickWriteReview = () => {
    navigation.jumpTo('Journal', {
      songId: props.songId
    });
  };

  let reviewExists = true;
  let rating = 4.5;
  let liked = true;

  const styles = StyleSheet.create({
    title: {
      textAlign: 'center',
      color: themeContext.theme['text-basic-color-more-transparent'],
    },
    container: {
      alignItems: 'center'
    },
    textContainer: {
      margin: 8,
      marginTop: 0,
    },
    reviewText: {
      color: themeContext.theme['text-basic-color'],
    },
    journalIcon: {
      height: 20,
      marginBottom: 2,
      marginLeft: -5,
      tintColor: themeContext.theme['text-basic-color-more-transparent']
    },
    starsContainer: {
      margin: 8,
      display: 'flex',
      flexDirection: 'row',
    },
    filler: {
      flexGrow: 1,
    }
  });

  const JournalIcon = () => (
    <Icon name='create-outline' style={styles.journalIcon} />
  );

  return (
    <View style={styles.container}>
      {reviewExists ?
        <>
          <Text category='p2' style={styles.title}>Your review</Text>
          <TouchableOpacity>
            <View style={styles.starsContainer}>
              <RatingStars rating={rating} />
              <View style={styles.filler} />
              {liked && <FireIcon />}
            </View>
            <View style={styles.textContainer}>
              <Text category='c1' style={styles.reviewText}>Kanyes big year culminates in an LP that feels like an instant greatest hits, the ultimate realization of his strongest talents and divisive public persona.</Text>
            </View>
          </TouchableOpacity>
        </>
        : <TouchableOpacity onPress={handleClickWriteReview}>
          <Button appearance='ghost' accessoryRight={JournalIcon} style={styles.button}>Write a Review</Button>
        </TouchableOpacity>}
    </View>
  );
};

YourReview.propTypes = {
  songId: PropTypes.string
};

export default YourReview;
