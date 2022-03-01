import { ApolloClient, InMemoryCache, gql} from "@apollo/client";
  
const client = new ApolloClient({
  uri: 'https://kf9p4bkih6.execute-api.eu-west-1.amazonaws.com/dev/',
  cache: new InMemoryCache()
});
  
const PLAYERS = gql`
  query Players {
    headToHead {
      firstname
      lastname
      shortname
      picture {
        url
      }
      country {
        picture {
          url
        }
      }
      stats {
        rank
        points
        weight
        height
        age
        last
      }
    }
  }
`;

export {client, PLAYERS};