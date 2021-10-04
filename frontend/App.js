import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { default as theme } from './theme.json';
import { default as mapping } from './mapping.json';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Amplify from 'aws-amplify';
import config from './src/aws-exports';
import { AmplifyTheme, withAuthenticator } from 'aws-amplify-react-native';
import Home from './app/screens/Home';
import Profile from './app/screens/Profile';
import { Ionicons } from '@expo/vector-icons';
import Search from './app/screens/Search';
import Journal from './app/screens/Journal';
import { StatusBar } from 'expo-status-bar';

Amplify.configure({...config, Analytics: {disabled: true}});

const Tab = createBottomTabNavigator();

function App() {
  // load fonts before attempting to display them
  let [loaded] = useFonts({
    DMSerifDisplay: require('./app/assets/fonts/DMSerifDisplay-Regular.ttf'),
    OpenSans: require('./app/assets/fonts/OpenSans-Light.ttf')
  });

  // TODO: loading?
  if (!loaded) {
    return null;
  }

  return (
    <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }} customMapping={mapping}>
      <StatusBar style='light' />
      <NavigationContainer>
        <Tab.Navigator 
          initialRouteName="Home" 
          screenOptions={({ route }) => ({
            headerShown: false, 
            tabBarShowLabel: false, 
            tabBarActiveTintColor: theme['color-primary-200'], 
            tabBarInactiveTintColor: theme['color-primary-300'], 
            tabBarStyle: { backgroundColor: '#4E4456', borderTopWidth: 0 },
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused
                  ? 'bonfire'
                  : 'bonfire-outline';
              } else if (route.name === 'Journal') {
                iconName = focused
                  ? 'create'
                  : 'create-outline';
              } else if (route.name === 'Search') {
                iconName = focused
                  ? 'search'
                  : 'search-outline';
              } else if (route.name === 'Profile') {
                iconName = focused
                  ? 'person'
                  : 'person-outline';
              }
              return <Ionicons name={iconName} size={size} color={color}/>;
            }
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Journal" component={Journal} />
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
}

const customContainer = Object.assign({}, AmplifyTheme.container, { backgroundColor: theme['color-primary-500'] });
const customSectionHeaderText = Object.assign({}, AmplifyTheme.sectionHeaderText, { color: theme['color-primary-100'] });
const customButton = Object.assign({}, AmplifyTheme.button, { backgroundColor: '#3C3540' });
const customButtonText = Object.assign({}, AmplifyTheme.buttonText, { color: theme['color-primary-100'] });
const customInput = Object.assign({}, AmplifyTheme.input, { color: theme['color-primary-300'], borderColor: theme['color-primary-300'] });
const customInputLabel = Object.assign({}, AmplifyTheme.inputLabel, { color: theme['color-primary-100'] });
const customSignedOutMessage = Object.assign({}, AmplifyTheme.signedOutMessage, { color: theme['color-primary-100'] });
const customSectionFooterLink = Object.assign({}, AmplifyTheme.sectionFooterLink, { color: theme['color-primary-300'] });
const customButtonDisabled = Object.assign({}, AmplifyTheme.buttonDisabled, { backgroundColor: '#37313A' });
const authenticatorTheme = Object.assign({}, AmplifyTheme,
  {
    container: customContainer,
    sectionHeaderText: customSectionHeaderText,
    button: customButton,
    buttonText: customButtonText,
    input: customInput,
    inputLabel: customInputLabel,
    signedOutMessage: customSignedOutMessage,
    sectionFooterLink: customSectionFooterLink,
    buttonDisabled: customButtonDisabled
  });

export default withAuthenticator(App, {
  theme: authenticatorTheme,
  signUpConfig: {
    hiddenDefaults: ['phone_number']
  }
});
