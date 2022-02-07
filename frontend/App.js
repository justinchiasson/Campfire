import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { default as lightTheme } from './app/themes/theme-light.json';
import { default as darkTheme } from './app/themes/theme-dark.json';
import { default as mapping } from './app/themes/mapping.json';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Amplify from 'aws-amplify';
import config from './src/aws-exports';
import { AmplifyTheme, withAuthenticator } from 'aws-amplify-react-native';
import Home from './app/screens/Home';
import Profile from './app/screens/Profile';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { ThemeContext } from './app/themes/theme-context';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SearchIcons } from './app/utils/icons/searchIcon';
import SearchNavigator from './app/navigators/SearchNavigator';

Amplify.configure({...config, Analytics: {disabled: true}});

const Tab = createBottomTabNavigator();

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache()
});

function App() {
  const [theme, setTheme] = React.useState(lightTheme);

  const toggleTheme = () => {
    const nextTheme = theme === lightTheme ? darkTheme : lightTheme;
    setTheme(nextTheme);
  };

  const navigationTheme = {
    dark: false,
    colors: {
      primary: theme['color-primary-500'],
      background: theme['color-primary-400'],
      card: theme['color-primary-500'],
      text: '#fff',
      border: '#fff',
      notification: '#ddd'
    }
  };
  
  // load fonts before attempting to display them
  let [loaded] = useFonts({
    PublicSansBold: require('./app/assets/fonts/PublicSans-Bold.ttf'),
    PublicSans: require('./app/assets/fonts/PublicSans-Regular.ttf'),
    PublicSansBoldItalic: require('./app/assets/fonts/PublicSans-BoldItalic.ttf'),
    PublicSansLight: require('./app/assets/fonts/PublicSans-Light.ttf'),
  });

  // TODO: loading?
  if (!loaded) {
    return null;
  }

  return (
    <ApolloProvider client={client}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <IconRegistry icons={SearchIcons} />
        <ApplicationProvider {...eva} theme={theme} customMapping={mapping}>
          <StatusBar style={theme['theme-value'] === 'light' ? 'dark' : 'light'} />
          <SafeAreaProvider>
            <NavigationContainer theme={navigationTheme}>
              <Tab.Navigator 
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                  headerShown: false, 
                  tabBarShowLabel: false, 
                  tabBarActiveTintColor: theme['text-basic-color'], 
                  tabBarInactiveTintColor: theme['text-basic-color-transparent'], 
                  tabBarStyle: { borderTopWidth: 0 },
                  tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                      iconName = focused
                        ? 'bonfire'
                        : 'bonfire-outline';
                      size = 27;
                    } else if (route.name === 'SearchNavigator') {
                      iconName = focused
                        ? 'search'
                        : 'search-outline';
                      size = 20;
                    } else if (route.name === 'Profile') {
                      iconName = focused
                        ? 'person'
                        : 'person-outline';
                      size = 20;
                    }
                    return <Ionicons name={iconName} size={size} color={color}/>;
                  }
                })}
              >
                <Tab.Screen name="Profile" component={Profile} />
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="SearchNavigator" component={SearchNavigator} />
              </Tab.Navigator>
            </NavigationContainer>
          </SafeAreaProvider>
        </ApplicationProvider>
      </ThemeContext.Provider>
    </ApolloProvider>
  );
}

const customContainer = Object.assign({}, AmplifyTheme.container, { backgroundColor: lightTheme['color-primary-500'] });
const customSectionHeaderText = Object.assign({}, AmplifyTheme.sectionHeaderText, { color: lightTheme['color-primary-100'] });
const customButton = Object.assign({}, AmplifyTheme.button, { backgroundColor: lightTheme['color-primary-400'] });
const customButtonText = Object.assign({}, AmplifyTheme.buttonText, { color: lightTheme['color-primary-100'] });
const customInput = Object.assign({}, AmplifyTheme.input, { color: lightTheme['color-primary-300'], borderColor: lightTheme['color-primary-300'] });
const customInputLabel = Object.assign({}, AmplifyTheme.inputLabel, { color: lightTheme['color-primary-100'] });
const customSignedOutMessage = Object.assign({}, AmplifyTheme.signedOutMessage, { color: lightTheme['color-primary-100'] });
const customSectionFooterLink = Object.assign({}, AmplifyTheme.sectionFooterLink, { color: lightTheme['color-primary-300'] });
const customButtonDisabled = Object.assign({}, AmplifyTheme.buttonDisabled, { backgroundColor: lightTheme['color-primary-400'] });
const authenticatorTheme = Object.assign({}, AmplifyTheme, {
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
