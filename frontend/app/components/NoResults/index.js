import { Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const NoResults = () => {

  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%'
    }
  });

  return (
    <View style={styles.container}>
      <Text category='h1'>No results</Text>
    </View>
  );
};

export default NoResults;
