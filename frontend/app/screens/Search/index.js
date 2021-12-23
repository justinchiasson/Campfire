import { useLazyQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/core';
import { Icon, Input, Text, TopNavigation } from '@ui-kitten/components';
import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport';
import React, { useContext, useEffect, useState } from 'react';
import { Keyboard, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import NoResults from '../../components/NoResults';
import SearchItem from '../../components/SearchItem';
import StyledSpinner from '../../components/StyledSpinner';
import { GET_SONGS } from '../../queries/songs';
import { ThemeContext } from '../../themes/theme-context';

const Search = () => {
  const [inputText, setInputText] = useState('');
  const themeContext = useContext(ThemeContext);
  const insets = useSafeAreaInsets();
  const [handleSearch, { loading, error, data }] = useLazyQuery(GET_SONGS, {
    variables: { search: inputText },
  });
  const navigation = useNavigation();

  const handleTextChange = (e) => {
    setInputText(e);
  };

  useEffect(() => {
    if (inputText !== '') {
      const delaySearch = setTimeout(() => {
        handleSearch({ variables: { search: inputText } });
      }, 1000);
  
      return () => clearTimeout(delaySearch);
    }
  }, [inputText]);

  const handleClickResult = (id, type) => {
    if (type === 'songs') {
      navigation.push('Song', {
        songId: id
      });
    }
  };

  let searchResult;
  if (loading) {
    searchResult = <StyledSpinner />;
  } else if (error) {
    searchResult = <Text>Error: {error.message}</Text>;
  } else if (data) {
    if (data.songs) {
      searchResult = data.songs.map((song) => {
        return (
          <SearchItem key={song.id} attributes={song.attributes} id={song.id} type={song.type} handleClick={handleClickResult} />
        ); 
      });
    } else {
      searchResult = <NoResults />;
    }
  }

  const styles = StyleSheet.create({
    unsafeArea: {
      backgroundColor: themeContext.theme['color-primary-500'],
      paddingTop: insets.top
    },
    topBar: {
      backgroundColor: themeContext.theme['color-primary-500'],
      paddingBottom: 10,
      paddingHorizontal: 20
    },
    searchIcon: {
      height: 20,
      tintColor: themeContext.theme['text-basic-color']
    },
    title: {
      marginHorizontal: 10,
      marginBottom: -10
    },
    input: {
      backgroundColor: themeContext.theme['color-primary-400'],
      borderRadius: 15,
      borderColor: themeContext.theme['color-primary-400']
    },
    inputTextLight: {
      color: themeContext.theme['text-basic-color']
    },
    inputTextDark: {
      color: 'white'
    }
  });

  const SearchIcon = () => (
    <Icon name='search' style={styles.searchIcon} />
  );

  const renderTitle = () => (
    <Text category='h1' style={styles.title}>Search</Text>
  );

  return (
    <>
      <View style={styles.unsafeArea}/>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <TopNavigation
          title={renderTitle}
          style={{ backgroundColor: themeContext.theme['color-primary-500'], marginTop: -15}}
        />
        <View style={styles.topBar}>
          <Input
            placeholder='Search for songs, albums, artists, friends...'
            size='medium'
            accessoryRight={SearchIcon}
            style={styles.input}
            textStyle={themeContext.theme['theme-value'] === 'light' ? styles.inputTextLight : styles.inputTextDark}
            placeholderTextColor={themeContext.theme['color-primary-200']}
            onChangeText={handleTextChange}
          />
        </View>
      </TouchableWithoutFeedback>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        {searchResult}
      </ScrollView>
    </>
  );
};

export default Search;
