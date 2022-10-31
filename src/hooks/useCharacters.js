import { useQuery, gql } from "@apollo/client"

//naming your query and making it equal to the import from apollo/client
const GET_CHARACTERS = gql`
query {
    characters {
      results {
        id
        name
        image
          gender
      }
    }
  }
`
//anytime we call this function, it will make the useQuery call
export const useCharacters = () => {
    const { error, loading, data } = useQuery(GET_CHARACTERS)

    return {
        error,
        data,
        loading,
    }
}