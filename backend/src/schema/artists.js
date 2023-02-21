import { gql } from 'apollo-server-express';

const artistSchema = gql `
  type Query {
    artists(search: String): [Artist!]
    artist(id: ID!): Artist!
  }

  type Artist {
    id: ID!
    attributes: ArtistAttributes!
    relationships: ArtistRelationships
    type: String!
  }

  type ArtistAttributes {
    name: String!
    genreNames: [String]
    artwork: ArtistArt
  }

  type ArtistArt {
    bgColor: String
    height: Int
    textColor1: String
    textColor2: String
    textColor3: String
    textColor4: String
    url: String
    width: Int
  }

  type ArtistRelationships {
    albums: AlbumsData
  }

  type AlbumsData {
    data: [AlbumReference]
  }

  type AlbumReference {
    id: ID!
  }
`;

export default artistSchema;
