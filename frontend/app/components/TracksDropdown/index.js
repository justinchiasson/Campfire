import { Text } from '@ui-kitten/components';
import React, { useContext, useState } from 'react';
import { LayoutAnimation, Platform, StyleSheet, UIManager, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ThemeContext } from '../../themes/theme-context';
import PropTypes from 'prop-types';
import Track from '../Track';
import { Ionicons } from '@expo/vector-icons';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const TracksDropdown = (props) => {
  const [open, setOpen] = useState(false);
  const themeContext = useContext(ThemeContext);

  const styles = StyleSheet.create({
    title: {
      textAlign: 'center',
      color: themeContext.theme['text-basic-color-more-transparent'],
      marginRight: 4
    },
    titleAndIcon: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    titleContainer: {
      flexDirection: 'column',
      alignItems: 'center'
    }
  });

  let trackList;
  if (props.tracks?.data) {
    trackList = props.tracks.data.map((track) => {
      return (
        <Track key={track.id} attributes={track.attributes} id={track.id} handleClick={props.handleClick} />
      );
    });
  }

  return (
    <>
      <TouchableOpacity onPress={() => { 
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setOpen(!open);
      }}>
        <View style={styles.titleContainer}>
          <View style={styles.titleAndIcon}>
            <Text category='p2' style={styles.title}>Tracks</Text>
            {open ? 
              <Ionicons name='chevron-up' color={themeContext.theme['text-basic-color-more-transparent']} />
              : <Ionicons name='chevron-down' color={themeContext.theme['text-basic-color-more-transparent']} />
            }
          </View>
        </View>
      </TouchableOpacity>
      {open && (
        <View>
          {trackList}
        </View>
      )}
    </>
  );
};

TracksDropdown.propTypes = {
  tracks: PropTypes.object,
  handleClick: PropTypes.func
};

export default TracksDropdown;
