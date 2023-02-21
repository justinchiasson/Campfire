import { gql } from '@apollo/client';

export const GET_ARTISTS = gql`
  query GetArtists($search: String!) {
    artists(search: $search) {
      id
      attributes {
        name
        genreNames
        artwork {
          url
          width
          height
        }
      }
      type
    }
  }
`;

export const GET_ARTIST = gql`
  query GetArtist($id: ID!) {
    artist(id: $id) {
      id
      attributes {
        name
        genreNames
        artwork {
          url
          width
          height
        }
      }
      type
    }
  }
`;
