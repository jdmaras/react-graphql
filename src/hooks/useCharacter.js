import { useQuery, gql } from "@apollo/client"

// naming the query "GetCharacter"
// then you have it take in an id and defining it ID type and ! makes you need ot put it in
const GET_CHARACTER = gql`
query GetCharacter($id: ID!){
    character (id: $id) {
        name
        id
        image
          episode {
          name
          episode
        }
      }
  }
`
//the hook takes in an ID
export const useCharacter = (id) => {
    //useQuery hook to run GET_CHARACTER and then
    //you give it the specification of the id
    const { data, error, loading } = useQuery(GET_CHARACTER, {
        variables: {
            id
        }
    });

    return {
        data,
        error,
        loading,
    }
}