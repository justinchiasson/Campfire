import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from '../../screens/Search';
import Song from '../../screens/Song';

const Stack = createNativeStackNavigator();

const SearchNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Search" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Song" component={Song} />
    </Stack.Navigator>
  );
};

export default SearchNavigator;
