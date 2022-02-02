import { Text } from '@ui-kitten/components';
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import StarRating from 'react-native-star-rating-widget';
import { ThemeContext } from '../../themes/theme-context';
import * as Haptics from 'expo-haptics';

const YourRating = () => {
  const themeContext = useContext(ThemeContext);
  const [rating, setRating] = useState(0);

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

  useEffect(() => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  }, [rating]);

  const changeRating = (rate) => {
    if (rate !== rating) {
      setRating(rate);
    }
  };

  return (
    <View style={styles.container}>
      <Text category='p2' style={styles.title}>Your rating</Text>
      <View style={styles.ratingStars}>
        <StarRating 
          rating={rating}
          onChange={changeRating}
          color={themeContext.theme['text-basic-color']}
          starSize={40}
          minRating={0}
        />
      </View>
    </View>
  );
};

export default YourRating;
