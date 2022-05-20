import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from '../../screens/Search';
import Song from '../../screens/Song';
import Album from '../../screens/Album';

const Stack = createNativeStackNavigator();

const SearchNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Search" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Song" component={Song} />
      <Stack.Screen name="Album" component={Album} />
    </Stack.Navigator>
  );
};

export default SearchNavigator;
