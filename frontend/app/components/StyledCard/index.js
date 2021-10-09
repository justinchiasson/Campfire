import React from 'react';
import { Card } from '@ui-kitten/components';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { ThemeContext } from '../../../theme-context';

const StyledCard = ({ children }) => {
  const themeContext = React.useContext(ThemeContext);
  
  const styles = StyleSheet.create({
    card: {
      backgroundColor: themeContext.theme['color-primary-500'],
      elevation: 5
    },
    container: {
      paddingTop: 20,
      width: '85%',
      shadowRadius: 4,
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.25,
    }
  });
  
  return(
    <View style={styles.container}>
      <Card style={styles.card} appearance='filled'>{children}</Card>
    </View>
  );
};

StyledCard.propTypes = {
  children: PropTypes.node
};

export default StyledCard;
