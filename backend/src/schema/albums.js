import { gql } from 'apollo-server-express';

const albumSchema = gql `
  type Query {
    albums(search: String): [Album!]
    album(id: ID!): Album!
  }

  type Album {
    id: ID!
    attributes: AlbumAttributes!
    relationships: AlbumRelationships
    type: String!
  }

  type AlbumAttributes {
    artistName: String!
    artwork: AlbumArt
    isSingle: Boolean
    trackCount: Int!
    name: String!
    recordLabel: String
    copyright: String
    editorialNotes: EditorialNotes
    contentRating: String
    genreNames: [String]
    releaseDate: String
  }

  type EditorialNotes {
    short: String
  }

  type AlbumRelationships {
    tracks: TracksData
    artists: ArtistsData
  }

  type TracksData {
    data: [Song]
  }

  type ArtistsData {
    data: [ArtistReference]
  }

  type ArtistReference {
    id: ID!
  }
`;

export default albumSchema;
