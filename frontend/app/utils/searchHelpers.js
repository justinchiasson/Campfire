import { Text } from '@ui-kitten/components';
import React from 'react';
import NoResults from '../components/NoResults';
import SearchItem from '../components/SearchItem';
import StyledSpinner from '../components/StyledSpinner';

export const composeSearchResultSongs = (loading, error, data, handler) => {
  let searchResult;
  if (loading) {
    searchResult = <StyledSpinner />;
  } else if (error) {
    searchResult = <Text>Error: {error.message}</Text>;
  } else if (data) {
    if (data.songs) {
      searchResult = data.songs.map((song) => {
        return (
          <SearchItem key={song.id} attributes={song.attributes} id={song.id} type={song.type} handleClick={handler} />
        ); 
      });
    } else {
      searchResult = <NoResults />;
    }
  }

  return searchResult;
};

export const composeSearchResultAlbums = (loading, error, data, handler) => {
  let searchResult;
  if (loading) {
    searchResult = <StyledSpinner />;
  } else if (error) {
    searchResult = <Text>Error: {error.message}</Text>;
  } else if (data) {
    if (data.albums) {
      searchResult = data.albums.map((album) => {
        return (
          <SearchItem key={album.id} attributes={album.attributes} id={album.id} type={album.type} handleClick={handler} />
        ); 
      });
    } else {
      searchResult = <NoResults />;
    }
  }

  return searchResult;
};

export const composeSearchResultArtists = (loading, error, data, handler) => {
  let searchResult;
  if (loading) {
    searchResult = <StyledSpinner />;
  } else if (error) {
    searchResult = <Text>Error: {error.message}</Text>;
  } else if (data) {
    if (data.artists) {
      searchResult = data.artists.map((artist) => {
        return (
          <SearchItem key={artist.id} attributes={artist.attributes} id={artist.id} type={artist.type} handleClick={handler} />
        ); 
      });
    } else {
      searchResult = <NoResults />;
    }
  }

  return searchResult;
};
