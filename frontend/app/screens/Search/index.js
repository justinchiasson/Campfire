import { useLazyQuery } from '@apollo/client';
import { Icon, Input, Text, TopNavigation } from '@ui-kitten/components';
import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport';
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Keyboard, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GET_SONGS } from '../../queries/songs';
import { ThemeContext } from '../../themes/theme-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GET_ALBUMS } from '../../queries/albums';
import { composeSearchResultAlbums, composeSearchResultSongs } from '../../utils/searchHelpers';

const Search = ({ navigation }) => {
  const [inputText, setInputText] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('songs');
  const themeContext = useContext(ThemeContext);
  const insets = useSafeAreaInsets();

  const [handleSearchSongs, { loading: loadingSongs, error: songsError, data: songsData }] = useLazyQuery(GET_SONGS, {
    variables: { search: inputText },
  });

  const [handleSearchAlbums, { loading: loadingAlbums, error: albumsError, data: albumsData }] = useLazyQuery(GET_ALBUMS, {
    variables: { search: inputText },
  });

  const handleTextChange = (e) => {
    setInputText(e);
  };

  useEffect(() => {
    if (inputText !== '') {
      const delaySearch = setTimeout(() => {        
        if (selectedFilter === 'songs') {
          handleSearchSongs({ variables: { search: inputText } });
        } else if (selectedFilter === 'albums') {
          handleSearchAlbums({ variables: { search: inputText } });
        }
      }, 500);
  
      return () => clearTimeout(delaySearch);
    }
  }, [inputText, selectedFilter]);

  const handleClickResult = (id, type) => {
    if (type === 'songs') {
      navigation.push('Song', {
        songId: id
      });
    }
  };

  let searchResult;
  switch (selectedFilter) {
  case 'songs':
    searchResult = composeSearchResultSongs(loadingSongs, songsError, songsData, handleClickResult);
    break;
  case 'albums':
    searchResult = composeSearchResultAlbums(loadingAlbums, albumsError, albumsData, handleClickResult);
    break;
  }

  const styles = StyleSheet.create({
    unsafeArea: {
      backgroundColor: themeContext.theme['color-primary-500'],
      paddingTop: insets.top
    },
    topBar: {
      backgroundColor: themeContext.theme['color-primary-500'],
      paddingHorizontal: 10,
    },
    searchIcon: {
      height: 20,
      tintColor: themeContext.theme['text-basic-color']
    },
    title: {
      marginHorizontal: 5,
      marginBottom: -10
    },
    input: {
      backgroundColor: themeContext.theme['color-primary-400'],
      borderRadius: 10,
      borderColor: themeContext.theme['color-primary-400'],
    },
    filterButton: {
      backgroundColor: themeContext.theme['color-primary-400'],
      borderRadius: 10,
      borderColor: themeContext.theme['color-primary-400'],
      borderWidth: 1,
      padding: 8,
      marginRight: 5,
      marginTop: 2,
      marginBottom: 7
    },
    selectedFilterButton: {
      backgroundColor: themeContext.theme['color-primary-400'],
      borderRadius: 10,
      borderColor: 'white',
      borderWidth: 1,
      padding: 8,
      marginRight: 5,
      marginTop: 2,
      marginBottom: 7
    },
    inputTextLight: {
      color: themeContext.theme['color-basic-500']
    },
    inputTextDark: {
      color: 'white',
    },
    buttonTextLight: {
      color: themeContext.theme['color-basic-500'],
      fontSize: 12
    },
    buttonTextDark: {
      color: 'white',
      fontSize: 12
    },
    buttonContainer: {
      flexDirection: 'row',
    },
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
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={selectedFilter === 'songs' ? styles.selectedFilterButton : styles.filterButton}
              onPress={() => setSelectedFilter('songs')}
            >
              <Text style={selectedFilter === 'songs' ? styles.buttonTextDark : styles.buttonTextLight}>Songs</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={selectedFilter === 'albums' ? styles.selectedFilterButton : styles.filterButton}
              onPress={() => setSelectedFilter('albums')}
            >
              <Text style={selectedFilter === 'albums' ? styles.buttonTextDark : styles.buttonTextLight}>Albums</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={selectedFilter === 'artists' ? styles.selectedFilterButton : styles.filterButton}
              onPress={() => setSelectedFilter('artists')}
            >
              <Text style={selectedFilter === 'artists' ? styles.buttonTextDark : styles.buttonTextLight}>Artists</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={selectedFilter === 'users' ? styles.selectedFilterButton : styles.filterButton}
              onPress={() => setSelectedFilter('users')}
            >
              <Text style={selectedFilter === 'users' ? styles.buttonTextDark : styles.buttonTextLight}>Users</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        {searchResult}
      </ScrollView>
    </>
  );
};

Search.propTypes = {
  navigation: PropTypes.object
};

export default Search;
