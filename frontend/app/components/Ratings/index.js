import { Text } from '@ui-kitten/components';
import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeContext } from '../../themes/theme-context';

const Ratings = () => {
  const themeContext = useContext(ThemeContext);

  const styles = StyleSheet.create({
    title: {
      textAlign: 'center',
      color: themeContext.theme['text-basic-color-more-transparent'],
    }
  });

  return (
    <View>
      <Text category='p2' style={styles.title}>Ratings</Text>
    </View>
  );
};

export default Ratings;
