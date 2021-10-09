import { Button } from '@ui-kitten/components';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemeContext } from '../../themes/theme-context';

const Profile = () => {
  const themeContext = React.useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Button onPress={themeContext.toggleTheme}>TOGGLE THEME</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Profile;
