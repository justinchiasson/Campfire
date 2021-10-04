import React from 'react';
import { default as theme } from '../../../theme.json';
import { TopNavigation, Text, Button } from '@ui-kitten/components';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { useEffect } from 'react';
import { Auth } from 'aws-amplify';
import StyledCard from '../../components/StyledCard';

const Home = () => {
  const [user, setUser] = useState();
  
  useEffect(() => {
    const fetchUser = async () => {
      const { attributes } = await Auth.currentAuthenticatedUser();
      setUser(attributes);
    };
  
    fetchUser();
  }, []);
  console.log(user);
  
  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: theme['color-primary-500'] }} />
      <LinearGradient
        colors={['#37313A', theme['color-primary-500']]}
        style={{ flex: 1 }}
      >
        <SafeAreaView style={styles.container}>
          <TopNavigation
            title={'Campfire'}
            style={{ backgroundColor: theme['color-primary-500'], marginTop: -5 }}
          />
          <StyledCard>
            <Text category='s2' style={styles.cardText}>Welcome back, {user && user.email}. Here&apos;s what your friends are listening to:</Text>
          </StyledCard>
          <View style={styles.container}>
            <Button onPress={signOut}>Sign Out</Button>
          </View>
        </SafeAreaView>
      </LinearGradient>
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
  }
});

export default Home;
