import React, { useContext } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import PropTypes from 'prop-types';
import { Text } from '@ui-kitten/components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../../themes/theme-context';
import { BlurView } from 'expo-blur';
import BackButton from '../BackButton';
import ShareButton from '../ShareButton';

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

const Header = (props) => {
  const themeContext = useContext(ThemeContext);
  const insets = useSafeAreaInsets();

  const styles = StyleSheet.create({
    blur: {
      zIndex: 1,
      position: 'absolute',
      height: insets.top + 35,
      width: '100%',
    },
    background: {
      zIndex: 1,
      position: 'absolute',
      height: insets.top + 35,
      width: '100%',
      backgroundColor: themeContext.theme['color-primary-500'],
    },
    title: {
      display: 'flex',
      position: 'absolute',
      top: insets.top + 5,
      left: 0,
      width: '100%',
      alignItems: 'center',
      zIndex: 2,
    }
  });

  return (
    <>
      <AnimatedBlurView intensity={props.opacityBlur} style={styles.blur} />
      <Animated.View style={{...styles.background, opacity: props.opacityBackground}} />
      <Animated.View style={{...styles.title, opacity: props.opacityTitle}}>
        <View>
          <Text category='h3'>{props.title}</Text>
        </View>
      </Animated.View>
      <BackButton navigation={props.navigation} />
      <ShareButton id={props.itemID} />
    </>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  opacityBlur: PropTypes.object,
  opacityBackground: PropTypes.object,
  opacityTitle: PropTypes.object,
  navigation: PropTypes.object,
  itemID: PropTypes.string,
};

export default Header;
