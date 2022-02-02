import { Button, Icon, Text } from '@ui-kitten/components';
import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ThemeContext } from '../../themes/theme-context';

const YourReview = () => {
  const themeContext = useContext(ThemeContext);
  let reviewExists = false;

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
  });

  const JournalIcon = () => (
    <Icon name='create-outline' style={styles.journalIcon} />
  );

  return (
    <View style={styles.container}>
      {reviewExists ?
        <>
          <Text category='p2' style={styles.title}>Your review</Text><View style={styles.textContainer}>
            <Text category='c1' style={styles.reviewText}>Kanyes big year culminates in an LP that feels like an instant greatest hits, the ultimate realization of his strongest talents and divisive public persona.</Text>
          </View>
        </>
        : <TouchableOpacity>
          <Button appearance='ghost' accessoryRight={JournalIcon} style={styles.button}>Write a Review</Button>
        </TouchableOpacity>}
    </View>
  );
};

export default YourReview;
