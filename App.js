import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, TopNavigation, Text, Button } from '@ui-kitten/components';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { default as theme } from './theme.json';
import { default as mapping } from './mapping.json';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function IntroScreen() {
  return (
    <>
    
    <SafeAreaView style={{ flex: 0, backgroundColor: theme['color-primary-500'] }} />
        <LinearGradient
          colors={['#4A414A', theme['color-primary-500']]}
          style={{ flex: 1 }}
        >
          <SafeAreaView style={styles.container}>
            <TopNavigation
              title={'Campfire'}
              style={{ backgroundColor: theme['color-primary-500'] }}
            />
            <View style={styles.container}>
              <Text category='p1'>Open up App.js to start working on your app!</Text>
              <StatusBar style="light" />
              <Button>Sign In</Button>
            </View>
          </SafeAreaView>
        </LinearGradient>
    </>
    
  )
}

function SignInScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Sign in</Text>
    </View>
  )
}

const Stack = createStackNavigator();

export default function App() {
  // load fonts before attempting to display them
  const [loaded] = useFonts({
    PlayfairDisplayBold: require('./assets/fonts/PlayfairDisplay-Bold.ttf'),
  });

  // TODO: loading?
  if (!loaded) {
    return null;
  }

  return (
    <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }} customMapping={mapping}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Intro">
          <Stack.Screen name="Intro" component={IntroScreen} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
