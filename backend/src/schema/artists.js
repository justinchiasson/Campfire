import { gql } from 'apollo-server-express';

export default gql `
  type Query {
    artists(search: String): [Artist!]
    artist(id: ID!): Artist!
  }

  type Artist {
    id: ID!
    attributes: ArtistAttributes!
    relationships: ArtistRelationships
  }

  type ArtistAttributes {
    name: String!
    genreNames: [String!]
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
