import React from 'react';
import { TopNavigation, Text, Button } from '@ui-kitten/components';
import { StyleSheet, View, Image, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { useEffect } from 'react';
import { Auth } from 'aws-amplify';
import StyledCard from '../../components/StyledCard';
import { ThemeContext } from '../../themes/theme-context';

const Home = () => {
  const themeContext = React.useContext(ThemeContext);
  const [user, setUser] = useState();

  const renderTitle = () => (
    <View style={styles.titleContainer}>
      {themeContext.theme['theme-value'] === 'light' 
        ? <Image style={styles.logo} source={require('../../assets/title-light.png')} />
        : <Image style={styles.logo} source={require('../../assets/title-dark.png')} />
      }
    </View>
  );
  
  useEffect(() => {
    const fetchUser = async () => {
      const { attributes } = await Auth.currentAuthenticatedUser();
      setUser(attributes);
    };
  
    fetchUser();
  }, []);
  
  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: themeContext.theme['color-primary-500'] }} />
      <SafeAreaView style={styles.container}>
        <TopNavigation
          title={renderTitle}
          style={{ backgroundColor: themeContext.theme['color-primary-500'], marginTop: -5 }}
        />
        <StyledCard>
          <Text category='h5' style={styles.cardText}>Welcome back, {user && user.email}. Here&apos;s what your friends are listening to:</Text>
        </StyledCard>
        <View style={styles.container}>
          <Button onPress={signOut}>Sign Out</Button>
        </View>
      </SafeAreaView>
    </>
  );
};

const signOut = () => {
  Auth.signOut();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    textAlign: 'center',
    margin: -8
  },
  titleContainer: {
    flexDirection: 'row',
    paddingLeft: 5
  },
  logo: {
    width: 120,
    maxHeight: 50,
    resizeMode: 'contain'
  }
});

export default Home;
