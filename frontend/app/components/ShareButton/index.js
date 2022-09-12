import React, { useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../themes/theme-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ShareButton = (props) => {
  const themeContext = useContext(ThemeContext);
  const insets = useSafeAreaInsets();

  const handleClick = () => {
    console.log(props.id);
  };

  const styles = StyleSheet.create({
    button: {
      position: 'absolute',
      top: insets.top + 3,
      right: 10,
      zIndex: 2,
    }
  });

  return (
    <TouchableOpacity onPress={handleClick} style={styles.button} >
      <Ionicons name="paper-plane" color={themeContext.theme['text-basic-color']} size={25} />
    </TouchableOpacity>
  );
};

ShareButton.propTypes = {
  id: PropTypes.string,
};

export default ShareButton;
