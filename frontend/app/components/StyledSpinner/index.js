import { Spinner } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const StyledSpinner = () => {

  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%'
    }
  });

  return (
    <View style={styles.container}>
      <Spinner size='large' />
    </View>
  );
};

export default StyledSpinner;
