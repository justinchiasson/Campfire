import { gql } from '@apollo/client';

export const GET_SONGS = gql`
  query GetSongs($search: String!) {
    songs(search: $search) {
      id
      attributes {
        albumName
        name
        artistName
        genreNames
        artwork {
          url
          width
          height
        }
        releaseDate
      }
    }
  }
`;
