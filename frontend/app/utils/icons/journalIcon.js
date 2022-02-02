import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

export const JournalIcons = {
  name: 'create-outline',
  icons: createIconsMap(),
};

function createIconsMap() {
  return new Proxy({}, {
    get(target, name) {
      return IconProvider(name);
    },
  });
}

const IconProvider = (name) => ({
  toReactElement: (props) => JournalIcon({ name, ...props }),
});

const JournalIcon = ({ name, style }) => {
  const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
  return (
    <Ionicons name={name} size={height} color={tintColor} style={iconStyle} />
  );
};

JournalIcon.propTypes = {
  name: PropTypes.string,
  style: PropTypes.object
};
