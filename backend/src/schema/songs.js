import { gql } from 'apollo-server-express';

const songSchema = gql `
  type Query {
    songs(search: String): [Song!]
    song(id: ID!): Song!
  }

  type Song {
    id: ID!
    attributes: SongAttributes!
    relationships: SongRelationships
    type: String!
  }

  type SongAttributes {
    albumName: String!
    artistName: String!
    artwork: AlbumArt
    durationInMillis: Int
    name: String!
    genreNames: [String]
    releaseDate: String
    discNumber: Int
    trackNumber: Int
    contentRating: String
  }

  type AlbumArt {
    bgColor: String
    height: Int
    textColor1: String
    textColor2: String
    textColor3: String
    textColor4: String
    url: String
    width: Int
  }

  type SongRelationships {
    albums: AlbumsData
    artists: ArtistsData
  }

  type AlbumsData {
    data: [AlbumReference]
  }

  type AlbumReference {
    id: ID!
  }

  type ArtistsData {
    data: [ArtistReference]
  }

  type ArtistReference {
    id: ID!
  }
`;

export default songSchema;
