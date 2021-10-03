import React from 'react';
import { Card } from '@ui-kitten/components';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

const StyledCard = ({ children }) => {
  return(
    <View style={styles.container}>
      <Card style={styles.card} appearance='filled'>{children}</Card>
    </View>
  );
};

StyledCard.propTypes = {
  children: PropTypes.node
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#4E4456',
    elevation: 5
  },
  container: {
    paddingTop: 20,
    width: '90%',
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
  }
});

export default StyledCard;
