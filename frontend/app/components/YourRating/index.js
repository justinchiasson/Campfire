import { Text } from '@ui-kitten/components';
import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeContext } from '../../themes/theme-context';
import RatingStars from '../RatingStars';

const YourRating = () => {
  const themeContext = useContext(ThemeContext);

  const styles = StyleSheet.create({
    title: {
      textAlign: 'center',
      color: themeContext.theme['text-basic-color-more-transparent'],
    },
    container: {
      alignItems: 'center'
    },
    ratingStars: {
      marginTop: 5,
    }
  });

  return (
    <View style={styles.container}>
      <Text category='p2' style={styles.title}>Your rating</Text>
      <View style={styles.ratingStars}>
        <RatingStars rating={4.5} />
      </View>
    </View>
  );
};

export default YourRating;
