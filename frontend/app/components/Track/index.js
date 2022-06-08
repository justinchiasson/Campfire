import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeContext } from '../../themes/theme-context';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from '@ui-kitten/components';

const Track = (props) => {
  const themeContext = useContext(ThemeContext);

  const styles = StyleSheet.create({
    title: {
      textAlign: 'center',
      color: themeContext.theme['text-basic-color-more-transparent'],
    },
    container: {
      flexDirection: 'row',
      margin: 8,
    },
    trackNumberText: {
      color: themeContext.theme['text-basic-color-more-transparent'],
      marginHorizontal: 15,
      marginTop: 1
    },
  });

  return (
    <View>
      <TouchableOpacity onPress={() => props.handleClick(props.id, 'songs')}>
        <View style={styles.container}>
          <Text category='p2' style={styles.trackNumberText}>{props.attributes.trackNumber}</Text>
          <View>
            <Text category='h3'>{props.attributes.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

Track.propTypes = {
  attributes: PropTypes.object,
  handleClick: PropTypes.func,
  id: PropTypes.string
};

export default Track;
