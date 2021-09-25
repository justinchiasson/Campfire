import React from 'react';
import { default as theme } from '../../../theme.json';
import { TopNavigation, Text, Button } from '@ui-kitten/components';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = () => {
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
            style={{ backgroundColor: theme['color-primary-500'] }}
          />
          <View style={styles.container}>
            <Text category='p1'>Welcome back, . Here&apos;s what your friends are listening to:</Text>
            <StatusBar style='light' />
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
});

export default HomeScreen;
