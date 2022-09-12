import React, { useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../themes/theme-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const BackButton = ({ navigation }) => {
  const themeContext = useContext(ThemeContext);
  const insets = useSafeAreaInsets();

  const handleClick = () => {
    navigation.goBack();
  };

  const styles = StyleSheet.create({
    back: {
      position: 'absolute',
      top: insets.top,
      left: 5,
      zIndex: 2,
    }
  });

  return (
    <TouchableOpacity onPress={handleClick} style={styles.back}>
      <Ionicons name="chevron-back" color={themeContext.theme['text-basic-color']} size={30} />
    </TouchableOpacity>
  );
};

BackButton.propTypes = {
  navigation: PropTypes.object,
};

export default BackButton;
