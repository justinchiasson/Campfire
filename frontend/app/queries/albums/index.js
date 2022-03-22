import { gql } from '@apollo/client';

export const GET_ALBUMS = gql`
  query GetAlbums($search: String!) {
    albums(search: $search) {
      id
      attributes {
        name
        artistName
        artwork {
          url
          width
          height
        }
        trackCount
        recordLabel
        copyright
        isSingle
        contentRating
        genreNames
        releaseDate
      }
      type
    }
  }
`;

export const GET_ALBUM = gql`
  query GetAlbum($id: ID!) {
    album(id: $id) {
      id
      attributes {
        name
        artistName
        artwork {
          url
          width
          height
        }
        trackCount
        recordLabel
        copyright
        isSingle
        editorialNotes
        contentRating
        genreNames
        releaseDate
      }
      relationships {
        tracks {
          data
        }
      }
      type
    }
  }
`;
