import { gql } from '@apollo/client';

export const GET_SONGS = gql`
  query GetSongs($search: String!) {
    songs(search: $search) {
      id
      attributes {
        albumName
        name
        artistName
        artwork {
          url
          width
          height
        }
        durationInMillis
        releaseDate
      }
      type
    }
  }
`;

export const GET_SONG = gql`
  query GetSong($id: ID!) {
    song(id: $id) {
      id
      attributes {
        albumName
        name
        artistName
        artwork {
          url
          width
          height
        }
        durationInMillis
        releaseDate
      }
      type
      relationships {
        albums {
          data {
            id
          }
        }
        artists {
          data {
            id
          }
        }
      }
    }
  }
`;
